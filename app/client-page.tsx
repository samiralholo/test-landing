"use client"
import Navigation from "@/components/layout/navigation"
import Footer from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wifi,
  Coffee,
  Car,
  Shield,
  Users,
  Clock,
  Printer,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Headphones,
  Camera,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import OfferSection from "@/components/sections/offer-section"

export default function ClientHomePage() {
  const { t, dir, isLoading } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "services", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} activeSection={activeSection} />

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Offer Section */}
        <OfferSection />

        {/* Have It Your Way Section */}
        <section className="py-20 bg-white" id="home">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("sections.haveItYourWay.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("sections.haveItYourWay.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[0, 1, 2].map((index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${index === 0 ? "bg-blue-100 group-hover:bg-blue-600" : index === 1 ? "bg-green-100 group-hover:bg-green-600" : "bg-purple-100 group-hover:bg-purple-600"} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors`}
                    >
                      {index === 0 && (
                        <Clock className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                      )}
                      {index === 1 && (
                        <Users className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                      )}
                      {index === 2 && (
                        <Zap className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {t(`sections.haveItYourWay.features.${index}.title`)}
                    </h3>
                    <p className="text-gray-600">{t(`sections.haveItYourWay.features.${index}.description`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Spaces for Any Occasion Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t("sections.spacesForOccasion.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("sections.spacesForOccasion.subtitle")}</p>
            </div>

            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${index === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index === 1 ? "lg:order-2" : ""}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={t(`sections.spacesForOccasion.spaces.${index}.title`)}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className={`space-y-6 ${index === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {t(`sections.spacesForOccasion.spaces.${index}.title`)}
                  </h3>
                  <p className="text-lg text-gray-600">{t(`sections.spacesForOccasion.spaces.${index}.description`)}</p>
                  <ul className="space-y-3">
                    {[0, 1, 2].map((featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          {t(`sections.spacesForOccasion.spaces.${index}.features.${featureIndex}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    {t(`sections.spacesForOccasion.spaces.${index}.cta`)}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enjoy All The Facilities Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("sections.facilities.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("sections.facilities.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Wifi, color: "blue" },
                { icon: Coffee, color: "green" },
                { icon: Car, color: "purple" },
                { icon: Shield, color: "red" },
                { icon: Printer, color: "yellow" },
                { icon: Phone, color: "indigo" },
                { icon: Globe, color: "pink" },
                { icon: Headphones, color: "teal" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-20 h-20 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}-600 transition-colors`}
                    >
                      <Icon className={`h-10 w-10 text-${item.color}-600 group-hover:text-white transition-colors`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t(`sections.facilities.items.${index}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm">{t(`sections.facilities.items.${index}.description`)}</p>
                  </div>
                )
              })}
            </div>

            {/* Additional Facilities Grid */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { icon: Camera, color: "blue" },
                { icon: Users, color: "green" },
                { icon: Star, color: "purple" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <Icon className={`h-12 w-12 text-${item.color}-600 mb-4`} />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t(`sections.facilities.additional.${index}.title`)}
                      </h3>
                      <p className="text-gray-600">{t(`sections.facilities.additional.${index}.description`)}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section with Map */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.form.title")}</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.firstName")}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.lastName")}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.phone")}</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t("contact.form.messagePlaceholder")}
                      ></textarea>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{t("contact.info.title")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{t("contact.info.address")}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{t("contact.info.phone")}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{t("contact.info.email")}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Hours</p>
                        <p className="text-gray-600">{t("contact.info.hours")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{t("contact.location.title")}</h3>
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959687750!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Prime Location</h4>
                  <p className="text-gray-600 mb-4">{t("contact.location.description")}</p>
                  <div className="flex flex-wrap gap-2">
                    {t("contact.location.features", []).map((feature: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
