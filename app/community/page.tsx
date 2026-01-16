"use client";
import { useI18n } from "@/lib/i18n";
import { useState, useEffect } from "react";
import PersonCard from "@/components/ui/person-card";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

interface Person {
  name: string;
  title: string;
  category: string;
  email?: string;
  phoneNumber?: string;
  linkPortfolio?: string;
  addedDate?: string;
  image?: string;
}


export default function CommunityPage() {
  const { t, dir } = useI18n();
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  const fetchPeople = async () => {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxoIhYfubQNgviPCITsWD0HxozAS1KeLO0VK3CFKHekG39t3f7ipAZZz0x39PM-MYeK/exec'
      );

      if (!response.ok) {
        throw new Error('Network error');
      }
      const data: any = await response.json();
      
      setPeople(data.data as Person[]);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  fetchPeople();
}, []);


  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation isScrolled={true} />
      
      <main className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("community.title")}
            </h1>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">{t("common.loading")}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{t("common.error")}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {people?.map((person, index) => (
                <PersonCard key={index} {...person} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
