import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductArt } from '../components/art/ProductArt'
import { Reveal } from '../components/Reveal'
import { CtaBand, GalleryCard, ServiceGroupCard, VisitUs } from '../components/sections'
import { Button } from '../components/ui/Button'
import { Container, Section, SectionHeading } from '../components/ui/Container'
import { CropMarks, SampleBadge } from '../components/ui/PrintMarks'
import { primaryPhone } from '../data/business'
import { orderSteps, reasons } from '../data/content'
import { galleryItems } from '../data/gallery'
import { serviceGroups, totalServiceCount } from '../data/services'
import { stepNumber, toBanglaDigits } from '../lib/format'
import { telLink } from '../lib/links'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function HomePage() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <ServicesOverview />
      <ServiceIndex />
      <FeaturedWork />
      <WhyUs />
      <HowToOrder />
      <Section labelledBy="visit-title">
        <Container>
          <SectionHeading id="visit-title" kicker="দোকানে আসুন" title="শংকুচাইল বাজারেই আমাদের প্রেস" className="mb-10" />
          <Reveal>
            <VisitUs />
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-14 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="text-sm font-medium text-ink-3">শংকুচাইল বাজার, বুড়িচং · কুমিল্লা</p>
          <h1 id="hero-title" className="mt-5 text-[2.6rem] font-semibold leading-[1.15] tracking-tight sm:text-6xl">
            সাইনবোর্ড থেকে বিয়ের কার্ড, সব প্রিন্ট{' '}
            <span className="relative inline-block whitespace-nowrap">
              এক জায়গায়।
              {/* Hand-drawn marker stroke — a human touch instead of a gradient. */}
              <svg
                aria-hidden
                viewBox="0 0 220 18"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3.5 w-full text-marigold"
              >
                <path d="M3 12 C 50 4, 120 3, 217 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-ink-2 sm:text-xl">
            কী লাগবে বলুন — আমরা ডিজাইন করি, আপনাকে দেখাই, পছন্দ হলে তারপর প্রিন্ট। ব্যানার, সাইনবোর্ড, কার্ড, মগ,
            টি-শার্ট — সব এখানেই।
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact#quote" size="lg">
              কোটেশন চান
              <ArrowRight aria-hidden className="size-4" />
            </Button>
            <Button href={telLink(primaryPhone.e164)} size="lg" variant="secondary" icon={<Phone />}>
              {primaryPhone.display}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-ink-2">
            {[`${toBanglaDigits(totalServiceCount)} রকম সার্ভিস`, 'প্রিন্টের আগে ডিজাইন দেখানো হয়', 'দোকানে সরাসরি আসুন'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroCollage />
      </Container>
    </section>
  )
}

/** A loose, slightly rotated stack of printed pieces — like work laid out on the shop counter. */
function HeroCollage() {
  return (
    <div className="relative mx-auto w-full max-w-lg px-3 pb-10 sm:px-6 lg:max-w-none">
      <CropMarks className="rotate-[1.5deg]">
        <div className="overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(22,20,15,.45)]">
          <ProductArt kind="signboard" className="block aspect-[4/3] w-full" />
        </div>
      </CropMarks>
      <div className="absolute -bottom-2 -left-1 w-[46%] -rotate-[5deg] overflow-hidden rounded-lg border-4 border-surface shadow-[0_20px_40px_-20px_rgba(22,20,15,.5)] sm:-left-4">
        <ProductArt kind="invitation" className="block aspect-[4/3] w-full" />
      </div>
      <div className="absolute -right-1 bottom-6 w-[38%] rotate-[4deg] overflow-hidden rounded-lg border-4 border-surface shadow-[0_20px_40px_-20px_rgba(22,20,15,.5)] sm:-right-3">
        <ProductArt kind="mug" className="block aspect-[4/3] w-full" />
      </div>
      <SampleBadge className="absolute right-6 top-4 sm:right-9" />
    </div>
  )
}

function ServicesOverview() {
  return (
    <Section labelledBy="services-title" className="border-t border-line">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="services-title"
            kicker="আমাদের কাজ"
            title={`তিন ধরনের কাজ, ${toBanglaDigits(totalServiceCount)} রকম সার্ভিস`}
            lead="দোকানের সাইনবোর্ড, অনুষ্ঠানের কার্ড বা উপহারের মগ — যা-ই লাগুক, ডিজাইন থেকে ডেলিভারি পর্যন্ত আমরা করে দিই।"
          />
          <Link to="/services" className="flex shrink-0 items-center gap-1.5 font-medium text-ink hover:text-accent-strong">
            সব সার্ভিস <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceGroups.map((g, i) => (
            <ServiceGroupCard key={g.slug} group={g} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

/** Every service in one glance, set like a printed rate card. */
function ServiceIndex() {
  return (
    <section aria-labelledby="index-title" className="bg-paper-2 py-16 sm:py-20">
      <Container>
        <h2 id="index-title" className="text-sm font-medium text-ink-3">
          যা যা প্রিন্ট করি
        </h2>
        <Reveal>
          <ul className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display text-2xl font-medium leading-snug text-ink sm:text-[2.1rem]">
            {serviceGroups.flatMap((g) =>
              g.items.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3">
                  <Link to={`/services/${g.slug}`} className="decoration-accent decoration-2 underline-offset-[6px] hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-accent">
                    /
                  </span>
                </li>
              )),
            )}
            <li className="text-ink-3">আরও অনেক কিছু</li>
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

function FeaturedWork() {
  return (
    <Section labelledBy="work-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="work-title"
            kicker="কাজের নমুনা"
            title="কেমন কাজ করি, দেখে নিন"
            lead="কিছু নমুনা দেওয়া হলো। দোকানে এলে আগের কাজের আসল স্যাম্পল হাতে নিয়ে দেখতে পারবেন।"
          />
          <Link to="/gallery" className="flex shrink-0 items-center gap-1.5 font-medium text-ink hover:text-accent-strong">
            সব নমুনা <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 6).map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </ul>
      </Container>
    </Section>
  )
}

function WhyUs() {
  return (
    <Section labelledBy="why-title" className="border-y border-line bg-surface">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            kicker="কেন আমাদের কাছে"
            title="প্রিন্টের আগে আপনি দেখবেন, তারপর আমরা ছাপব"
            lead="কাজ ভুল হলে টাকা আর সময় দুটোই নষ্ট। তাই প্রতিটি কাজ আমরা আগে আপনাকে দেখিয়ে নিই।"
          />
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 60} className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr]">
              <span className="font-display text-2xl font-semibold text-accent">{stepNumber(i)}</span>
              <div>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-ink-2">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function HowToOrder() {
  return (
    <Section labelledBy="order-title">
      <Container>
        <SectionHeading
          id="order-title"
          kicker="অর্ডার করবেন যেভাবে"
          title="চার ধাপে কাজ হাতে"
          lead="প্রথমবার অর্ডার করছেন? কোনো ঝামেলা নেই — পুরো সময় আমরা পাশে আছি।"
        />
        <ol className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-5 hidden border-t border-dashed border-ink/25 md:block" />
          {orderSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="relative">
              <span className="relative flex size-10 items-center justify-center rounded-full border border-ink bg-paper font-display font-semibold">
                {stepNumber(i)}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink-2">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
