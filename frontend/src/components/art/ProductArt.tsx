import { useId } from 'react'
import type { ArtKind } from '../../data/types'

/**
 * Flat illustrations of real print products, used as honest placeholders until the
 * client sends photos of their own work. Like a photo, the art keeps its own fixed
 * palette in both light and dark mode.
 */

const c = {
  ink: '#1b1a16',
  red: '#c93a1f',
  marigold: '#e1a13a',
  cream: '#fbf6ec',
  teal: '#1f5f63',
  green: '#2f6b3a',
  gold: '#b88a2e',
  shade: 'rgba(27,26,22,.14)',
}

const tones: Record<ArtKind, string> = {
  banner: '#dfe3d3',
  poster: '#e8dcc7',
  signboard: '#e6ddcb',
  led: '#23252b',
  sticker: '#d6dde0',
  card: '#eadccf',
  invitation: '#efe0d2',
  calendar: '#e4e0d5',
  mug: '#ece0c8',
  tshirt: '#dcdfd8',
  crest: '#e2dccf',
}

const labels: Record<ArtKind, string> = {
  banner: 'শুভ উদ্বোধনের ব্যানারের নমুনা চিত্র',
  poster: 'দেয়ালে লাগানো পোস্টারের নমুনা চিত্র',
  signboard: 'দোকানের সাইনবোর্ডের নমুনা চিত্র',
  led: 'রাতে জ্বলা এলইডি সাইনের নমুনা চিত্র',
  sticker: 'দোকানের কাচে স্টিকারের নমুনা চিত্র',
  card: 'ভিজিটিং কার্ডের নমুনা চিত্র',
  invitation: 'বিয়ের কার্ড ও খামের নমুনা চিত্র',
  calendar: 'দেয়াল ক্যালেন্ডারের নমুনা চিত্র',
  mug: 'ছবি প্রিন্ট করা মগের নমুনা চিত্র',
  tshirt: 'প্রিন্ট করা টি-শার্টের নমুনা চিত্র',
  crest: 'সম্মাননা ক্রেস্টের নমুনা চিত্র',
}

const display = { fontFamily: '"Anek Bangla", "Hind Siliguri", sans-serif', fontWeight: 700 }

interface ProductArtProps {
  kind: ArtKind
  className?: string
}

export function ProductArt({ kind, className }: ProductArtProps) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={labels[kind]}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={tones[kind]} />
      <Scene kind={kind} uid={uid} />
    </svg>
  )
}

function Floor({ y = 270 }: { y?: number }) {
  return <ellipse cx="200" cy={y} rx="150" ry="9" fill={c.shade} />
}

