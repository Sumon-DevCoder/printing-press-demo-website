import { Link } from 'react-router-dom'

/** Temporary wordmark until the client's real logo arrives. TODO(client): swap for supplied logo. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="শংকুচাইল ডিজিটাল সাইন — হোম">
      <svg viewBox="0 0 40 40" aria-hidden className="size-10 shrink-0">
        <rect width="40" height="40" rx="9" className="fill-ink" />
        <path
          d="M8 13V8h5M27 8h5v5M32 27v5h-5M13 32H8v-5"
          className="stroke-paper"
          strokeWidth="2"
          fill="none"
          strokeLinecap="square"
        />
        <circle cx="20" cy="20" r="5.5" className="fill-accent transition-transform duration-300 group-hover:scale-110 origin-center" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-ink">শংকুচাইল</span>
        <span className="mt-1 text-[0.72rem] font-medium text-ink-3">ডিজিটাল সাইন এন্ড প্রিন্টিং প্রেস</span>
      </span>
    </Link>
  )
}
