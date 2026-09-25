import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const SKILLS = [
  { name: 'Flutter', pct: 85 },
  { name: 'Dart', pct: 82 },
  { name: 'HTML', pct: 90 },
  { name: 'CSS', pct: 88 },
  { name: 'Java Core', pct: 75 },
  { name: 'Python', pct: 70 },
  { name: 'Node.js', pct: 82 },
  { name: 'React.js', pct: 85 },
  { name: 'JavaScript', pct: 88 },
  { name: 'Android App Development', pct: 80 },
  { name: 'GitHub', pct: 90 }
];

function SkillModule({ name, pct }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(pct);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="module" ref={ref}>
      <div className="module-head">
        <span className="name">{name}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="meter">
        <div className="meter-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();

  return (
    <section id="skills">
      <div className="wrap">
        <div className="tag">02 — stack</div>
        <h2 className="reveal" ref={headRef}>Tools I <span>Reach For</span></h2>
        <p className="section-lede reveal">Not an exhaustive list — just what actually ships. Depth over breadth.</p>
        <div className="modules">
          {SKILLS.map((s) => (
            <SkillModule key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
