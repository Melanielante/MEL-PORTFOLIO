import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    label: 'Frontend',
    color: '#63b3ed',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    color: '#b794f4',
    skills: ['.NET / C#', 'REST APIs', 'Clean Architecture', 'Node.js'],
  },
  {
    label: 'Database',
    color: '#68d391',
    skills: ['PostgreSQL', 'JSON Server', 'Data Modelling'],
  },
  {
    label: 'Tools & DevOps',
    color: '#f6ad55',
    skills: ['Git & GitHub', 'Docker', 'Postman', 'VS Code'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Tech Stack</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Skills & Tools</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto' }}>
            The technologies I use to turn ideas into production-ready systems.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.55 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem 1.5rem',
                borderTop: `3px solid ${group.color}`,
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: group.color,
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}>
                {group.label}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.06 + 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: group.color, flexShrink: 0, opacity: 0.7 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '2rem',
            padding: '1.2rem 1.6rem',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
            CURRENTLY LEARNING
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['System Design', 'Microservices', 'Cloud Infrastructure'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #skills .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
