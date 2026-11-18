import { CheckCircle2, MessageCircle } from 'lucide-react'
import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { business, primaryPhone } from '../data/business'
import { allServiceNames } from '../data/services'
import { telLink, whatsappLink } from '../lib/links'
import { isValidBdPhone, normalizeBdPhone } from '../lib/validation'
import { Button } from './ui/Button'

/**
 * Static-phase quote form. With no backend yet, a valid submission opens WhatsApp with the
 * request already written out, so the demo works end to end.
 * TODO(dynamic phase): POST to the Laravel API (/api/v1/quotes) instead.
 */

const LIMITS = { name: 80, quantity: 80, details: 1000 }

type Field = 'name' | 'phone' | 'details'
type Errors = Partial<Record<Field, string>>

export function QuoteForm() {
  const [params] = useSearchParams()
  const presetService = params.get('service')
  const initialService = presetService && allServiceNames.includes(presetService) ? presetService : ''

  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const details = String(data.get('details') ?? '').trim()
    if (name.length < 2) next.name = 'আপনার নাম লিখুন।'
    if (!isValidBdPhone(phone)) next.phone = 'সঠিক মোবাইল নম্বর দিন, যেমন 01812-345678।'
    if (details.length < 5) next.details = 'কাজটি সম্পর্কে অল্প করে লিখুন — সাইজ, সংখ্যা বা লেখা।'
    return next
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    // Honeypot: real people never see or fill this field; simple bots do.
    if (String(data.get('company') ?? '') !== '') return

    const found = validate(data)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const service = String(data.get('service') ?? '')
    const quantity = String(data.get('quantity') ?? '').trim()
    const message = [
      `আসসালামু আলাইকুম, ${business.shortName}।`,
      'আমি একটি কাজের কোটেশন চাই।',
      '',
      `নাম: ${String(data.get('name')).trim()}`,
      `মোবাইল: ${normalizeBdPhone(String(data.get('phone')))}`,
      service && `কাজ: ${service}`,
      quantity && `সাইজ/সংখ্যা: ${quantity}`,
      `বিস্তারিত: ${String(data.get('details')).trim()}`,
    ]
      .filter((line) => line !== '')
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const inputBase =
    'mt-2 block w-full rounded-xl border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-3/80 transition-colors focus:border-ink focus:outline-none'
  const inputClass = (field?: Field) =>
    `${inputBase} ${field && errors[field] ? 'border-accent' : 'border-line hover:border-ink-3'}`

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8">
        <CheckCircle2 aria-hidden className="size-9 text-accent" />
        <h3 className="mt-4 text-2xl font-semibold">হোয়াটসঅ্যাপে আপনার বার্তা তৈরি</h3>
        <p className="mt-2 text-ink-2">
          নতুন ট্যাবে হোয়াটসঅ্যাপ খুলেছে — শুধু <strong className="text-ink">Send</strong> চাপুন। খুব দ্রুত আমরা উত্তর
          দেব।
        </p>
        <p className="mt-4 text-sm text-ink-2">
          হোয়াটসঅ্যাপ খোলেনি?{' '}
          <a href={telLink(primaryPhone.e164)} className="font-medium text-accent-strong underline underline-offset-4">
            সরাসরি কল করুন {primaryPhone.display}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-ink underline underline-offset-4 hover:text-accent-strong"
        >
          আরেকটি কোটেশন পাঠান
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <FieldWrap id={fid('name')} label="আপনার নাম" error={errors.name}>
        <input
          id={fid('name')}
          name="name"
          type="text"
          autoComplete="name"
          maxLength={LIMITS.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${fid('name')}-error` : undefined}
          className={inputClass('name')}
          placeholder="যেমন: রাকিব হাসান"
        />
      </FieldWrap>

      <FieldWrap id={fid('phone')} label="মোবাইল নম্বর" error={errors.phone}>
        <input
          id={fid('phone')}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={20}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${fid('phone')}-error` : undefined}
          className={inputClass('phone')}
          placeholder="01XXXXXXXXX"
        />
      </FieldWrap>

      <FieldWrap id={fid('service')} label="কোন কাজ" optional>
        <select id={fid('service')} name="service" defaultValue={initialService} className={inputClass()}>
          <option value="">বেছে নিন</option>
          {allServiceNames.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FieldWrap>

      <FieldWrap id={fid('quantity')} label="সাইজ বা সংখ্যা" optional>
        <input
          id={fid('quantity')}
          name="quantity"
          type="text"
          maxLength={LIMITS.quantity}
          className={inputClass()}
          placeholder="যেমন: ১০ × ৪ ফুট, ৫০০ পিস"
        />
      </FieldWrap>

      <FieldWrap id={fid('details')} label="কাজের বিস্তারিত" error={errors.details} className="sm:col-span-2">
        <textarea
          id={fid('details')}
          name="details"
          rows={4}
          maxLength={LIMITS.details}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? `${fid('details')}-error` : undefined}
          className={`${inputClass('details')} resize-y`}
          placeholder="কী লেখা থাকবে, কবে লাগবে, কোনো রং বা ডিজাইনের পছন্দ…"
        />
      </FieldWrap>

      {/* Honeypot — hidden from people and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-3">আপনার তথ্য শুধু এই কাজের জন্যই ব্যবহার হবে।</p>
        <Button type="submit" size="lg" icon={<MessageCircle />}>
          হোয়াটসঅ্যাপে পাঠান
        </Button>
      </div>
    </form>
  )
}

function FieldWrap({
  id,
  label,
  error,
  optional,
  className = '',
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-[0.95rem] font-medium text-ink">
        {label}
        {optional && <span className="ml-1.5 text-sm font-normal text-ink-3">(ঐচ্ছিক)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-accent-strong">
          {error}
        </p>
      )}
    </div>
  )
}
