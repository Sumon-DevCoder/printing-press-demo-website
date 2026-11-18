import { useEffect } from 'react'
import { business } from '../data/business'

/** Sets a per-page <title> (SEO + readable browser tabs). */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — ${business.shortName}` : `${business.name} — বুড়িচং, কুমিল্লা`
  }, [pageTitle])
}
