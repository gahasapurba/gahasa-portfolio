import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Mail, Send, Sparkles, CheckCircle2, MessageSquare, ExternalLink, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format friendly WhatsApp message
    const waText = `Halo Gahasa,\n\nSaya ${formData.name} (${formData.email}).\n\n${formData.message}\n\n(Dikirim dari gahasapurba.com)`;
    const waUrl = `https://api.whatsapp.com/send?phone=628116120030&text=${encodeURIComponent(waText)}`;

    // Trigger UI success & open WhatsApp directly
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#22c55e', '#38bdf8', '#f59e0b']
    });

    window.open(waUrl, '_blank');
  };

  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-dark)', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        {/* Contact Header & Interactive Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div>
            <div className="section-tag">Let's Connect</div>
            <h2 className="section-title">Initiate Collaboration</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether you are looking to architect high-scale fintech systems, discuss enterprise wholesale banking innovations, or explore creative technology projects — feel free to reach out directly via WhatsApp or Email.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* WhatsApp Quick Link */}
              <a
                href={PERSONAL_DATA.whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(34, 197, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={20} color="#22c55e" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>WhatsApp Direct</div>
                  <div style={{ fontWeight: 600, color: '#22c55e' }}>{PERSONAL_DATA.whatsapp}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--gold-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={19} color="var(--gold-light)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>Primary Email</div>
                  <div style={{ fontWeight: 600 }}>{PERSONAL_DATA.email}</div>
                </div>
              </a>

              {/* Linktree */}
              <a
                href={PERSONAL_DATA.linktree}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--cyan-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={19} color="var(--cyan-accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>All Profiles & Social Hub</div>
                  <div style={{ fontWeight: 600 }}>linktr.ee/gahasapurba</div>
                </div>
              </a>

              {/* CV / Resume */}
              <a
                href={PERSONAL_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={19} color="var(--text-main)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>Curriculum Vitae</div>
                  <div style={{ fontWeight: 600 }}>Download Resume (PDF)</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-faint)', marginBottom: '1.5rem' }}>
              Fill in your details below to directly connect via WhatsApp chat and record your inquiry.
            </p>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '12px' }}>
                <CheckCircle2 size={36} color="#22c55e" style={{ margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>Connecting to WhatsApp...</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  A WhatsApp chat window has been opened with your pre-filled message. If it didn't open automatically, click the link below:
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={`https://api.whatsapp.com/send?phone=628116120030&text=${encodeURIComponent(`Halo Gahasa, saya ${formData.name} (${formData.email}): ${formData.message}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
                  >
                    <MessageSquare size={16} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

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
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
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
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
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
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      fontFamily: 'inherit',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: '#fff', boxShadow: '0 4px 20px rgba(34, 197, 94, 0.35)' }}>
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp Chat</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', fontSize: '0.8rem', color: 'var(--text-faint)' }}>
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_DATA.fullName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href={PERSONAL_DATA.portfolio} style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>gahasapurba.com</a>
            <span>&bull;</span>
            <a href={PERSONAL_DATA.linktree} target="_blank" rel="noreferrer" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>Linktree</a>
            <span>&bull;</span>
            <a href={PERSONAL_DATA.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
