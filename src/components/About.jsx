import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Globe, Zap } from 'lucide-react'

const traits = [
  { icon: <Code2 size={18} />, label: 'Clean Architecture', desc: 'Building systems with separation of concerns at the core.' },
  { icon: <Globe size={18} />, label: 'Africa-focused Impact', desc: 'Technology that solves real challenges in growing markets.' },
  { icon: <Zap size={18} />, label: 'Scalable by Design', desc: 'Every decision made with growth and efficiency in mind.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">Engineer. Builder.<br />Problem Solver.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              <p>
                Hey, I'm <strong style={{ color: 'var(--text)' }}>MELANIE AKINYI</strong>—a software developer passionate about building solutions that matter.
              </p>
              <p>
                Right now, I'm working on projects like ERP systems and modern web apps, focusing on creating scalable and efficient systems. I enjoy turning complex problems into structured, usable solutions.
              </p>
              <p>
                What drives me is <span style={{ color: 'var(--accent)' }}>impact</span>—using technology to solve real challenges, especially within Africa.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '2.5rem' }}>
              {[['3+', 'Years Building'], ['10+', 'Projects Shipped'], ['∞', 'Problems Solved']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.3rem', letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: '1.4rem 1.6rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                whileHover={{ borderColor: 'rgba(99,179,237,0.3)', y: -2 }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: '8px',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', flexShrink: 0,
                }}>
                  {t.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '0.25rem' }}>{t.label}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Terminal-style block */}
            <div style={{
              marginTop: '0.5rem',
              padding: '1.2rem 1.4rem',
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-dim)',
              lineHeight: 1.9,
            }}>
              <span style={{ color: 'var(--green)' }}>$ </span><span style={{ color: 'var(--text-muted)' }}>whoami</span><br />
              <span style={{ color: 'var(--accent)' }}>mel</span> <span>// software developer</span><br />
              <span style={{ color: 'var(--green)' }}>$ </span><span style={{ color: 'var(--text-muted)' }}>location</span><br />
              <span style={{ color: 'var(--amber)' }}>Africa 🌍</span><br />
              <span style={{ color: 'var(--green)' }}>$ </span><span style={{ color: 'var(--text-muted)' }}>status</span><br />
              <span style={{ color: 'var(--green)' }}>open_to_work: true</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
