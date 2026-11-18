import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { business, primaryPhone } from '../data/business'
import { serviceGroupName } from '../data/services'
import type { GalleryItem, ServiceGroup } from '../data/types'
import { mapsEmbedSrc, mapsLink, telLink, whatsappLink } from '../lib/links'
import { ProductArt } from './art/ProductArt'
import { Reveal } from './Reveal'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { CmykBar, SampleBadge } from './ui/PrintMarks'

/** Header band for inner pages. */
export function PageHeader({ kicker, title, lead, children }: { kicker: string; title: string; lead?: string; children?: ReactNode }) {
  return (
    <div className="border-b border-line">
      <Container className="pb-12 pt-12 sm:pb-16 sm:pt-20">
        <p className="flex items-center gap-3 text-sm font-medium text-accent-strong">
          <CmykBar />
          {kicker}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-ink-2">{lead}</p>}
        {children}
      </Container>
    </div>
  )
}

export function ServiceGroupCard({ group, index }: { group: ServiceGroup; index: number }) {
  return (
    <Reveal delay={index * 90} as="article" className="h-full">
      <Link
        to={`/services/${group.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-ink/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <ProductArt kind={group.art} className="size-full transition-transform duration-500 group-hover:scale-[1.03]" />
          <SampleBadge className="absolute left-3 top-3" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm text-ink-3">{group.items.length}টি সার্ভিস</p>
          <h3 className="mt-1 text-2xl font-semibold">{group.name}</h3>
          <p className="mt-2 text-ink-2">{group.tagline}</p>
          <p className="mt-4 line-clamp-2 text-[0.95rem] text-ink-3">{group.items.map((i) => i.name).join(' · ')}</p>
          <span className="mt-auto flex items-center gap-1.5 pt-6 font-medium text-ink group-hover:text-accent-strong">
            বিস্তারিত দেখুন
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

export function GalleryCard({ item, index = 0 }: { item: GalleryItem; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 80} as="li">
      <figure className="group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-2">
          <ProductArt kind={item.art} className="size-full transition-transform duration-500 group-hover:scale-[1.04]" />
          <SampleBadge className="absolute left-3 top-3" />
        </div>
        <figcaption className="mt-3 flex items-baseline justify-between gap-3">
          <span className="font-medium text-ink">{item.title}</span>
          <span className="shrink-0 text-sm text-ink-3">{serviceGroupName(item.group)}</span>
        </figcaption>
        <p className="text-sm text-ink-3">{item.note}</p>
      </figure>
    </Reveal>
  )
}

/** Closing call-to-action, ink background so it reads as the end of the page. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink text-paper">
        <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:p-16">
          <div>
            <CmykBar className="mb-6" />
            <h2 id="cta-title" className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              কাজটা কেমন হবে, কত খরচ — <br className="hidden sm:block" />
              একবার কথা বললেই জানবেন।
            </h2>
            <p className="mt-4 max-w-lg text-paper/70">
              কাজের ধরন আর সংখ্যা জানান। ডিজাইন, দাম আর ডেলিভারির সময় আমরা জানিয়ে দেব।
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Button href={telLink(primaryPhone.e164)} size="lg" icon={<Phone />}>
              কল করুন · {primaryPhone.display}
            </Button>
            <Button
              href={whatsappLink()}
              size="lg"
              variant="secondary"
              icon={<MessageCircle />}
              className="border-paper/40 text-paper hover:bg-paper hover:text-ink"
            >
              হোয়াটসঅ্যাপে লিখুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Address, hours and map. The Google Map loads only when asked: it is heavy and sets
 * third-party cookies, so it should not slow down or track everyone who opens the page.
 */
export function VisitUs() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div className="space-y-7 p-7 sm:p-9">
        <InfoRow icon={<MapPin />} title="দোকানের ঠিকানা">
          <p>{business.address.line}</p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-strong hover:underline"
          >
            গুগল ম্যাপে খুলুন <ArrowUpRight aria-hidden className="size-3.5" />
          </a>
        </InfoRow>
        <InfoRow icon={<Clock />} title="খোলার সময়">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            {business.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="text-ink-3">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </InfoRow>
        <InfoRow icon={<Phone />} title="ফোন">
          {business.phones.map((p) => (
            <a key={p.e164} href={telLink(p.e164)} className="block hover:text-accent-strong">
              {p.display}
            </a>
          ))}
        </InfoRow>
      </div>

      <div className="relative min-h-72 border-t border-line bg-paper-2 lg:border-l lg:border-t-0">
        {showMap ? (
          <iframe
            title="শংকুচাইল বাজারের ম্যাপ"
            src={mapsEmbedSrc}
            className="absolute inset-0 size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <MapPlaceholder onShow={() => setShowMap(true)} />
        )}
      </div>
    </div>
  )
}

function MapPlaceholder({ onShow }: { onShow: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
      {/* Simple drawn street grid in place of the map tiles. */}
      <svg aria-hidden className="absolute inset-0 size-full text-line" preserveAspectRatio="none" viewBox="0 0 400 300">
        <path d="M0 90 H400 M0 210 H400 M120 0 V300 M280 0 V300 M0 300 L400 20" stroke="currentColor" strokeWidth="10" fill="none" />
      </svg>
      <span className="relative flex size-12 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg">
        <MapPin aria-hidden className="size-6" />
      </span>
      <p className="relative font-medium">শংকুচাইল বাজার, বুড়িচং</p>
      <button
        type="button"
        onClick={onShow}
        className="relative min-h-11 rounded-full border border-ink/70 bg-paper px-5 text-[0.95rem] font-medium hover:bg-ink hover:text-paper"
      >
        ম্যাপ দেখুন
      </button>
    </div>
  )
}

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span aria-hidden className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-paper-2 text-ink [&>svg]:size-[1.1rem]">
        {icon}
      </span>
      <div>
        <h3 className="text-sm font-semibold text-ink-3">{title}</h3>
        <div className="mt-1 text-ink">{children}</div>
      </div>
    </div>
  )
}
