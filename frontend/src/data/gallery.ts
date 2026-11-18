import type { GalleryItem } from './types'

/**
 * DEMO gallery. Every entry uses an illustration, not a photo, and the UI labels it as a sample.
 * TODO(client): replace with real photos of the client's work. Never present these as real jobs.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'দোকানের ডিজিটাল সাইনবোর্ড', group: 'signage', art: 'signboard', note: 'এসিপি বোর্ড, ফ্রেমসহ' },
  { id: 'g2', title: 'বিয়ের কার্ড', group: 'cards-stationery', art: 'invitation', note: 'খামসহ, বিশেষ কাগজ' },
  { id: 'g3', title: 'শুভ উদ্বোধনের ব্যানার', group: 'signage', art: 'banner', note: 'ফ্লেক্স, ১০ × ৪ ফুট' },
  { id: 'g4', title: 'ছবিসহ মগ', group: 'custom-print', art: 'mug', note: 'উপহারের জন্য' },
  { id: 'g5', title: 'ভিজিটিং কার্ড', group: 'cards-stationery', art: 'card', note: 'ম্যাট ল্যামিনেশন' },
  { id: 'g6', title: 'এলইডি লাইট বক্স', group: 'signage', art: 'led', note: 'রাতে দেখার জন্য' },
  { id: 'g7', title: 'ক্লাবের টি-শার্ট', group: 'custom-print', art: 'tshirt', note: 'নাম ও নম্বরসহ' },
  { id: 'g8', title: 'প্রচারণার পোস্টার', group: 'signage', art: 'poster', note: 'অফসেট প্রিন্ট' },
  { id: 'g9', title: 'দেয়াল ক্যালেন্ডার', group: 'cards-stationery', art: 'calendar', note: 'প্রতিষ্ঠানের নামসহ' },
  { id: 'g10', title: 'সম্মাননা ক্রেস্ট', group: 'custom-print', art: 'crest', note: 'ক্রিস্টাল ক্রেস্ট' },
  { id: 'g11', title: 'দোকানের গ্লাস স্টিকার', group: 'signage', art: 'sticker', note: 'কাটিং ভিনাইল' },
  { id: 'g12', title: 'হালখাতার কার্ড', group: 'cards-stationery', art: 'invitation', note: 'পহেলা বৈশাখ' },
]
