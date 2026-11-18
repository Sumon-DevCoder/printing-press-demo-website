import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ProductArt } from '../components/art/ProductArt'
import { Reveal } from '../components/Reveal'
import { CtaBand, GalleryCard, ServiceGroupCard } from '../components/sections'
import { Button } from '../components/ui/Button'
import { Container, Section, SectionHeading } from '../components/ui/Container'
import { CmykBar, CropMarks, SampleBadge } from '../components/ui/PrintMarks'
import { galleryItems } from '../data/gallery'
import { findServiceGroup, serviceGroups } from '../data/services'
import { stepNumber } from '../lib/format'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import NotFoundPage from './NotFoundPage'

const quoteLink = (service?: string) =>
  service ? `/contact?service=${encodeURIComponent(service)}#quote` : '/contact#quote'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const group = findServiceGroup(slug)
  useDocumentTitle(group?.name)

  if (!group) return <NotFoundPage />

  const work = galleryItems.filter((g) => g.group === group.slug)
  const others = serviceGroups.filter((g) => g.slug !== group.slug)

  return (
    <>
      <div className="border-b border-line">
        <Container className="grid grid-cols-1 items-center gap-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-16 lg:pb-20">
          <div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-ink-3 hover:text-ink">
              <ArrowLeft aria-hidden className="size-4" /> সব সার্ভিস
            </Link>
            <p className="mt-6 flex items-center gap-3 text-sm font-medium text-accent-strong">
              <CmykBar />
              {group.nameEn}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{group.name}</h1>
            <p className="mt-5 text-lg text-ink-2">{group.description}</p>
            <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {group.useCases.map((u) => (
                <li key={u} className="flex items-center gap-2.5 text-ink">
                  <Check aria-hidden className="size-4 shrink-0 text-accent" />
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button to={quoteLink()} size="lg">
                এই কাজের কোটেশন চান <ArrowRight aria-hidden className="size-4" />
              </Button>
            </div>
          </div>
          <CropMarks className="mx-3">
            <div className="relative overflow-hidden rounded-lg">
              <ProductArt kind={group.art} className="block aspect-[4/3] w-full" />
              <SampleBadge className="absolute left-3 top-3" />
            </div>
          </CropMarks>
        </Container>
      </div>

      <Section labelledBy="items-title">
        <Container>
          <SectionHeading id="items-title" kicker="এই ভাগে যা পাবেন" title={`${group.name} — সব সার্ভিস`} />
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => (
              <Reveal as="li" key={item.name} delay={(i % 3) * 70} className="h-full">
                {/* Text-led card: one shared illustration per group reads as a template, so items stay typographic. */}
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/40 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-sm font-semibold text-accent">{stepNumber(i)}</span>
                    <span className="text-xs uppercase tracking-wider text-ink-3">{item.nameEn}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-ink-2">{item.description}</p>
                  <Link
                    to={quoteLink(item.name)}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.95rem] font-medium text-ink group-hover:text-accent-strong"
                  >
                    কোটেশন চান
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {work.length > 0 && (
        <Section labelledBy="work-title" className="border-t border-line bg-paper-2">
          <Container>
            <SectionHeading id="work-title" kicker="কাজের নমুনা" title="এই ধরনের কিছু কাজ" />
            <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((item, i) => (
                <GalleryCard key={item.id} item={item} index={i} />
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section labelledBy="others-title">
        <Container>
          <SectionHeading id="others-title" kicker="আরও দেখুন" title="অন্যান্য সার্ভিস" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((g, i) => (
              <ServiceGroupCard key={g.slug} group={g} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
