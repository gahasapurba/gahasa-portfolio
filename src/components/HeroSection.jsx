import React from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { ShieldCheck, MapPin, Download, ArrowUpRight, Award, Building2 } from 'lucide-react';
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
    <section style={{ paddingTop: '8.5rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Text & Profile Summary */}
          <div>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 10px #22c55e' }}></span>
              <span>Enterprise Software Engineer & Assistant Manager</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '1.5rem', color: '#fff' }}>
              Architecting <span style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 60%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mission-Critical</span> Banking & Digital Ecosystems.
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Hello, I'm <strong style={{ color: '#fff' }}>{PERSONAL_DATA.fullName}</strong>. Assistant Manager of IT Wholesale Banking Development at <strong style={{ color: '#fbbf24' }}>PT Bank Mandiri (Persero) Tbk</strong>, and <span style={{ color: '#38bdf8' }}>Cum Laude</span> Software Engineering Alumnus from <strong style={{ color: '#fff' }}>Institut Teknologi Del</strong>.
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary" onClick={shootConfetti}>
                <span>Explore Featured Works</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#experience" className="btn btn-secondary">
                <span>View Career Trajectory</span>
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
              >
                <span>in/gahasapurba</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(8, 10, 15, 0.95) 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Corner Ambient Glow */}
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)', filter: 'blur(30px)' }} />

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
                      border: '2px solid rgba(245, 158, 11, 0.4)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
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
                      border: '3px solid #080a0f'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
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
                  background: 'rgba(0, 0, 0, 0.35)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '1.5rem'
                }}
              >
                {PERSONAL_DATA.stats.map((st, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {st.label}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '0.15rem 0' }}>
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
