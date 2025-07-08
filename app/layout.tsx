import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "سكون | SUKOON – مساحات عمل للمستقلين والطلاب في دمشق",
  description:
    "سكون - مساحات عمل راقية في قلب دمشق للمستقلين والطلاب والشركات الناشئة. بيئة عمل محفزة ومريحة مع خدمات متكاملة وأسعار تنافسية.",
  keywords: ["مساحة عمل", "دمشق", "مستقلين", "طلاب", "شركات ناشئة", "coworking", "Damascus", "freelancers"],
  openGraph: {
    title: "سكون | SUKOON – مساحات عمل للمستقلين والطلاب في دمشق",
    description: "سكون - مساحات عمل راقية في قلب دمشق للمستقلين والطلاب والشركات الناشئة",
    url: "https://sukoon.sy",
    siteName: "SUKOON",
    locale: "ar_SY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سكون | SUKOON – مساحات عمل للمستقلين والطلاب في دمشق",
    description: "سكون - مساحات عمل راقية في قلب دمشق للمستقلين والطلاب والشركات الناشئة",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#66489C",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoArabic.variable} font-arabic antialiased`} suppressHydrationWarning>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
