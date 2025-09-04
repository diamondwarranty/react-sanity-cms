import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import { UseTitle } from '../components/useTitle'
import{ useEffect, useState } from 'react';
import client from '../client'

export default function TermsPage() {
  UseTitle("Terms and Conditions");
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "termsPage"][0]{
          title,
          hero {
            headline,
            image {
              asset->{
                url
              }
            }
          },
          agreementPoints
        }`
      )
      .then((data) => setTermsData(data))
      .catch(console.error);
  }, []);

  if (!termsData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="relative bg-white">
        <Header />
        <StickyHeader />

        <section className="lg:my-[96px] md:my-[64px] my-[32px]">
          <div className="relative flex flex-col lg:flex-row justify-between items-stretch">
            {/* Content */}
            <div className="w-full lg:max-w-[600px] flex flex-col gap-[16px] max-lg:text-center">
              {/* Headline */}
              <h1 className="inline-block tracking-tighter text-5xl lg:text-7xl font-lexend font-bold uppercase pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
                {termsData.hero.headline}
              </h1>
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
                {termsData.hero.image?.asset.url && (
                  <img
                    src={termsData.hero.image.asset.url}
                    alt="Terms"
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="eager"
                    decoding="async"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="lg:my-[96px] md:my-[64px] my-[32px]">
          <div className="flex flex-col gap-8 max-w-[800px]">
            {termsData.agreementPoints?.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
}
