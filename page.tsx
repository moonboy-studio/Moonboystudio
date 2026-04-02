import Link from 'next/link'
import { Rocket, MessageCircle, Code2, PenTool, Video, Hash, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const DISCORD = 'https://discord.gg/T9EsUSScp'

const services = [
  { icon: <Code2 size={22} />, title: 'Website Development', desc: 'Custom websites and tournament systems built to perform. Fast, modern, and fully responsive.' },
  { icon: <PenTool size={22} />, title: 'Graphic Design', desc: 'Eye-catching posters, banners, and branding materials that make your brand stand out.' },
  { icon: <Video size={22} />, title: 'Video Editing', desc: 'Polished gaming highlights, ads, and content edits that keep your audience engaged.' },
  { icon: <Hash size={22} />, title: 'Discord Setup', desc: 'Complete Discord server setup with roles, bots, channels, and community structure.' },
]

const portfolio = [
  {
    emoji: '🏆',
    bg: 'linear-gradient(135deg,rgba(91,110,245,0.2),rgba(0,207,255,0.1))',
    tag: 'Web',
    title: 'DJY MLBB Tournament Website',
    desc: 'A full tournament system for a Mobile Legends: Bang Bang competitive event.',
  },
  {
    emoji: '🎨',
    bg: 'linear-gradient(135deg,rgba(162,89,255,0.2),rgba(255,80,150,0.1))',
    tag: 'Design',
    title: 'Poster / Graphic Designs',
    desc: 'Collection of gaming posters, event banners, and branding materials for various clients.',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '120px 2rem 6rem',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* BG effects */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,110,245,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(162,89,255,0.07) 0%, transparent 60%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(91,110,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,110,245,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 30%, transparent 100%)',
          }} />

          {/* Badge */}
          <div className="animate-fadeUp" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid var(--border2)',
            background: 'rgba(91,110,245,0.08)',
            padding: '6px 16px', borderRadius: 100,
            fontSize: '0.78rem', fontWeight: 500, color: '#a0a8ff',
            marginBottom: '2rem', position: 'relative',
          }}>
            <span className="animate-pulse-dot" style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#5dfc8d', boxShadow: '0 0 8px #5dfc8d',
              display: 'inline-block',
            }} />
            Available for new projects
          </div>

          <h1 className="gradient-text animate-fadeUp-1" style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 900, lineHeight: 1.15,
            maxWidth: 800, marginBottom: '1.5rem',
            position: 'relative',
          }}>
            We Build Websites, Designs &amp; Discord Servers
          </h1>

          <p className="animate-fadeUp-2" style={{
            fontSize: '1.05rem', color: 'var(--muted)',
            maxWidth: 520, marginBottom: '2.5rem', position: 'relative',
          }}>
            Helping gamers, tournament hosts, and small businesses grow online with modern digital solutions.
          </p>

          <div className="animate-fadeUp-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
            <Link href="/contact" className="btn-primary">
              <Rocket size={16} /> Start Project
            </Link>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle size={16} /> Join Discord
            </a>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label">What We Do</p>
          <h2 className="gradient-text" style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Our Services
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500 }}>
            From web development to Discord setup — we&apos;ve got your digital needs covered.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {services.map(s => (
              <div key={s.title} className="glass-card">
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'linear-gradient(135deg,rgba(91,110,245,0.15),rgba(162,89,255,0.1))',
                  border: '1px solid var(--border2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem', color: '#a0a8ff',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* PORTFOLIO PREVIEW */}
        <section style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label">Our Work</p>
          <h2 className="gradient-text" style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Recent Projects
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500 }}>
            A look at what we&apos;ve built for clients in the gaming and design space.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {portfolio.map(p => (
              <div key={p.title} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 16, overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}>
                <div style={{
                  height: 180, background: p.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', position: 'relative',
                }}>
                  <span style={{ position: 'relative', zIndex: 1 }}>{p.emoji}</span>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, var(--card) 100%)' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="portfolio-tag">{p.tag}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/portfolio" className="btn-secondary">View All Work</Link>
          </div>
        </section>

        {/* CTA */}
        <div style={{
          textAlign: 'center', padding: '5rem 2rem',
          background: 'linear-gradient(135deg,rgba(91,110,245,0.06),rgba(162,89,255,0.06))',
          borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        }}>
          <h2 className="gradient-text-purple" style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to Build Something Great?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            Join our Discord or start a project today — we respond fast.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              <Send size={16} /> Start a Project
            </Link>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle size={16} /> Join Discord
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
