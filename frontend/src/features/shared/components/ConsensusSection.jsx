const ConsensusSection = () => {
  return (
    <section id="consensus">
      <div className="container">
        <div className="consensus-line"></div>
        <h2 className="consensus-h2">Global Intelligence Consensus</h2>

        <div className="cards-flex">

          {/* Card 1 */}
          <div className="glass-panel card card-sm card-1">
            <div className="card-avatar-row">
              <img
                className="card-avatar card-avatar-grayscale"
                alt="CEO"
                src="ceo-avatar-1.png"
              />
              <div>
                <h4 className="card-name">Marcus Vane</h4>
                <p className="card-title card-title-primary">CTO, Aether Systems</p>
              </div>
            </div>
            <p className="card-body">
              "NovaAI didn't just optimize our workflow; it fundamentally changed how we perceive
              data architecture. It's the silent partner in every major decision we make."
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel card card-md card-2">
            <div className="card-avatar-row">
              <img
                className="card-avatar card-avatar-border-secondary"
                alt="Designer"
                src="ceo-avatar-2.png"
              />
              <div>
                <h4 className="card-name card-name-secondary">Elena Kross</h4>
                <p className="card-title card-title-muted">Creative Director, Neo-Lab</p>
              </div>
            </div>
            <p className="card-body-white">
              "The cinematic fidelity of the interface is unmatched. It feels less like a tool
              and more like an extension of my own creative vision. It bridges the gap between thought and execution."
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel card card-sm card-3">
            <div className="card-avatar-row">
              <img
                className="card-avatar"
                alt="Dev"
                src="ceo-avatar-3.png"
              />
              <div>
                <h4 className="card-name">Julian Stark</h4>
                <p className="card-title card-title-tertiary">Neural Architect</p>
              </div>
            </div>
            <p className="card-body">
              "Verified, precise, and hauntingly efficient. The citation engine alone makes it
              superior to any LLM on the market. It's the gold standard for research."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsensusSection;
