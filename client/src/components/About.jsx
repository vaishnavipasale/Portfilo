import { useReveal } from '../hooks/useReveal.js';

const FOCUS = [
  { k: 'Full-stack web', v: 'React, Node.js, Express' },
  { k: 'Mobile apps', v: 'Flutter, Android (Java)' },
  { k: 'Data & AI foundation', v: 'B.Tech coursework' },
  { k: 'Databases', v: 'MySQL, MongoDB, Firebase' }
];

export default function About() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <h2 className="reveal" ref={headRef}>About</h2>
        <div className="reveal" ref={bodyRef}>
          <p className="section-lede">The short version, for anyone skimming.</p>
          <div className="about-grid">
            <div>
              <div className="profile-photo-box">VP</div>
              <div className="profile-content">
                <p>
                  I'm a B.Tech graduate in <strong>Artificial Intelligence and Data Science</strong>, with hands-on
                  experience building full-stack web and mobile applications. I like turning a rough idea into
                  something people can actually click through — from database schema to the last pixel of UI.
                </p>
                <p>
                  Most recently I've been deep in the <strong>MERN stack</strong>, with earlier work spanning
                  <strong> Flutter</strong> and <strong>Android</strong> development. I'm looking to bring that mix
                  of software engineering and analytical thinking to a team building real products.
                </p>
              </div>
            </div>
            <div>
              <div className="focus-list-label">Where I focus</div>
              <div className="focus-list">
                {FOCUS.map((f) => (
                  <div className="focus-row" key={f.k}>
                    <span className="k">{f.k}</span>
                    <span className="v">{f.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}