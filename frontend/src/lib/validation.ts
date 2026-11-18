const BANGLA_DIGITS = '০১২৩৪৫৬৭৮৯'

/** Many visitors type numbers with a Bangla keyboard (০১৮…). Convert to ASCII before validating. */
export function toAsciiDigits(value: string): string {
  return value.replace(/[০-৯]/g, (d) => String(BANGLA_DIGITS.indexOf(d)))
}

/** Bangladeshi mobile number: 01XXXXXXXXX, optionally prefixed with 88 / +88. Spaces and dashes allowed. */
export function normalizeBdPhone(value: string): string {
  return toAsciiDigits(value).replace(/[\s-]/g, '')
}

export function isValidBdPhone(value: string): boolean {
  return /^(?:\+?88)?01[3-9]\d{8}$/.test(normalizeBdPhone(value))
}
