import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const EMAIL = 'vaishnavipasale15@gmail.com';
const PHONE = '+91 8010234896';
const GITHUB = 'https://github.com/vaishnavipasale';
const LINKEDIN = 'https://linkedin.com/in/vaishnavipasale';
const RESUME = '/Vaishnavi_Pasale_Resume.pdf';

export default function Contact() {
  const headRef = useReveal();
  const bodyRef = useReveal();
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
        <h2 className="reveal" ref={headRef}>Let's talk</h2>
        <div className="reveal" ref={bodyRef}>
          <p className="section-lede">Open to full-time roles and interesting freelance work.</p>

          <div className="pass-card">
            <div className="pass-notch" />
            <div className="pass-notch right" />
            <div className="pass-rows">
              <div className="pass-row">
                <span>{EMAIL}</span>
                <button type="button" className={`pass-action ${copied ? 'copied' : ''}`} onClick={copyEmail}>
                  {copied ? 'copied' : 'copy'}
                </button>
              </div>
              <div className="pass-row">
                <span>{PHONE}</span>
                <button type="button" className="pass-action" onClick={() => window.open(`tel:${PHONE.replace(/\s+/g, '')}`, '_self')}>call</button>
              </div>
              <div className="pass-row">
                <span>github.com/vaishnavipasale</span>
                <button type="button" className="pass-action" onClick={() => window.open(GITHUB, '_blank')}>open</button>
              </div>
              <div className="pass-row">
                <span>linkedin.com/in/vaishnavipasale</span>
                <button type="button" className="pass-action" onClick={() => window.open(LINKEDIN, '_blank')}>open</button>
              </div>
            </div>
          </div>

          <a href={RESUME} target="_blank" rel="noreferrer" download className="btn btn-ghost resume-btn">
            Download resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}