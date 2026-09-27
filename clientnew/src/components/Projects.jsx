import { useReveal } from '../hooks/useReveal.js';

const PROJECTS = [
  {
    id: 'gate-pass-generator',
    name: 'Gate Pass Generator',
    description:
      'Digital gate pass generation and approval system to streamline student movement tracking and enhance campus security.',
    stack: ['Flutter', 'Dart'],
    demoUrl: '',
    sourceUrl: 'https://github.com/vaishnavipasale'
  },
  {
    id: 'hostel-management-system',
    name: 'Hostel Management System',
    description:
      'Web-based system to manage room allocation, student records, and fee management, improving administrative efficiency through automation.',
    stack: ['React', 'Laravel', 'MySQL'],
    demoUrl: '',
    sourceUrl: 'https://github.com/vaishnavipasale'
  },
  {
    id: 'kiddoji',
    name: 'Kiddoji',
    description:
      'Child-friendly Android learning app with an interactive UI that teaches alphabets, numbers, and basic concepts in an engaging way.',
    stack: ['Android', 'Java'],
    demoUrl: '',
    sourceUrl: 'https://github.com/vaishnavipasale'
  },
  {
    id: 'task-management-system',
    name: 'Task Management System',
    description:
      'Task management platform with task creation, assignment, priority handling, deadline tracking, and progress dashboards.',
    stack: ['React', 'Node.js', 'Express'],
    demoUrl: '',
    sourceUrl: 'https://github.com/vaishnavipasale'
  }
];

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div className="card reveal" ref={ref}>
      <div className="card-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="fname">{project.id}/README.md</span>
      </div>
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="stack">
          {project.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
        <div className="card-links">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">live demo →</a>}
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">source →</a>}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useReveal();

  return (
    <section id="projects">
      <div className="wrap">
        <div className="tag">03 — projects</div>
        <h2 className="reveal" ref={headRef}>Things I've <span>Built</span></h2>
        <p className="section-lede reveal">A selection of projects I've worked on.</p>

        <div className="projects">
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
