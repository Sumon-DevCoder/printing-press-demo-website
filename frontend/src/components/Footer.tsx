import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { navItems } from '../data/navigation'
import { serviceGroups } from '../data/services'
import { mapsLink, telLink } from '../lib/links'
import { Logo } from './Logo'
import { Container } from './ui/Container'
import { CmykBar } from './ui/PrintMarks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper-2 pb-24 lg:pb-0">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[0.95rem] text-ink-2">
            শংকুচাইল বাজারের প্রিন্টিং প্রেস। ব্যানার থেকে বিয়ের কার্ড — ডিজাইন থেকে প্রিন্ট, সব এক জায়গায়।
          </p>
          <CmykBar className="mt-6" />
        </div>

        <FooterColumn title="পেজ">
          {navItems.map((item) => (
            <li key={item.to}>
              <FooterLink to={item.to}>{item.label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="সার্ভিস">
          {serviceGroups.map((g) => (
            <li key={g.slug}>
              <FooterLink to={`/services/${g.slug}`}>{g.name}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="যোগাযোগ">
          {business.phones.map((p) => (
            <li key={p.e164}>
              <a href={telLink(p.e164)} className="text-ink hover:text-accent-strong">
                {p.display}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${business.email}`} className="break-all text-ink-2 hover:text-accent-strong">
              {business.email}
            </a>
          </li>
          <li>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-accent-strong">
              {business.address.line}
            </a>
          </li>
          <li>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-accent-strong">
              ফেসবুক পেজ ↗
            </a>
          </li>
        </FooterColumn>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <p>ডেমো ওয়েবসাইট — ছবিগুলো নমুনা</p>
        </Container>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[0.95rem]">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-ink-2 hover:text-accent-strong">
      {children}
    </Link>
  )
}
