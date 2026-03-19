const Navbar = ({ user }) => {
  return (
    <nav className="topnav">
      <div>
        <span className="nav-logo">NovaAI</span>
      </div>
      <div className="nav-links">
        <a className="nav-link active" href="#intelligence">Intelligence</a>
        <a className="nav-link" href="#architecture">Architecture</a>
        <a className="nav-link" href="#neuralNetwork">Neural Network</a>
        <a className="nav-link" href="#consensus">Consensus</a>
      </div>
      <div className="nav-actions">
        {
          user ?
            <button className="btn-initialize-nav">Dashboard</button>
            :
            <>
              <button className="btn-signin">Sign In</button>
              <button className="btn-initialize-nav">Initialize</button>
            </>
        }
      </div>
    </nav>
  );
};

export default Navbar;
