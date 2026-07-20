import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const SKILLS = [
  { name: 'JavaScript / Node.js', pct: 85 },
  { name: 'React', pct: 82 },
  { name: 'Flutter / Dart', pct: 80 },
  { name: 'Java / Kotlin', pct: 75 },
  { name: 'MongoDB / Firebase / MySQL', pct: 78 },
  { name: 'HTML / CSS', pct: 88 }
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="module reveal in" ref={ref}>
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
        <h2 className="reveal in" ref={headRef}>Tools I reach for</h2>
        <p className="section-lede reveal in">Not an exhaustive list — just what actually ships. Depth over breadth.</p>
        <div className="modules">
          {SKILLS.map((s) => (
            <SkillModule key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
