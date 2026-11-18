import type { ReactNode } from 'react'

/**
 * Print-craft details borrowed from real press sheets: crop marks around artwork and a
 * CMYK colour bar. They give the site its own identity instead of generic decoration.
 */

export function CropMarks({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mark = 'pointer-events-none absolute size-4 border-ink/45'
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden className={`${mark} -left-3 -top-3 border-l border-t`} />
      <span aria-hidden className={`${mark} -right-3 -top-3 border-r border-t`} />
      <span aria-hidden className={`${mark} -bottom-3 -left-3 border-b border-l`} />
      <span aria-hidden className={`${mark} -bottom-3 -right-3 border-b border-r`} />
      {children}
    </div>
  )
}

export function CmykBar({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex overflow-hidden rounded-[2px] ${className}`}>
      <span className="h-2.5 w-4 bg-cmyk-c" />
      <span className="h-2.5 w-4 bg-cmyk-m" />
      <span className="h-2.5 w-4 bg-cmyk-y" />
      <span className="h-2.5 w-4 bg-ink" />
    </span>
  )
}

/** Honest label on placeholder artwork. */
export function SampleBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`rounded-full bg-paper/90 px-2.5 py-0.5 text-xs font-medium text-ink-2 shadow-sm backdrop-blur-sm ${className}`}
    >
      নমুনা ছবি
    </span>
  )
}
