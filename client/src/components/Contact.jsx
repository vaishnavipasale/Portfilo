import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { sendContactMessage } from '../api/api.js';

const EMAIL = 'vaishnavipasale15@gmail.com';
const GITHUB = 'https://github.com/vaishnavipasale';
const LINKEDIN = 'https://linkedin.com/in/vaishnavipasale';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await sendContactMessage(form);
      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

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
        <h2 className="reveal in">Let's talk</h2>
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
              <button type="button" className="copy-btn" onClick={() => window.open(GITHUB, '_blank')}>open</button>
            </div>
            <div className="copy-row">
              <span>linkedin.com/in/vaishnavipasale</span>
              <button type="button" className="copy-btn" onClick={() => window.open(LINKEDIN, '_blank')}>open</button>
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: 18 }}>
              <div className="field">
                <label htmlFor="name">name</label>
                <input id="name" required value={form.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label htmlFor="email">email</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} />
              </div>
              <div className="field">
                <label htmlFor="message">message</label>
                <textarea id="message" rows={4} required value={form.message} onChange={update('message')} />
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'sending…' : 'run send --message'}
              </button>

              {status === 'ok' && <p className="form-msg ok">$ message sent — I'll reply soon.</p>}
              {status === 'error' && <p className="form-msg err">$ error: {error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
