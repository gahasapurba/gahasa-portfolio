import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Users, Building, Award } from 'lucide-react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'org'

  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="section-tag">Trajectory & Leadership</div>
        <h2 className="section-title">Experiences & Milestones</h2>
        <p className="section-desc">
          From fintech engineering internships and core mobile banking development to wholesale banking architecture and campus democratic leadership.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveTab('work')}
            className="btn"
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: activeTab === 'work' ? 700 : 500,
              background: activeTab === 'work' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'var(--border-subtle)',
              color: activeTab === 'work' ? '#000' : 'var(--text-muted)',
              border: activeTab === 'work' ? '1px solid #f59e0b' : '1px solid var(--border-subtle)'
            }}
          >
            <Briefcase size={16} />
            <span>Professional Work ({PERSONAL_DATA.workExperiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('org')}
            className="btn"
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: activeTab === 'org' ? 700 : 500,
              background: activeTab === 'org' ? 'linear-gradient(135deg, #38bdf8, #0284c7)' : 'var(--border-subtle)',
              color: activeTab === 'org' ? '#000' : 'var(--text-muted)',
              border: activeTab === 'org' ? '1px solid #38bdf8' : '1px solid var(--border-subtle)'
            }}
          >
            <Users size={16} />
            <span>Organizational & Leadership ({PERSONAL_DATA.organizationalExperiences.length})</span>
          </button>
        </div>

        {/* Work Experiences Tab */}
        {activeTab === 'work' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PERSONAL_DATA.workExperiences.map((exp, idx) => (
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {exp.role}
                      </h3>
                      <span className={`badge ${exp.isCurrent ? 'badge-gold' : 'badge-cyan'}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600 }}>
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
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{b}</span>
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
        )}

        {/* Organizational Experiences Tab */}
        {activeTab === 'org' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PERSONAL_DATA.organizationalExperiences.map((org, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '2.25rem',
                  borderLeft: '4px solid var(--cyan-accent)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {org.role}
                      </h3>
                      <span className="badge badge-cyan">
                        {org.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      {org.organization} &bull; <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{org.institution}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-faint)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      <span>{org.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} />
                      <span>{org.location}</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {org.description}
                </p>

                {/* Bullet points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {org.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--cyan-accent)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {org.tags.map((t, tIdx) => (
                    <span key={tIdx} className="badge badge-ghost" style={{ fontSize: '0.75rem' }}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
