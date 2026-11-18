const BANGLA_DIGITS = '০১২৩৪৫৬৭৮৯'

/** 21 → "২১" */
export function toBanglaDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BANGLA_DIGITS[Number(d)] ?? d)
}

/** 1 → "০১" — used for step numbers. */
export function stepNumber(index: number): string {
  return toBanglaDigits(String(index + 1).padStart(2, '0'))
}
