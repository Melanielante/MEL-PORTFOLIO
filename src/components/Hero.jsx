import { motion } from 'framer-motion'
import { ArrowRight, Mail, GitFork, Link2 } from 'lucide-react'

const techIcons = [
  { label: 'React', color: '#61dafb' },
  { label: '.NET', color: '#b794f4' },
  { label: 'PostgreSQL', color: '#68d391' },
  { label: 'Docker', color: '#63b3ed' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: '15%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99,179,237,0.08) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(183,148,244,0.06) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '1.25rem' }}>
          <span className="tag">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', marginRight: '0.45rem', boxShadow: '0 0 8px var(--green)' }} />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          maxWidth: '820px',
        }}>
          Software Developer<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--purple) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Building Impactful</span>
          <br />Solutions
        </motion.h1>

        <motion.p {...fadeUp(0.35)} style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          maxWidth: '540px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          I design and build systems that solve real-world problems—focused on scalable applications and meaningful impact across Africa.
        </motion.p>

        <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div {...fadeUp(0.55)} style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {techIcons.map(t => (
            <span key={t.label} style={{
              padding: '0.3rem 0.85rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              border: '1px solid var(--border)',
              color: t.color,
              background: 'rgba(255,255,255,0.02)',
            }}>
              {t.label}
            </span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.65)} style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: <GitFork size={18} />, href: 'https://github.com', label: 'GitHub' },
            { icon: <Link2 size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:mel@example.com', label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{
                width: 42, height: 42, borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)',
          letterSpacing: '0.1em',
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
