export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="badge-wrap">
          <div className="badge-card">
            <div className="badge-top">
              <div className="badge-photo">VP</div>
            </div>
            <div className="badge-name">Vaishnavi Pasale</div>
            <p className="badge-role">Full-stack developer — React, Node.js &amp; Flutter</p>
            <div className="badge-id">NO. 2026-0007 · issued Solapur, India</div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">4+</div>
                <div className="hero-stat-label">Projects shipped</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">2</div>
                <div className="hero-stat-label">Internships</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">8.02</div>
                <div className="hero-stat-label">SGPA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">See the work</a>
          <a href="#contact" className="btn btn-ghost">Say hello</a>
          <a href="/Vaishnavi_Pasale_Resume.pdf" target="_blank" rel="noreferrer" download className="btn btn-ghost">Resume</a>
        </div>
      </div>
    </section>
  );
}