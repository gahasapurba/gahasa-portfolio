import React from 'react';
import { PERSONAL_DATA } from '../data/personalData';
import { Server, Code2, Cpu, GraduationCap, Quote } from 'lucide-react';

export default function SkillsAndEducation() {
  return (
    <section id="skills" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="section-tag">Capabilities & Pedigree</div>
        <h2 className="section-title">Technical Mastery & Education</h2>
        <p className="section-desc">
          Rooted in formal software engineering fundamentals from IT Del and sharpened through high-scale wholesale banking deployments at Bank Mandiri.
        </p>

        {/* 3 Skill Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Backend & Core */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Server size={20} color="var(--gold-light)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Enterprise Backend</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>Java, Spring Boot, Microservices</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {PERSONAL_DATA.skills.backend.map((sk, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{sk.name}</span>
                    <span style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{sk.level}</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${sk.proficiency}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend & UX */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={20} color="var(--cyan-accent)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Modern Frontend & UX</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>React, Next.js, Glassmorphism</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {PERSONAL_DATA.skills.frontend.map((sk, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{sk.name}</span>
                    <span style={{ color: 'var(--cyan-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{sk.level}</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${sk.proficiency}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7, #38bdf8)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Security */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={20} color="#c084fc" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Architecture & Security</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>Fintech Logic, Geofencing, Cryptography</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {PERSONAL_DATA.skills.architecture.map((sk, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{sk.name}</span>
                    <span style={{ color: '#c084fc', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{sk.level}</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${sk.proficiency}%`, height: '100%', background: 'linear-gradient(90deg, #9333ea, #c084fc)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Education & Recommendation Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          
          {/* Education Block */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={24} color="var(--gold-light)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {PERSONAL_DATA.education.map((edu, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid rgba(245, 158, 11, 0.3)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                    {edu.institution}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600, margin: '0.2rem 0' }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                    {edu.period} &bull; {edu.location} &bull; <strong style={{ color: 'var(--cyan-accent)' }}>{edu.honor}</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation from LinkedIn */}
          <div className="glass-panel" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Quote size={24} color="var(--cyan-accent)" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>LinkedIn Endorsement</h3>
              </div>

              {PERSONAL_DATA.recommendations.map((rec, rIdx) => (
                <div key={rIdx} style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <p style={{ fontStyle: 'italic', color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    "{rec.text}"
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                      {rec.author}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--cyan-accent)' }}>
                      {rec.role} &bull; {rec.company}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
                      {rec.relation} &bull; Verified on LinkedIn ({rec.date})
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-faint)', textAlign: 'center' }}>
              Data synchronized from official LinkedIn verification export.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
