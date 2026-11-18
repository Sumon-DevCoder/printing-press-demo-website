/**
 * Content types. They mirror the shape the future Laravel API will return,
 * so moving from static data to API calls only changes the data source, not the UI.
 */

/** Illustration styles used while the client's real photos are not available. */
export type ArtKind =
  | 'banner'
  | 'poster'
  | 'signboard'
  | 'led'
  | 'sticker'
  | 'card'
  | 'invitation'
  | 'calendar'
  | 'mug'
  | 'tshirt'
  | 'crest'

export type ServiceGroupSlug = 'signage' | 'cards-stationery' | 'custom-print'

export interface ServiceItem {
  name: string
  nameEn: string
  description: string
  art: ArtKind
}

export interface ServiceGroup {
  slug: ServiceGroupSlug
  name: string
  nameEn: string
  tagline: string
  description: string
  art: ArtKind
  useCases: string[]
  items: ServiceItem[]
}

export interface GalleryItem {
  id: string
  title: string
  group: ServiceGroupSlug
  art: ArtKind
  /** Shown under the image; client-supplied once real photos arrive. */
  note: string
}
