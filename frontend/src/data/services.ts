import type { ServiceGroup, ServiceGroupSlug } from './types'

/**
 * The client's full service list (from their Facebook posts), grouped into three buckets
 * so visitors pick from 3 choices, not 21 (Hick's law).
 */
export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'signage',
    name: 'ব্যানার ও সাইনবোর্ড',
    nameEn: 'Large format & signage',
    tagline: 'দূর থেকে চোখে পড়ার মতো কাজ',
    description:
      'দোকানের সাইনবোর্ড থেকে নির্বাচনী পোস্টার, উদ্বোধনের ব্যানার থেকে রাস্তার ফেস্টুন — বড় সাইজের সব প্রিন্ট আমরা নিজেরাই করি। রং থাকে উজ্জ্বল, কাপড় ও ফ্লেক্স থাকে টেকসই।',
    art: 'signboard',
    useCases: ['দোকান ও প্রতিষ্ঠানের নাম', 'উদ্বোধন ও অনুষ্ঠান', 'নির্বাচন ও প্রচারণা', 'স্কুল-মাদ্রাসার নোটিশ'],
    items: [
      {
        name: 'ব্যানার',
        nameEn: 'Banner',
        description: 'ফ্লেক্স ও কাপড়ের ব্যানার — যেকোনো সাইজে, প্রয়োজনে একদিনে ডেলিভারি।',
        art: 'banner',
      },
      {
        name: 'ফেস্টুন',
        nameEn: 'Festoon',
        description: 'রাস্তা ও মোড়ে টাঙানোর জন্য দুই পাশে প্রিন্ট করা ফেস্টুন।',
        art: 'banner',
      },
      {
        name: 'পোস্টার',
        nameEn: 'Poster',
        description: 'প্রচারণা, ইভেন্ট ও বিজ্ঞাপনের পোস্টার — অল্প বা বেশি সংখ্যায়।',
        art: 'poster',
      },
      {
        name: 'লিফলেট',
        nameEn: 'Leaflet',
        description: 'এক বা দুই পাতার লিফলেট, হ্যান্ডবিল ও ব্রোশিওর।',
        art: 'poster',
      },
      {
        name: 'ডিজিটাল সাইনবোর্ড',
        nameEn: 'Digital signboard',
        description: 'পিভিসি, এসিপি ও ফ্লেক্সের সাইনবোর্ড — ফ্রেমসহ লাগিয়ে দেওয়া পর্যন্ত।',
        art: 'signboard',
      },
      {
        name: 'এলইডি সাইনবোর্ড',
        nameEn: 'LED signboard',
        description: 'রাতেও জ্বলজ্বলে দেখা যায় এমন এলইডি ও লাইট বক্স সাইন।',
        art: 'led',
      },
      {
        name: 'ভিনাইল স্টিকার',
        nameEn: 'Vinyl sticker',
        description: 'দোকানের গ্লাস, গাড়ি ও প্যাকেটের জন্য কাটিং ও প্রিন্টেড স্টিকার।',
        art: 'sticker',
      },
      {
        name: 'রিফ্লেক্টিভ স্টিকার',
        nameEn: 'Reflective sticker',
        description: 'রাতে আলো পড়লে চকচক করে — গাড়ি ও নিরাপত্তা সাইনের জন্য।',
        art: 'sticker',
      },
    ],
  },
  {
    slug: 'cards-stationery',
    name: 'কার্ড ও অফিস প্রিন্ট',
    nameEn: 'Cards & stationery',
    tagline: 'হাতে নিলেই বোঝা যায় মান',
    description:
      'ভিজিটিং কার্ড, বিয়ের কার্ড, হালখাতার দাওয়াত, ক্যাশ মেমো — যে কাগজ মানুষ হাতে নেয়, সেখানে ডিজাইন আর কাগজের মান দুটোই জরুরি। ডিজাইন আমরাই করে দিই, অনুমোদনের পর প্রিন্ট।',
    art: 'invitation',
    useCases: ['ব্যবসার পরিচিতি', 'বিয়ে ও পারিবারিক অনুষ্ঠান', 'হালখাতা ও নববর্ষ', 'অফিস ও দোকানের হিসাব'],
    items: [
      {
        name: 'ভিজিটিং কার্ড',
        nameEn: 'Visiting card',
        description: 'সাধারণ থেকে ম্যাট ল্যামিনেশন — নিজস্ব ডিজাইনসহ।',
        art: 'card',
      },
      {
        name: 'বিয়ের কার্ড',
        nameEn: 'Wedding card',
        description: 'ক্লাসিক থেকে আধুনিক — খাম ও বিশেষ কাগজসহ বিয়ের কার্ড।',
        art: 'invitation',
      },
      {
        name: 'দাওয়াত কার্ড',
        nameEn: 'Invitation card',
        description: 'আকিকা, জন্মদিন, মিলাদ ও যেকোনো অনুষ্ঠানের দাওয়াত কার্ড।',
        art: 'invitation',
      },
      {
        name: 'হালখাতা কার্ড',
        nameEn: 'Halkhata card',
        description: 'পহেলা বৈশাখ ও হালখাতার নিমন্ত্রণপত্র — দোকানের নামসহ।',
        art: 'invitation',
      },
      {
        name: 'আইডি কার্ড',
        nameEn: 'ID card',
        description: 'স্কুল, অফিস ও প্রতিষ্ঠানের পিভিসি আইডি কার্ড, ফিতাসহ।',
        art: 'card',
      },
      {
        name: 'ক্যাশ মেমো',
        nameEn: 'Cash memo',
        description: 'দোকানের নামসহ ক্যাশ মেমো ও রশিদ বই — কার্বন কপিসহ।',
        art: 'calendar',
      },
      {
        name: 'ক্যালেন্ডার',
        nameEn: 'Calendar',
        description: 'দেয়াল ও টেবিল ক্যালেন্ডার — প্রতিষ্ঠানের প্রচারের জন্য।',
        art: 'calendar',
      },
      {
        name: 'ডায়েরি',
        nameEn: 'Diary',
        description: 'নাম ও লোগোসহ কাস্টম ডায়েরি — উপহার ও অফিসের জন্য।',
        art: 'calendar',
      },
    ],
  },
  {
    slug: 'custom-print',
    name: 'কাস্টম প্রিন্ট ও উপহার',
    nameEn: 'Custom print & gifts',
    tagline: 'নাম আর ছবি দিয়ে নিজের মতো করে',
    description:
      'মগে প্রিয়জনের ছবি, টিমের জন্য একই রকম টি-শার্ট, প্রতিষ্ঠানের সিল বা সম্মাননা ক্রেস্ট — একটা হোক বা একশোটা, যত্ন নিয়ে বানানো হয়।',
    art: 'mug',
    useCases: ['উপহার', 'টিম ও ক্লাব', 'সম্মাননা ও পুরস্কার', 'প্রতিষ্ঠানের কাজ'],
    items: [
      {
        name: 'মগ প্রিন্ট',
        nameEn: 'Mug print',
        description: 'ছবি, নাম বা লোগো দিয়ে সিরামিক মগ — উপহারের জন্য সেরা।',
        art: 'mug',
      },
      {
        name: 'টি-শার্ট প্রিন্ট',
        nameEn: 'T-shirt print',
        description: 'টিম, ক্লাব ও অনুষ্ঠানের জন্য নাম-নম্বরসহ টি-শার্ট।',
        art: 'tshirt',
      },
      {
        name: 'ব্যাগ প্রিন্ট',
        nameEn: 'Bag print',
        description: 'দোকানের শপিং ব্যাগ ও কাপড়ের ব্যাগে লোগো প্রিন্ট।',
        art: 'tshirt',
      },
      {
        name: 'ক্রেস্ট',
        nameEn: 'Crest',
        description: 'সম্মাননা, খেলা ও অনুষ্ঠানের জন্য ক্রিস্টাল ও কাঠের ক্রেস্ট।',
        art: 'crest',
      },
      {
        name: 'সিল',
        nameEn: 'Seal / stamp',
        description: 'প্রতিষ্ঠান, দোকান ও অফিসের রাবার ও অটো সিল।',
        art: 'crest',
      },
    ],
  },
]

export const totalServiceCount = serviceGroups.reduce((sum, g) => sum + g.items.length, 0)

export function findServiceGroup(slug: string | undefined): ServiceGroup | undefined {
  return serviceGroups.find((g) => g.slug === slug)
}

export function serviceGroupName(slug: ServiceGroupSlug): string {
  return serviceGroups.find((g) => g.slug === slug)?.name ?? ''
}

/** Flat list of every service name, for the quote form's dropdown. */
export const allServiceNames = serviceGroups.flatMap((g) => g.items.map((i) => i.name))
