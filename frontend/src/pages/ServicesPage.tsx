import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductArt } from '../components/art/ProductArt'
import { Reveal } from '../components/Reveal'
import { CtaBand, PageHeader } from '../components/sections'
import { Container } from '../components/ui/Container'
import { SampleBadge } from '../components/ui/PrintMarks'
import { serviceGroups, totalServiceCount } from '../data/services'
import { toBanglaDigits } from '../lib/format'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function ServicesPage() {
  useDocumentTitle('সার্ভিস')

  return (
    <>
      <PageHeader
        kicker="সার্ভিস"
        title="যা যা প্রিন্ট করি"
        lead={`${toBanglaDigits(totalServiceCount)} রকম কাজ, তিন ভাগে সাজানো। আপনার কাজটা তালিকায় না থাকলেও জিজ্ঞেস করুন — সম্ভবত আমরা পারব।`}
      >
        <nav aria-label="সার্ভিসের ভাগ" className="mt-8 flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-[0.95rem] text-ink-2 hover:border-ink hover:text-ink"
            >
              {g.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Container className="divide-y divide-line">
        {serviceGroups.map((g, gi) => (
          <section key={g.slug} id={g.slug} aria-labelledby={`${g.slug}-title`} className="scroll-mt-24 py-16 sm:py-20">
            <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${gi % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl">
                  <ProductArt kind={g.art} className="block aspect-[4/3] w-full" />
                  <SampleBadge className="absolute left-3 top-3" />
                </div>
              </Reveal>
              <div>
                <p className="text-sm text-ink-3">{g.nameEn}</p>
                <h2 id={`${g.slug}-title`} className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {g.name}
                </h2>
                <p className="mt-4 text-lg text-ink-2">{g.description}</p>
                <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item.name} className="border-t border-line py-3.5">
                      <p className="font-medium text-ink">{item.name}</p>
                      <p className="mt-0.5 text-[0.95rem] text-ink-3">{item.description}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${g.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent-strong"
                >
                  {g.name} — বিস্তারিত <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </Container>

      <CtaBand />
    </>
  )
}
