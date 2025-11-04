import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData as any))
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Thanks! We received your request. We will get back soon.');
        e.currentTarget.reset();
      } else {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-2xl font-semibold">Request a demo</h2>
      <input type="text" name="name" placeholder="Name" required className="w-full rounded-md border p-3" />
      <input type="email" name="email" placeholder="Email" required className="w-full rounded-md border p-3" />
      <input type="text" name="organization" placeholder="Organization" className="w-full rounded-md border p-3" />
      <input type="text" name="usecase" placeholder="Use case" className="w-full rounded-md border p-3" />
      <textarea name="message" placeholder="Message" rows={4} className="w-full rounded-md border p-3" />
      {/* Honeypot */}
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="rounded-md bg-primary px-5 py-3 text-white font-medium hover:bg-primaryHover disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send request'}
        </button>
        <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-primary">
          Or schedule via Calendly
        </a>
      </div>
      {message && (
        <div role="status" className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-primary'}`}>{message}</div>
      )}
    </form>
  );
}


