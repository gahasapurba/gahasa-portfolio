import React from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="section-tag">Trajectory & Impact</div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-desc">
          A track record of shipping resilient wholesale banking architectures, high-impact corporate culture platforms, and academic excellence.
        </p>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PERSONAL_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                borderLeft: exp.isCurrent ? '4px solid var(--gold-primary)' : '4px solid var(--cyan-accent)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
                      {exp.role}
                    </h3>
                    <span className={`badge ${exp.isCurrent ? 'badge-gold' : 'badge-cyan'}`}>
                      {exp.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#e2e8f0', fontWeight: 600 }}>
                    {exp.company} &bull; <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{exp.department}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-faint)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {exp.description}
              </p>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {exp.bullets.map((b, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-light)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tags.map((t, tIdx) => (
                  <span key={tIdx} className="badge badge-ghost" style={{ fontSize: '0.75rem' }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
