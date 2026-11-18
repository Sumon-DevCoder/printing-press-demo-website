import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { primaryPhone } from '../data/business'
import { navItems } from '../data/navigation'
import { telLink } from '../lib/links'
import { Logo } from './Logo'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/92 backdrop-blur-md' : 'border-b border-transparent bg-paper'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="প্রধান মেনু" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-3.5 py-2 text-[0.95rem] transition-colors ${
                      isActive ? 'font-medium text-ink' : 'text-ink-2 hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded bg-accent" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink(primaryPhone.e164)}
            className="flex items-center gap-2 text-base font-semibold tracking-wide text-ink tabular-nums hover:text-accent-strong"
          >
            <Phone aria-hidden className="size-4" />
            {primaryPhone.display}
          </a>
          <Button to="/contact#quote">কোটেশন চান</Button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <Container className="py-6">
            <nav aria-label="মোবাইল মেনু">
              <ul className="divide-y divide-line">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-display text-2xl ${
                          isActive ? 'text-accent-strong' : 'text-ink'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 grid grid-cols-1 gap-3">
              <Button to="/contact#quote" size="lg">
                কোটেশন চান
              </Button>
              <Button href={telLink(primaryPhone.e164)} variant="secondary" size="lg" icon={<Phone />}>
                কল করুন · {primaryPhone.display}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
