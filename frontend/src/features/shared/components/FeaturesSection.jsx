const FeaturesSection = () => {
  return (
    <section id="architecture">
      <div className="container">
        <div className="features-header">
          <div className="features-title-block">
            <h2 className="section-h2">ENGINEERED FOR PRECISION</h2>
            <p className="text-muted">The standard for high-performance intelligence interfaces.</p>
          </div>
          <div className="features-divider"></div>
        </div>

        <div className="features-grid">

          {/* Feature 1: Neural Semantic Search */}
          <div className="glass-panel feature-card feature-card-1">
            <div>
              <div className="feature-icon feature-icon-primary">
                <span className="material-symbols-outlined">neurology</span>
              </div>
              <h3 className="feature-h3-lg">Neural Semantic Search</h3>
              <p className="feature-p-lg">
                Don't just find results. NovaAI understands the dimensional intent behind your queries,
                mapping relationships across billions of data points instantly.
              </p>
            </div>
            <div className="feature-tags">
              <span className="tag tag-primary">High Fidelity</span>
              <span className="tag tag-secondary">Context Aware</span>
            </div>
          </div>

          {/* Feature 2: Protocol Source Citations */}
          <div className="glass-panel feature-card feature-card-2">
            <div className="feature-glow-secondary"></div>
            <div className="feature-icon feature-icon-secondary">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h3 className="feature-h3">Protocol Source Citations</h3>
            <p className="feature-p">
              Every output is anchored in verifiable truth. Deep-link directly to the origins of
              intelligence with our transparent citation engine.
            </p>
          </div>

          {/* Feature 3: Fast Temporal Answers */}
          <div className="glass-panel feature-card feature-card-3">
            <div className="feature-icon feature-icon-tertiary">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <h3 className="feature-h3">Fast Temporal Answers</h3>
            <p className="feature-p">
              Zero latency synthesis. NovaAI's localized neural weights ensure you receive complex
              analysis in milliseconds, not minutes.
            </p>
          </div>

          {/* Feature 4: Social Quote */}
          <div className="glass-panel feature-card feature-card-4">
            <div style={{ textAlign: 'center' }}>
              <div className="avatar-stack">
                <img
                  alt="User avatar 1"
                  src="user-avatar-1.png"
                />
                <img
                  alt="User avatar 2"
                  src="user-avatar-2.png"
                />
                <img
                  alt="User avatar 3"
                  src="user-avatar-3.png"
                />
                <div className="avatar-counter">+12k</div>
              </div>
              <p className="quote-text">"The most visceral AI experience I've encountered."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
