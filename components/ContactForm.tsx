import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    usecase: '',
    message: '',
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const formDataObj = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formDataObj as any))
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Thanks! We received your request. We will get back soon.');
        e.currentTarget.reset();
        setFormData({ name: '', email: '', organization: '', usecase: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="space-y-6 glass-strong rounded-2xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-labelledby="contact-form-heading"
    >
      <motion.h2
        id="contact-form-heading"
        className="text-3xl font-heading font-bold text-text mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Request a demo
      </motion.h2>

      <motion.p
        className="text-muted mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Reach out for partnerships, media, careers, or product demos.
      </motion.p>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-lg rounded-2xl z-50"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg font-medium text-text"
              >
                Message sent successfully!
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Organization"
          className="w-full rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <input
          type="text"
          name="usecase"
          value={formData.usecase}
          onChange={handleChange}
          placeholder="Use case"
          className="w-full rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className="w-full rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
        />
      </motion.div>

      {/* Honeypot */}
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <motion.button
          type="submit"
          className="relative rounded-lg bg-primary px-8 py-4 text-white font-medium shadow-lg hover:shadow-glow-lg disabled:opacity-50 transition-all duration-300 ripple-effect overflow-hidden"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Sending…
            </span>
          ) : (
            'Send request'
          )}
        </motion.button>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted hover:text-primary transition-colors"
        >
          Or schedule via Calendly
        </a>
      </motion.div>

      <AnimatePresence>
        {message && status !== 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="status"
            className={`text-sm p-4 rounded-lg ${
              status === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
