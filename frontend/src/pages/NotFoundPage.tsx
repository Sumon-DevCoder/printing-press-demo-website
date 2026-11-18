import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { CropMarks } from '../components/ui/PrintMarks'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function NotFoundPage() {
  useDocumentTitle('পেজ পাওয়া যায়নি')

  return (
    <Container className="flex min-h-[65vh] flex-col items-start justify-center py-20">
      <CropMarks className="mb-10 ml-3">
        <p className="px-4 py-2 font-display text-7xl font-bold text-accent">৪০৪</p>
      </CropMarks>
      <h1 className="text-3xl font-semibold sm:text-4xl">এই পেজটা ছাপা হয়নি</h1>
      <p className="mt-3 max-w-md text-lg text-ink-2">যে পেজ খুঁজছেন সেটা নেই বা সরানো হয়েছে।</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/">হোমে ফিরে যান</Button>
        <Button to="/services" variant="secondary">
          সার্ভিস দেখুন
        </Button>
      </div>
    </Container>
  )
}
