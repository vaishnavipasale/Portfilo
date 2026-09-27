import { useReveal } from '../hooks/useReveal.js';

const LANGUAGES = [
  { name: 'JavaScript', level: 5 },
  { name: 'Java', level: 4 },
  { name: 'Python', level: 4 },
  { name: 'Dart', level: 4 },
  { name: 'Kotlin', level: 3 },
  { name: 'HTML & CSS', level: 5 }
];

const FRAMEWORKS = [
  { name: 'React.js', level: 5 },
  { name: 'Node.js & Express', level: 4 },
  { name: 'Flutter', level: 4 },
  { name: 'Laravel', level: 3 }
];

const DATABASES = [
  { name: 'MySQL', level: 4 },
  { name: 'MongoDB', level: 4 },
  { name: 'Firebase', level: 4 }
];

const TOOLS = ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Jupyter Notebook', 'Anaconda', 'Zed'];

function Dots({ level, max = 5 }) {
  return (
    <div className="dots">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`dot-pip ${i < level ? 'filled' : ''}`} />
      ))}
    </div>
  );
}

function SkillGroup({ label, items }) {
  return (
    <div className="skill-group">
      <div className="skill-group-label">{label}</div>
      <div className="skill-rows">
        {items.map((s) => (
          <div className="skill-row" key={s.name}>
            <span className="name">{s.name}</span>
            <Dots level={s.level} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="reveal" ref={headRef}>Skills</h2>
        <div className="reveal" ref={bodyRef}>
          <p className="section-lede">Rated the way I'd rate myself in an interview, not how I'd write it on a resume.</p>

          <SkillGroup label="Languages" items={LANGUAGES} />
          <SkillGroup label="Frameworks &amp; libraries" items={FRAMEWORKS} />
          <SkillGroup label="Databases" items={DATABASES} />

          <div className="skill-group">
            <div className="skill-group-label">Tools &amp; platforms</div>
            <div className="tool-tags">
              {TOOLS.map((t) => <span className="tool-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}