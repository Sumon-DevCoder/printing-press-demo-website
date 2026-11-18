import { business } from '../data/business'

export const telLink = (e164: string) => `tel:${e164}`

/** wa.me link with an optional pre-filled message (encoded, so user input cannot break the URL). */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${business.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address.mapsQuery,
)}`

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  business.address.mapsQuery,
)}&output=embed`
