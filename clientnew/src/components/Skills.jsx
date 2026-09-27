import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const LANGUAGES = [
  { name: 'JavaScript', pct: 88 },
  { name: 'Java', pct: 78 },
  { name: 'Python', pct: 72 },
  { name: 'Dart', pct: 82 },
  { name: 'Kotlin', pct: 70 },
  { name: 'HTML', pct: 90 },
  { name: 'CSS', pct: 88 }
];

const FRAMEWORKS = [
  { name: 'React.js', pct: 85 },
  { name: 'Node.js', pct: 82 },
  { name: 'Express.js', pct: 78 },
  { name: 'Flutter', pct: 85 },
  { name: 'Laravel', pct: 72 }
];

const DATABASES = [
  { name: 'MySQL', pct: 78 },
  { name: 'MongoDB', pct: 74 },
  { name: 'Firebase', pct: 75 }
];

const TOOLS = [
  'Git', 'GitHub', 'Android Studio', 'VS Code', 'Jupyter Notebook', 'Anaconda', 'Zed'
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

function SkillGroup({ label, items }) {
  const ref = useReveal();
  return (
    <div className="skill-group reveal" ref={ref}>
      <div className="skill-group-label">{label}</div>
      <div className="modules">
        {items.map((s) => (
          <SkillModule key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();
  const toolsRef = useReveal();

  return (
    <section id="skills">
      <div className="wrap">
        <div className="tag">02 — stack</div>
        <h2 className="reveal" ref={headRef}>Tools I <span>Reach For</span></h2>
        <p className="section-lede reveal">Not an exhaustive list — just what actually ships. Depth over breadth.</p>

        <SkillGroup label="Languages" items={LANGUAGES} />
        <SkillGroup label="Frameworks &amp; Libraries" items={FRAMEWORKS} />
        <SkillGroup label="Databases" items={DATABASES} />

        <div className="skill-group reveal" ref={toolsRef}>
          <div className="skill-group-label">Tools &amp; Platforms</div>
          <div className="stack">
            {TOOLS.map((t) => <span className="chip" key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
