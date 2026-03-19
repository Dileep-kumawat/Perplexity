const ProductShowcase = () => {
  return (
    <section id="neuralNetwork">
      <div className="container">
        <div className="product-header">
          <h2 className="product-h2">THE INTERFACE OF TOMORROW</h2>
          <p className="product-p">
            Seamlessly blend human intuition with machine precision through our proprietary Fluid UI.
          </p>
        </div>

        <div className="product-showcase-wrapper">
          {/* Sleek Frame */}
          <div className="sleek-frame">
            <div className="video-inner">
              <video autoPlay loop muted playsInline>
                <source src="landing-page-video.mp4" />
              </video>
            </div>
          </div>
          {/* Decorative glows */}
          <div className="deco-primary"></div>
          <div className="deco-secondary"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
