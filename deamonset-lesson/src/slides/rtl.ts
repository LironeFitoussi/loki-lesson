const HEBREW_RANGE = /[֐-׿]/

export function hasHebrew(text: string): boolean {
  return HEBREW_RANGE.test(text)
}

export function resolveDir(...parts: Array<string | undefined>): 'rtl' | 'ltr' {
  return hasHebrew(parts.filter(Boolean).join(' ')) ? 'rtl' : 'ltr'
}
