'use client';

import { useState } from 'react';
import { LINKEDIN_URL } from '@/constants/social';

// Replace with your Formspree form ID after signing up at https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl text-black mb-4">Contact</h1>
      <p className="text-gray-600 mb-10">
        Have a project in mind or want to collaborate? Send me a message.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y"
              placeholder="Your message"
            />
          </div>
          {status === 'success' && (
            <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>

        <div>
          <h2 className="font-display font-bold text-lg text-black mb-4">Elsewhere</h2>
          <ul className="space-y-3">
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover font-medium"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@damilola_okewoye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover font-medium"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
