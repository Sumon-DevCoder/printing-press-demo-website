/**
 * Business facts, taken from the client's Facebook page.
 * Values marked TODO(client) still need confirmation before launch.
 */
export const business = {
  name: 'শংকুচাইল ডিজিটাল সাইন এন্ড প্রিন্টিং প্রেস',
  shortName: 'শংকুচাইল ডিজিটাল সাইন',
  nameEn: 'Shankuchail Digital Sign & Printing Press',

  address: {
    line: 'শংকুচাইল বাজার, বুড়িচং, কুমিল্লা — ৩৫২০',
    lineEn: 'Shankuchail Bazar, Burichang, Cumilla 3520',
    mapsQuery: 'Shankuchail Bazar, Burichang, Cumilla',
  },

  phones: [
    // Phone numbers stay in English digits: Bangla ১ is hard to read at small sizes,
    // and people dial in English digits anyway.
    { display: '01862-771313', e164: '+8801862771313' },
    { display: '01863-586535', e164: '+8801863586535' },
  ],

  /** TODO(client): confirm this number is on WhatsApp. */
  whatsapp: '8801862771313',

  email: 'shankuchaildigitalsign@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61593858486325',

  /** TODO(client): confirm real opening hours. */
  hours: [
    { days: 'শনি – বৃহস্পতি', time: 'সকাল ৯টা – রাত ৯টা' },
    { days: 'শুক্রবার', time: 'বিকাল ৩টা – রাত ৯টা' },
  ],
} as const

export const primaryPhone = business.phones[0]
