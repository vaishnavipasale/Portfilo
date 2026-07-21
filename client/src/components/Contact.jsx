import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const EMAIL = 'vaishnavipasale15@gmail.com';
const GITHUB = 'https://github.com/vaishnavipasale';
const LINKEDIN = 'https://linkedin.com/in/vaishnavipasale';

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="tag">05 — contact</div>
        <h2 className="reveal in">Let's <span>Talk</span></h2>
        <p className="section-lede reveal in">Open to senior/staff roles and interesting freelance work.</p>

        <div className="contact-term reveal" ref={ref}>
          <div className="terminal-bar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="terminal-title">contact.sh</span>
          </div>
          <div className="contact-body">
            <div className="copy-row">
              <span>{EMAIL}</span>
              <button type="button" className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyEmail}>
                {copied ? 'copied ✓' : 'copy'}
              </button>
            </div>
            <div className="copy-row">
              <span>github.com/vaishnavipasale</span>
              <button type="button" className="copy-btn" onClick={() => window.open(GITHUB, '_blank')}>open →</button>
            </div>
            <div className="copy-row">
              <span>linkedin.com/in/vaishnavipasale</span>
              <button type="button" className="copy-btn" onClick={() => window.open(LINKEDIN, '_blank')}>open →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
