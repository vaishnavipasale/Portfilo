const API_URL = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.');
  }
  return data;
}

export function getProjects() {
  return request('/projects');
}

export function sendContactMessage(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
