import { useReveal } from '../hooks/useReveal.js';

const STATS = [
  { num: '4+', lbl: 'projects shipped end-to-end' },
  { num: '2', lbl: 'internships in full-stack & MERN dev' },
  { num: '8.02', lbl: 'SGPA in B.Tech (AI & Data Science)' },
  { num: '10+', lbl: 'languages, frameworks & tools' }
];

export default function About() {
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <div className="tag">01 — about</div>
        <div className="about-grid">
          <div className="reveal" ref={textRef}>
            <p>
              I'm a B.Tech graduate in <strong>Artificial Intelligence and Data Science</strong>, with hands-on
              experience building full-stack web and mobile applications. I like turning a rough idea into
              something people can actually click through — from database schema to the last pixel of UI.
            </p>
            <p>
              Most recently I've been deep in the <strong>MERN stack</strong>, with earlier work spanning
              <strong> Flutter</strong> and <strong>Android</strong> apps. I'm eager to bring that mix of
              software development and analytical thinking to a team building real products.
            </p>
          </div>
          <div className="stat-block reveal" ref={statsRef}>
            {STATS.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
