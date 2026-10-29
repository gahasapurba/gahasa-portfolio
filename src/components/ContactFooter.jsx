import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Mail, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#38bdf8', '#22c55e']
    });
  };

  return (
    <footer id="contact" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: '#05070a', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        {/* Contact Header & Interactive Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div>
            <div className="section-tag">Let's Connect</div>
            <h2 className="section-title">Initiate Collaboration</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether you are looking to architect high-scale fintech systems, discuss enterprise wholesale banking innovations, or explore creative technology projects — my inbox is open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="var(--gold-light)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>Direct Email</div>
                  <div style={{ fontWeight: 600 }}>{PERSONAL_DATA.email}</div>
                </div>
              </a>

              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>LinkedIn Profile</div>
                  <div style={{ fontWeight: 600 }}>linkedin.com/in/gahasapurba</div>
                </div>
              </a>

              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>GitHub Repository Hub</div>
                  <div style={{ fontWeight: 600 }}>github.com/gahasapurba</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem' }}>
              Built for Netlify Forms — zero database required, instantly delivers to inbox.
            </p>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '12px' }}>
                <CheckCircle2 size={36} color="#22c55e" style={{ margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>Thank you for reaching out!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  Your message has been queued. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Gahasa, let's discuss..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'inherit',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', fontSize: '0.8rem', color: 'var(--text-faint)' }}>
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_DATA.fullName}. All rights reserved.
          </div>
          <div>
            Crafted with React 19, Vanilla Design Tokens, & Deployed via Netlify.
          </div>
        </div>

      </div>
    </footer>
  );
}
