import { ProductArt } from '../components/art/ProductArt'
import { Reveal } from '../components/Reveal'
import { CtaBand, PageHeader, VisitUs } from '../components/sections'
import { Container, Section, SectionHeading } from '../components/ui/Container'
import { CropMarks, SampleBadge } from '../components/ui/PrintMarks'
import { business } from '../data/business'
import { reasons } from '../data/content'
import { useDocumentTitle } from '../lib/useDocumentTitle'

/**
 * TODO(client): replace the story with the owner's own words — when the shop started,
 * who runs it, what they are proud of — plus real photos of the shop and machines.
 * Do not add years in business or order counts until the client confirms them.
 */
export default function AboutPage() {
  useDocumentTitle('আমাদের কথা')

  return (
    <>
      <PageHeader
        kicker="আমাদের কথা"
        title="বাজারের মানুষের প্রেস"
        lead="শংকুচাইল বাজারে আমাদের দোকান। এলাকার দোকানদার, স্কুল, মসজিদ-মাদ্রাসা, বিয়েবাড়ি — সবার প্রিন্টের কাজ আমরা করি।"
      />

      <Section labelledBy="story-title">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <CropMarks className="mx-3 -rotate-1">
            <div className="relative overflow-hidden rounded-lg">
              <ProductArt kind="signboard" className="block aspect-[4/3] w-full" />
              <SampleBadge className="absolute left-3 top-3" />
            </div>
          </CropMarks>
          <div>
            <h2 id="story-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              ভালো প্রিন্টের জন্য শহরে যেতে হবে কেন?
            </h2>
            <div className="mt-6 space-y-4 text-lg text-ink-2">
              <p>
                একটা ব্যানার বা কয়েকটা ভিজিটিং কার্ডের জন্য কুমিল্লা শহরে যাওয়া মানে পুরো দিন নষ্ট। সেই ঝামেলা কমাতেই
                আমাদের এই প্রেস — বুড়িচংয়ের মানুষের কাছেই।
              </p>
              <p>
                আমরা শুধু প্রিন্ট করি না, ডিজাইনও করে দিই। আপনার মাথায় যা আছে সেটা বলুন, আমরা কাগজে বা বোর্ডে তুলে আনব —
                আর প্রিন্টের আগে অবশ্যই আপনাকে দেখিয়ে নেব।
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <dt className="text-sm text-ink-3">ঠিকানা</dt>
                <dd className="mt-1 font-medium">{business.address.line}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-3">ফোন</dt>
                <dd className="mt-1 font-medium">{business.phones[0].display}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      <Section labelledBy="values-title" className="border-y border-line bg-surface">
        <Container>
          <SectionHeading id="values-title" kicker="যেভাবে কাজ করি" title="আমাদের চারটি নিয়ম" />
          <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 2) * 80} className="bg-surface p-8">
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-ink-2">{r.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="visit-title">
        <Container>
          <SectionHeading id="visit-title" kicker="দেখা করুন" title="চা খেতে খেতে কাজের কথা হোক" className="mb-10" />
          <VisitUs />
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
