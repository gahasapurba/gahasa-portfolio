import React from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { ShieldCheck, MapPin, Download, ArrowUpRight, Award, Building2, FileText, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const shootConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#38bdf8', '#e2e8f0']
    });
  };

  return (
    <section id="about" style={{ paddingTop: '8.5rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Text & Profile Summary */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 10px #22c55e' }}></span>
              <span>Enterprise Software Engineer & Assistant Manager</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Architecting <span style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 60%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mission-Critical</span> Banking & Digital Ecosystems.
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Hello, I'm <strong style={{ color: 'var(--text-main)' }}>{PERSONAL_DATA.fullName}</strong>. Assistant Manager of IT Wholesale Banking Development at <strong style={{ color: 'var(--gold-light)' }}>PT Bank Mandiri (Persero) Tbk</strong>, and <span style={{ color: 'var(--cyan-accent)' }}>Cum Laude</span> Software Engineering Alumnus from <strong style={{ color: 'var(--text-main)' }}>Institut Teknologi Del</strong>.
            </p>

            {/* Quick Badges / Meta */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <div className="badge badge-gold">
                <Building2 size={13} />
                <span>Bank Mandiri IT APD</span>
              </div>
              <div className="badge badge-cyan">
                <Award size={13} />
                <span>IT Del Cum Laude</span>
              </div>
              <div className="badge badge-ghost">
                <MapPin size={13} />
                <span>{PERSONAL_DATA.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary" onClick={shootConfetti}>
                <span>Explore Featured Works</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={PERSONAL_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FileText size={17} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={PERSONAL_DATA.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ color: '#22c55e' }}
              >
                <MessageSquare size={17} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                border: '1px solid var(--border-gold)',
                background: 'var(--bg-card)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Corner Ambient Glow */}
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '180px', height: '180px', background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={PERSONAL_DATA.avatar}
                    alt={PERSONAL_DATA.fullName}
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      border: '2px solid var(--border-gold)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      background: '#22c55e',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      border: '3px solid var(--bg-dark)'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    {PERSONAL_DATA.shortName}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontFamily: 'var(--font-mono)' }}>
                    Assistant Manager
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                    Wholesale Banking Dev @ Bank Mandiri
                  </div>
                </div>
              </div>

              {/* Stats Box */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--panel-inner-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem'
                }}
              >
                {PERSONAL_DATA.stats.map((st, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {st.label}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.15rem 0' }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold-light)', fontFamily: 'var(--font-mono)' }}>
                      {st.highlight}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Status Tagline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={18} color="#22c55e" />
                <span>Verified Enterprise Profile & Corporate Culture Network Lead</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
