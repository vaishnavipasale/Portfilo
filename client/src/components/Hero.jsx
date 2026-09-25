import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  { text: '$ whoami', type: 'prompt', pause: 200 },
  { text: 'initializing profile...', type: 'out-role', pause: 350 },
  { text: 'Vaishnavi Pasale', type: 'out-name', pause: 250 },
  { text: 'Full-Stack Developer — React, Node.js & Flutter.', type: 'out-role', pause: 0 }
];

export default function Hero() {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setLines(BOOT_LINES.map((l) => ({ ...l, display: l.text })));
      setDone(true);
      return;
    }

    let cancelled = false;

    async function typeAll() {
      const built = [];
      for (const spec of BOOT_LINES) {
        if (cancelled) return;
        built.push({ ...spec, display: '' });
        setLines([...built]);

        const speed = spec.type === 'out-name' ? 55 : 18;
        for (let i = 1; i <= spec.text.length; i++) {
          if (cancelled) return;
          await sleep(speed);
          built[built.length - 1].display = spec.text.slice(0, i);
          setLines([...built]);
        }
        await sleep(spec.pause);
      }
      if (!cancelled) setDone(true);
    }

    typeAll();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="hero" style={{ borderTop: 'none', padding: '80px 0 0' }}>
      <div className="hero-grid" />
      <div className="particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
      <div className="wrap">
        <div className="terminal hero-enter" style={{ animationDelay: '0.05s' }}>
          <div className="terminal-bar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="terminal-title">vaishnavi@portfolio — zsh</span>
          </div>
          <div className="terminal-body">
            {lines.map((l, i) => (
              <div key={i} className={`line ${l.type}`}>{l.display}</div>
            ))}
            {done && <span className="cursor" />}
          </div>
        </div>

        <div className="hero-cta hero-enter" style={{ animationDelay: '0.25s' }}>
          <a href="#projects" className="btn btn-primary">view projects →</a>
          <a href="#contact" className="btn btn-ghost">get in touch</a>
        </div>

        <div className="hero-stats hero-enter" style={{ animationDelay: '0.35s' }}>
          <div className="hero-stat">
            <span className="hero-stat-num">4+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">2</span>
            <span className="hero-stat-label">Internships</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">8.02</span>
            <span className="hero-stat-label">SGPA</span>
          </div>
        </div>
      </div>
      <div className="scroll-cue"><span>scroll</span><span className="bar" /></div>
    </section>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}