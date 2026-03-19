import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useHomeAnimations = () => {
  useEffect(() => {
    // Small timeout to ensure DOM is fully painted before GSAP measures elements
    const ctx = gsap.context(() => {

      /* ─────────────────────────────────────────────────────────
         1. HERO — page-load entrance (no ScrollTrigger)
      ───────────────────────────────────────────────────────── */
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from('.hero-label', {
          y: -28,
          opacity: 0,
          letterSpacing: '0.45em',
          filter: 'blur(6px)',
          duration: 0.9,
        })
        .from(
          '.hero-h1',
          {
            y: 60,
            opacity: 0,
            scale: 0.93,
            filter: 'blur(14px)',
            duration: 1.1,
          },
          '-=0.55'
        )
        .from(
          '.hero-p',
          {
            y: 40,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 0.9,
          },
          '-=0.65'
        )
        .from(
          '.search-group',
          {
            y: 30,
            opacity: 0,
            filter: 'blur(6px)',
            duration: 0.8,
          },
          '-=0.6'
        );

      /* ─────────────────────────────────────────────────────────
         2. HERO BLOBS — parallax drift on scroll
      ───────────────────────────────────────────────────────── */
      gsap.to('.hero-blob-primary', {
        x: -50,
        y: 100,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '#intelligence',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to('.hero-blob-secondary', {
        x: 50,
        y: -100,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '#intelligence',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      /* ─────────────────────────────────────────────────────────
         3. FEATURES / ARCHITECTURE SECTION
      ───────────────────────────────────────────────────────── */

      // Section header
      gsap.from('.features-title-block', {
        x: -80,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#architecture',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.features-divider', {
        scaleX: 0,
        transformOrigin: 'left center',
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#architecture',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      // Feature cards — staggered from both sides
      gsap.from('.feature-card-1', {
        y: 70,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.feature-card-2', {
        x: 80,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.15,
      });

      gsap.from('.feature-card-3', {
        x: -80,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        delay: 0.25,
      });

      gsap.from('.feature-card-4', {
        scale: 0.82,
        y: 60,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.1,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 72%',
          toggleActions: 'play none none none',
        },
        delay: 0.35,
      });

      /* ─────────────────────────────────────────────────────────
         4. PRODUCT SHOWCASE SECTION
      ───────────────────────────────────────────────────────── */

      gsap.from('.product-header', {
        y: 60,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#neuralNetwork',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      // Device frame — cinematic scale reveal
      gsap.from('.sleek-frame', {
        scale: 0.78,
        y: 80,
        opacity: 0,
        filter: 'blur(16px)',
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.product-showcase-wrapper',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.deco-primary', {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.product-showcase-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.2,
      });

      gsap.from('.deco-secondary', {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.product-showcase-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.2,
      });

      /* ─────────────────────────────────────────────────────────
         5. CONSENSUS / SOCIAL PROOF SECTION
      ───────────────────────────────────────────────────────── */

      // Vertical connector line — grows downward
      gsap.from('.consensus-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#consensus',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.consensus-h2', {
        y: 50,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#consensus',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      // Card 1 — sweeps from left, lands at rotate(-2deg) matching static style
      gsap.from('.card-1', {
        x: -100,
        y: 40,
        opacity: 0,
        filter: 'blur(8px)',
        rotation: -8,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cards-flex',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      // Card 2 — rises and snaps to scale(1.05) matching static style
      gsap.from('.card-2', {
        y: 70,
        opacity: 0,
        scale: 0.86,
        filter: 'blur(10px)',
        duration: 1.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.cards-flex',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: 0.12,
      });

      // Card 3 — sweeps from right, lands at rotate(3deg) matching static style
      gsap.from('.card-3', {
        x: 100,
        y: 40,
        opacity: 0,
        filter: 'blur(8px)',
        rotation: 10,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cards-flex',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        delay: 0.08,
      });

      /* ─────────────────────────────────────────────────────────
         6. CTA SECTION
      ───────────────────────────────────────────────────────── */

      gsap.from('.cta-card', {
        scale: 0.82,
        y: 70,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      /* ─────────────────────────────────────────────────────────
         7. FOOTER
      ───────────────────────────────────────────────────────── */

      gsap.from('.footer-inner', {
        y: 50,
        opacity: 0,
        filter: 'blur(6px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });

    }); // end gsap.context

    return () => {
      ctx.revert(); // Clean up all GSAP animations and ScrollTriggers on unmount
    };
  }, []);
};

export default useHomeAnimations;