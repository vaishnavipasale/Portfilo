import { getTransporter } from '../config/mailer.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'That email address doesn\'t look right.' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long (max 5000 characters).' });
  }

  const transporter = getTransporter();

  if (!transporter) {
    // No SMTP configured — log so the request still succeeds in local dev.
    console.log('New contact form submission (email not configured):', { name, email, message });
    return res.json({ ok: true, delivered: false });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br/>')}</p>`
    });
    res.json({ ok: true, delivered: true });
  } catch (err) {
    err.status = 502;
    err.message = 'Could not send the message right now — please try again shortly.';
    throw err;
  }
}
