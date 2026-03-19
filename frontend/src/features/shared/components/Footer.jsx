const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-name">NovaAI</span>
          <p className="footer-tagline">The Celestial Architect.</p>
        </div>
        <div className="footer-links">
          <a className="footer-link" href="https://www.linkedin.com/in/dileep-kumawat/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="footer-link" href="https://x.com/dilsecode" target="_blank" rel="noreferrer">
            Twitter | x
          </a>
          <a className="footer-link" href="https://github.com/Dileep-kumawat" target="_blank" rel="noreferrer">
            Github
          </a>
          <a className="footer-link" href="mailto:dileepkumawat@gmail.com" target="_blank" rel="noreferrer">
            gmail
          </a>
        </div>
        <div className="footer-copy">© {currentYear} NovaAI. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
