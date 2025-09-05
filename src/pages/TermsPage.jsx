import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import { useEffect, useState } from 'react';
import client, { getClient } from '../client'
import SEO from '../components/SEO';
import { fetchGlobalSeo, resolveSeo } from '../lib/seo';

export default function TermsPage() {
  const [termsData, setTermsData] = useState(null);
  const [seo, setSeo] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isPreview = params.get('preview') === 'true'
    setPreview(isPreview)
    const c = isPreview ? getClient(true) : client

    const query = `*[_type == "termsPage"][0]{
      seoTitle, seoDescription,
      title,
      hero { headline, image { asset->{ url } } },
      agreementPoints
    }`

    Promise.all([
      c.fetch(query),
      fetchGlobalSeo(isPreview)
    ])
    .then(([page, globalSeo]) => {
      setTermsData(page)
      setSeo(resolveSeo({ page, fallback: globalSeo }))
    })
    .catch(console.error)
  }, []);

  if (!termsData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      {seo && <SEO title={seo.title} description={seo.description} noIndex={preview} />}
      {/* Hero Section */}
      <div className="relative bg-white">

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