function Scene({ kind, uid }: { kind: ArtKind; uid: string }) {
  switch (kind) {
    case 'banner':
      return (
        <g>
          <rect x="0" y="262" width="400" height="38" fill="#c9cfb8" />
          <rect x="56" y="40" width="7" height="226" fill={c.ink} />
          <rect x="337" y="40" width="7" height="226" fill={c.ink} />
          <rect x="63" y="66" width="274" height="116" fill={c.red} />
          <rect x="63" y="66" width="274" height="10" fill="rgba(0,0,0,.12)" />
          <text x="200" y="130" textAnchor="middle" fontSize="38" fill={c.cream} style={display}>
            শুভ উদ্বোধন
          </text>
          <text x="200" y="163" textAnchor="middle" fontSize="17" fill={c.marigold} style={display}>
            আপনাদের সবার দাওয়াত
          </text>
          <path d="M63 182 L70 196 M337 182 L330 196" stroke={c.ink} strokeWidth="2" />
        </g>
      )

    case 'poster':
      return (
        <g>
          <g transform="rotate(6 250 150)">
            <rect x="196" y="48" width="140" height="190" fill={c.teal} />
            <circle cx="266" cy="120" r="34" fill={c.marigold} />
            <rect x="214" y="180" width="104" height="10" fill={c.cream} opacity=".8" />
            <rect x="214" y="198" width="70" height="8" fill={c.cream} opacity=".6" />
          </g>
          <g transform="rotate(-4 160 150)">
            <rect x="84" y="40" width="156" height="214" fill={c.cream} />
            <rect x="84" y="40" width="156" height="58" fill={c.ink} />
            <text x="162" y="80" textAnchor="middle" fontSize="28" fill={c.marigold} style={display}>
              বিশাল
            </text>
            <text x="162" y="134" textAnchor="middle" fontSize="30" fill={c.red} style={display}>
              মূল্যছাড়
            </text>
            <circle cx="162" cy="186" r="28" fill={c.red} />
            <text x="162" y="194" textAnchor="middle" fontSize="22" fill={c.cream} style={display}>
              ৩০%
            </text>
            <rect x="104" y="228" width="116" height="7" fill={c.ink} opacity=".25" />
            <rect x="140" y="32" width="44" height="16" fill="rgba(255,255,255,.55)" />
          </g>
        </g>
      )

    case 'signboard':
      return (
        <g>
          <rect x="30" y="44" width="340" height="96" fill={c.ink} />
          <rect x="38" y="52" width="324" height="80" fill={c.teal} />
          <text x="200" y="102" textAnchor="middle" fontSize="33" fill={c.cream} style={display}>
            মায়ের দোয়া স্টোর
          </text>
          <text x="200" y="124" textAnchor="middle" fontSize="13" fill={c.marigold} style={display}>
            মুদি ও স্টেশনারি · শংকুচাইল বাজার
          </text>
          <rect x="54" y="148" width="292" height="122" fill="#b9b2a2" />
          {Array.from({ length: 11 }, (_, i) => (
            <rect key={i} x="54" y={154 + i * 11} width="292" height="2" fill="rgba(0,0,0,.16)" />
          ))}
          <rect x="186" y="256" width="28" height="7" rx="2" fill={c.ink} opacity=".5" />
        </g>
      )

    case 'led':
      return (
        <g>
          <defs>
            <filter id={`glow-${uid}`} x="-30%" y="-60%" width="160%" height="220%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>
          <rect x="70" y="70" width="260" height="110" rx="6" fill="#ffe7a8" opacity=".55" filter={`url(#glow-${uid})`} />
          <rect x="70" y="70" width="260" height="110" rx="6" fill="#fff6de" />
          <rect x="70" y="70" width="260" height="110" rx="6" fill="none" stroke="#3b3e46" strokeWidth="6" />
          <text x="200" y="130" textAnchor="middle" fontSize="40" fill={c.red} style={display}>
            ফার্মেসী
          </text>
          <text x="200" y="160" textAnchor="middle" fontSize="15" fill={c.green} style={display}>
            ২৪ ঘণ্টা খোলা
          </text>
          <rect x="196" y="180" width="8" height="90" fill="#3b3e46" />
          {[60, 110, 300, 345].map((x, i) => (
            <circle key={x} cx={x} cy={30 + (i % 2) * 18} r="1.6" fill="#fff6de" opacity=".7" />
          ))}
        </g>
      )

    case 'sticker':
      return (
        <g>
          <rect x="60" y="24" width="280" height="252" fill="#c2ccd0" />
          <rect x="70" y="34" width="260" height="232" fill="#e5ecee" />
          <path d="M90 250 L230 40 M150 260 L290 52" stroke="#fff" strokeWidth="14" opacity=".55" />
          <circle cx="200" cy="118" r="54" fill={c.red} />
          <text x="200" y="130" textAnchor="middle" fontSize="34" fill={c.cream} style={display}>
            খোলা
          </text>
          <rect x="120" y="196" width="160" height="40" rx="20" fill={c.ink} />
          <text x="200" y="222" textAnchor="middle" fontSize="17" fill={c.marigold} style={display}>
            ভিতরে আসুন
          </text>
        </g>
      )

    case 'card':
      return (
        <g>
          <Floor y={238} />
          <g transform="rotate(-9 200 150)">
            <rect x="96" y="74" width="220" height="128" rx="5" fill={c.ink} />
            <circle cx="150" cy="138" r="26" fill={c.marigold} />
            <text x="150" y="146" textAnchor="middle" fontSize="22" fill={c.ink} style={display}>
              শ
            </text>
            <rect x="196" y="126" width="96" height="8" fill={c.cream} opacity=".7" />
            <rect x="196" y="142" width="64" height="6" fill={c.cream} opacity=".4" />
          </g>
          <g transform="rotate(5 220 170)">
            <rect x="110" y="110" width="220" height="128" rx="5" fill={c.cream} />
            <rect x="110" y="110" width="8" height="128" fill={c.red} />
            <text x="134" y="152" fontSize="21" fill={c.ink} style={display}>
              মোঃ রাকিব হাসান
            </text>
            <text x="134" y="174" fontSize="13" fill={c.red} style={display}>
              স্বত্বাধিকারী
            </text>
            <rect x="134" y="196" width="120" height="5" fill={c.ink} opacity=".35" />
            <rect x="134" y="210" width="90" height="5" fill={c.ink} opacity=".35" />
          </g>
        </g>
      )

    case 'invitation':
      return (
        <g>
          <Floor y={258} />
          <rect x="86" y="132" width="228" height="124" fill="#cf9d4f" />
          <g transform="rotate(-3 200 120)">
            <rect x="110" y="34" width="180" height="180" fill={c.cream} />
            <rect x="120" y="44" width="160" height="160" fill="none" stroke={c.red} strokeWidth="2" />
            <rect x="126" y="50" width="148" height="148" fill="none" stroke={c.gold} strokeWidth="1" />
            {[
              [128, 52],
              [272, 52],
              [128, 196],
              [272, 196],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={c.gold} />
            ))}
            <text x="200" y="118" textAnchor="middle" fontSize="32" fill={c.red} style={display}>
              শুভ বিবাহ
            </text>
            <path d="M160 134 Q200 148 240 134" stroke={c.gold} strokeWidth="2" fill="none" />
            <rect x="152" y="152" width="96" height="6" fill={c.ink} opacity=".3" />
            <rect x="166" y="166" width="68" height="5" fill={c.ink} opacity=".25" />
          </g>
          <path d="M86 132 L200 206 L314 132 L314 256 L86 256 Z" fill="#dcae62" />
          <path d="M86 256 L200 186 L314 256" fill="none" stroke="rgba(0,0,0,.08)" strokeWidth="2" />
        </g>
      )

    case 'calendar':
      return (
        <g>
          <circle cx="200" cy="30" r="5" fill={c.ink} />
          <path d="M200 30 L150 58 M200 30 L250 58" stroke={c.ink} strokeWidth="2" />
          <rect x="110" y="56" width="180" height="210" fill={c.cream} />
          <rect x="110" y="56" width="180" height="62" fill={c.red} />
          <text x="200" y="98" textAnchor="middle" fontSize="30" fill={c.cream} style={display}>
            ২০২৭
          </text>
          {Array.from({ length: 28 }, (_, i) => (
            <rect
              key={i}
              x={124 + (i % 7) * 22.5}
              y={132 + Math.floor(i / 7) * 26}
              width="14"
              height="14"
              rx="2"
              fill={c.ink}
              opacity={i % 7 === 5 ? 0.5 : 0.14}
            />
          ))}
          <circle cx="198" cy="191" r="14" fill="none" stroke={c.red} strokeWidth="2.5" />
          <rect x="124" y="242" width="100" height="6" fill={c.ink} opacity=".3" />
        </g>
      )

    case 'mug':
      return (
        <g>
          <Floor y={252} />
          <path d="M262 126 q48 2 46 42 q-2 38 -46 40" stroke={c.cream} strokeWidth="15" fill="none" />
          <path d="M262 126 q48 2 46 42 q-2 38 -46 40" stroke="rgba(0,0,0,.06)" strokeWidth="15" fill="none" />
          <rect x="132" y="100" width="134" height="150" rx="12" fill={c.cream} />
          <ellipse cx="199" cy="102" rx="67" ry="10" fill="#e6dccb" />
          <rect x="152" y="130" width="94" height="72" rx="4" fill={c.teal} />
          <circle cx="226" cy="148" r="9" fill={c.marigold} />
          <path d="M152 202 L182 166 L204 188 L218 176 L246 202 Z" fill={c.green} />
          <text x="199" y="230" textAnchor="middle" fontSize="18" fill={c.red} style={display}>
            প্রিয় আম্মু
          </text>
          <path d="M180 82 q-8 -14 0 -26 M206 84 q-8 -16 0 -30" stroke={c.ink} strokeWidth="2" opacity=".25" fill="none" />
        </g>
      )

    case 'tshirt':
      return (
        <g>
          <path
            d="M128 66 L170 46 Q200 66 230 46 L272 66 L308 116 L272 134 L264 120 L264 262 L136 262 L136 120 L128 134 L92 116 Z"
            fill={c.teal}
          />
          <path d="M170 46 Q200 66 230 46" stroke="rgba(0,0,0,.2)" strokeWidth="5" fill="none" />
          <circle cx="200" cy="138" r="30" fill={c.marigold} />
          <text x="200" y="150" textAnchor="middle" fontSize="30" fill={c.ink} style={display}>
            ১০
          </text>
          <text x="200" y="200" textAnchor="middle" fontSize="19" fill={c.cream} style={display}>
            শংকুচাইল একাদশ
          </text>
        </g>
      )

    case 'crest':
      return (
        <g>
          <Floor y={258} />
          <path d="M160 60 L240 60 L226 214 L174 214 Z" fill="#bfe1e8" opacity=".85" />
          <path d="M170 64 L184 64 L178 210 L172 210 Z" fill="#fff" opacity=".6" />
          <path
            d="M200 84 l9 19 21 3 -15 15 4 21 -19 -10 -19 10 4 -21 -15 -15 21 -3 z"
            fill={c.gold}
          />
          <rect x="146" y="214" width="108" height="44" fill={c.ink} />
          <text x="200" y="243" textAnchor="middle" fontSize="18" fill={c.gold} style={display}>
            সম্মাননা
          </text>
          <circle cx="306" cy="226" r="28" fill="none" stroke={c.red} strokeWidth="3" opacity=".8" />
          <circle cx="306" cy="226" r="21" fill="none" stroke={c.red} strokeWidth="1.5" opacity=".8" />
          <text x="306" y="232" textAnchor="middle" fontSize="15" fill={c.red} style={display} opacity=".85">
            সিল
          </text>
        </g>
      )
  }
}
