export type Locale = "ar" | "en"

export const locales: Locale[] = ["ar", "en"]
export const defaultLocale: Locale = "ar"

export const localeConfig = {
  ar: {
    label: "العربية",
    dir: "rtl" as const,
    flag: "🇸🇾",
    fontClass: "font-arabic",
  },
  en: {
    label: "English",
    dir: "ltr" as const,
    flag: "🇺🇸",
    fontClass: "font-sans",
  },
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale

  const browserLang = navigator.language.split("-")[0]
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale
}
