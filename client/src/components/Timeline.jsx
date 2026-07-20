import { useReveal } from '../hooks/useReveal.js';

const ENTRIES = [
  {
    ver: 'v2.1.0',
    role: 'MERN Stack Development — Softgrid Pvt Ltd',
    meta: 'March 2026 — present',
    desc: 'Practical training in React and Node.js; developing end-to-end applications and databases, strengthening real-world development skills.'
  },
  {
    ver: 'v2.0.0',
    role: 'Full Stack Web Development Intern — Mansvi Pvt Ltd',
    meta: 'Aug 2025 — April 2026',
    desc: 'Designed and developed responsive web applications using front-end and back-end technologies. Gained hands-on experience in feature development, database/API integration, and collaborative development.'
  },
  {
    ver: 'v1.3.0',
    role: 'B.Tech, Artificial Intelligence & Data Science — VVPIET Solapur',
    meta: '2023 — 2026 · SGPA 8.02',
    desc: 'Core coursework in AI, data science, and software engineering, alongside independent full-stack and mobile app projects.'
  },
  {
    ver: 'v1.2.0',
    role: 'Diploma — BMP Solapur',
    meta: '2020 — 2023 · 80%',
    desc: 'Foundational diploma studies leading into the B.Tech program.'
  },
  {
    ver: 'v1.1.0',
    role: 'Class 10th — DSG School, Mohol',
    meta: '2019 — 2020 · 85.80%',
    desc: 'Completed secondary education.'
  }
];

function Entry({ entry }) {
  const ref = useReveal();
  return (
    <div className="entry reveal" ref={ref}>
      <div className="ver">{entry.ver}</div>
      <div className="role">{entry.role}</div>
      <div className="meta">{entry.meta}</div>
      <p>{entry.desc}</p>
    </div>
  );
}

export default function Timeline() {
  const headRef = useReveal();
  return (
    <section id="experience">
      <div className="wrap">
        <div className="tag">04 — changelog</div>
        <h2 className="reveal in" ref={headRef}>Career log</h2>
        <p className="section-lede reveal in">Chronological, like any good release history.</p>
        <div className="timeline">
          {ENTRIES.map((e) => <Entry key={e.ver} entry={e} />)}
        </div>
      </div>
    </section>
  );
}
