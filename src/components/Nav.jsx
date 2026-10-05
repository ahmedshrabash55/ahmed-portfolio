import { useEffect, useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md border-b border-ink-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-md border border-ink-border bg-ink-800 flex items-center justify-center text-signal-teal group-hover:border-signal-teal/50 transition-colors">
            <ShieldCheck size={16} strokeWidth={1.75} />
          </span>
          <span className="font-display text-sm font-medium text-paper-100">{profile.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-paper-500 hover:text-paper-100 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md border border-signal-teal/40 px-4 py-2 text-sm text-signal-teal hover:bg-signal-teal/10 transition-colors"
        >
          Contact
        </a>

        <button
          className="md:hidden text-paper-100 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-border bg-ink-900/97 backdrop-blur-md">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block py-2.5 text-paper-300 hover:text-paper-100 text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
