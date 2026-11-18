import type { ReactNode } from 'react'

/** Page width + side gutters (16px on phones). */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

/** Consistent vertical rhythm between page sections. */
export function Section({
  children,
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode
  className?: string
  id?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

/** Section heading: small kicker + headline + optional lead. Left-aligned by default (reads more natural than centred). */
export function SectionHeading({
  id,
  kicker,
  title,
  lead,
  className = '',
}: {
  id?: string
  kicker?: string
  title: ReactNode
  lead?: ReactNode
  className?: string
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker && (
        <p className="mb-3 flex items-center gap-2.5 text-sm font-medium text-accent-strong">
          <span aria-hidden className="h-px w-6 bg-accent" />
          {kicker}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-ink-2">{lead}</p>}
    </div>
  )
}
