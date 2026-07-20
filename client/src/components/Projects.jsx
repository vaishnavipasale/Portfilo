import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { getProjects } from '../api/api.js';

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
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    getProjects()
      .then((data) => {
        if (!cancelled) {
          setProjects(data);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="tag">03 — projects</div>
        <h2 className="reveal in" ref={headRef}>Things I've built</h2>
        <p className="section-lede reveal in">Pulled live from the API — edit server/src/data/projects.js to update.</p>

        {status === 'loading' && <p className="state-msg">$ fetching projects…</p>}
        {status === 'error' && (
          <p className="state-msg">
            Couldn't reach the API. Make sure the backend is running on the configured port.
          </p>
        )}
        {status === 'ready' && (
          <div className="projects">
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
