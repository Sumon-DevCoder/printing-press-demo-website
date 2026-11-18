import { FileText, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { primaryPhone } from '../data/business'
import { telLink, whatsappLink } from '../lib/links'

/**
 * Phone visitors are the majority and they order by calling. Keep the three ways to reach
 * the shop under the thumb at all times.
 */
export function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium'

  return (
    <nav
      aria-label="দ্রুত যোগাযোগ"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <div className="flex h-16">
        <a href={telLink(primaryPhone.e164)} className={`${item} text-ink`}>
          <Phone aria-hidden className="size-5" />
          কল করুন
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} text-ink`}>
          <MessageCircle aria-hidden className="size-5" />
          হোয়াটসঅ্যাপ
        </a>
        <Link to="/contact#quote" className={`${item} m-1.5 rounded-xl bg-accent text-on-accent`}>
          <FileText aria-hidden className="size-5" />
          কোটেশন
        </Link>
      </div>
    </nav>
  )
}
