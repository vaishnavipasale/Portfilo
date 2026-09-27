import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const EMAIL = 'vaishnavipasale15@gmail.com';
const PHONE = '+91 8010234896';
const GITHUB = 'https://github.com/vaishnavipasale';
const LINKEDIN = 'https://linkedin.com/in/vaishnavipasale';
const RESUME = '/Vaishnavi_Pasale_Resume.pdf';

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
        <h2 className="reveal">Let's <span>Talk</span></h2>
        <p className="section-lede reveal">Open to senior/staff roles and interesting freelance work.</p>

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
            <div className="copy-row">
              <span>{PHONE}</span>
              <button type="button" className="copy-btn" onClick={() => window.open(`tel:${PHONE.replace(/\s+/g, '')}`, '_self')}>call →</button>
            </div>
          </div>
        </div>

        <a href={RESUME} target="_blank" rel="noreferrer" download className="btn btn-ghost resume-btn reveal">
          ↓ download resume (pdf)
        </a>
      </div>
    </section>
  );
}
