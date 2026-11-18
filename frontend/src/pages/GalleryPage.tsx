import { Info } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { CtaBand, GalleryCard, PageHeader } from '../components/sections'
import { Container } from '../components/ui/Container'
import { galleryItems } from '../data/gallery'
import { serviceGroups } from '../data/services'
import type { ServiceGroupSlug } from '../data/types'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function GalleryPage() {
  useDocumentTitle('কাজের নমুনা')
  // Filter lives in the URL so a filtered view can be shared on Facebook/WhatsApp.
  const [params, setParams] = useSearchParams()
  const active = serviceGroups.some((g) => g.slug === params.get('category'))
    ? (params.get('category') as ServiceGroupSlug)
    : null
  const items = active ? galleryItems.filter((g) => g.group === active) : galleryItems

  const filters: { slug: ServiceGroupSlug | null; label: string }[] = [
    { slug: null, label: 'সব কাজ' },
    ...serviceGroups.map((g) => ({ slug: g.slug, label: g.name })),
  ]

  return (
    <>
      <PageHeader
        kicker="কাজের নমুনা"
        title="হাতে ধরার মতো কাজ"
        lead="ব্যানার, কার্ড, সাইনবোর্ড আর কাস্টম প্রিন্টের কিছু নমুনা। ধরন অনুযায়ী বেছে দেখুন।"
      />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="ধরন অনুযায়ী দেখুন" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f.slug === active
              return (
                <button
                  key={f.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setParams(f.slug ? { category: f.slug } : {}, { replace: true, preventScrollReset: true })}
                  className={`min-h-11 rounded-full border px-4 text-[0.95rem] transition-colors ${
                    isActive ? 'border-ink bg-ink text-paper' : 'border-line bg-surface text-ink-2 hover:border-ink hover:text-ink'
                  }`}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
          <p className="flex items-start gap-2 text-sm text-ink-3 lg:max-w-sm">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
            ছবিগুলো নমুনা চিত্র। আসল কাজের ছবি শিগগিরই যোগ হবে — দোকানে এলে স্যাম্পল হাতে দেখতে পারবেন।
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          {items.length}টি কাজ দেখানো হচ্ছে
        </p>
        <ul key={active ?? 'all'} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  )
}
