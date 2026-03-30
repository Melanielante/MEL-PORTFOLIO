import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, GitFork, Link2, ArrowRight } from 'lucide-react'

const links = [
  { icon: <Mail size={20} />, label: 'Email', value: 'mel@example.com', href: 'mailto:mel@example.com', color: '#63b3ed' },
  { icon: <GitFork size={20} />, label: 'GitHub', value: 'github.com/mel', href: 'https://github.com', color: '#e8edf2' },
  { icon: <Link2 size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/mel', href: 'https://linkedin.com', color: '#68d391' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Let's Build Something<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Impactful Together.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '3rem' }}>
              Whether you have a project in mind, a role to fill, or just want to connect—my inbox is open. Let's talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.1rem 1.4rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  textAlign: 'left',
                  transition: 'border-color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = l.color + '55'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '10px',
                  background: l.color + '12',
                  border: `1px solid ${l.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: l.color, flexShrink: 0,
                }}>
                  {l.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.1rem', letterSpacing: '0.08em' }}>
                    {l.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{l.value}</div>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--text-dim)' }} />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="mailto:mel@example.com"
            className="btn btn-primary"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            Say Hello <Mail size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
