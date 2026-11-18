import { ArrowUpRight, Mail, MessageCircle, Phone, ThumbsUp } from 'lucide-react'
import type { ReactNode } from 'react'
import { QuoteForm } from '../components/QuoteForm'
import { PageHeader, VisitUs } from '../components/sections'
import { Container, Section } from '../components/ui/Container'
import { business, primaryPhone } from '../data/business'
import { telLink, whatsappLink } from '../lib/links'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function ContactPage() {
  useDocumentTitle('যোগাযোগ')

  return (
    <>
      <PageHeader
        kicker="যোগাযোগ"
        title="কাজের কথা বলুন"
        lead="ফোন করুন, হোয়াটসঅ্যাপে লিখুন, অথবা নিচের ফর্মে কাজের বিবরণ দিন — আমরা দাম আর সময় জানিয়ে দেব।"
      />

      <Section className="pt-12! sm:pt-16!">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div id="quote" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold sm:text-3xl">কোটেশনের জন্য লিখুন</h2>
            <p className="mb-8 mt-2 text-ink-2">ফর্ম পূরণ করলে হোয়াটসঅ্যাপে আপনার বার্তা তৈরি হয়ে যাবে।</p>
            <QuoteForm />
          </div>

          <aside aria-label="সরাসরি যোগাযোগ" className="space-y-3">
            <h2 className="mb-5 text-sm font-semibold text-ink-3">সরাসরি যোগাযোগ</h2>
            <Channel icon={<Phone />} href={telLink(primaryPhone.e164)} title="কল করুন" detail={primaryPhone.display} highlight />
            <Channel icon={<MessageCircle />} href={whatsappLink()} title="হোয়াটসঅ্যাপ" detail={primaryPhone.display} external />
            {business.phones.slice(1).map((p) => (
              <Channel key={p.e164} icon={<Phone />} href={telLink(p.e164)} title="বিকল্প নম্বর" detail={p.display} />
            ))}
            <Channel icon={<Mail />} href={`mailto:${business.email}`} title="ইমেইল" detail={business.email} />
            <Channel icon={<ThumbsUp />} href={business.facebook} title="ফেসবুক পেজ" detail="মেসেঞ্জারে লিখুন" external />
          </aside>
        </Container>
      </Section>

      <Section className="pt-0!">
        <Container>
          <VisitUs />
        </Container>
      </Section>
    </>
  )
}

function Channel({
  icon,
  href,
  title,
  detail,
  external,
  highlight,
}: {
  icon: ReactNode
  href: string
  title: string
  detail: string
  external?: boolean
  highlight?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
        highlight ? 'border-ink bg-ink text-paper hover:bg-ink/90' : 'border-line bg-surface hover:border-ink/50'
      }`}
    >
      <span
        aria-hidden
        className={`flex size-11 shrink-0 items-center justify-center rounded-full [&>svg]:size-5 ${
          highlight ? 'bg-accent text-on-accent' : 'bg-paper-2 text-ink'
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm ${highlight ? 'text-paper/70' : 'text-ink-3'}`}>{title}</span>
        <span className="block truncate font-medium">{detail}</span>
      </span>
      <ArrowUpRight aria-hidden className="size-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
    </a>
  )
}
