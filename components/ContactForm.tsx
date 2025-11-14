import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    usecase: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const payload = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(payload as any)),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('Thank you. Our team will respond shortly.');
      event.currentTarget.reset();
      setFormData({ name: '', email: '', organization: '', usecase: '', message: '' });
    } catch (error: unknown) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send message.');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-slate-200 bg-white p-10"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="text-3xl font-medium text-slate-900">
        Get in touch
      </h2>
      <p className="mt-3 text-base text-slate-600">
        Share your details and we will respond within one business day.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-900">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors duration-[150ms] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors duration-[150ms] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900">
          Organization
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors duration-[150ms] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-900">
          Primary use case
          <input
            type="text"
            name="usecase"
            value={formData.usecase}
            onChange={handleChange}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors duration-[150ms] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>
      </div>

      <label className="mt-6 flex flex-col text-sm font-medium text-slate-900">
        Additional context
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 transition-colors duration-[150ms] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="mt-8">
        <button
          type="submit"
          className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition-colors duration-[150ms] hover:bg-[#d11a1f] focus-visible:bg-[#d11a1f] disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send request'}
        </button>
      </div>

      {message && (
        <p
          role="status"
          className={`mt-6 rounded-lg px-4 py-3 text-sm ${
            status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
