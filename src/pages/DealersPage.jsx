import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import DownloadForms from '../components/DownloadForms'
import InputField from '../components/InputField/index.jsx'
import DealerForm from '../components/DealerForm/index.jsx'
import { useState, useEffect } from 'react';
import client, { getClient } from '../client.js'
import SEO from '../components/SEO';
import { fetchGlobalSeo, resolveSeo } from '../lib/seo';


export default function DealersPage() {
  const [pageData, setPageData] = useState(null);
  const [seo, setSeo] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isPreview = params.get('preview') === 'true'
    setPreview(isPreview)
    const c = isPreview ? getClient(true) : client

    const query = `*[_type == "dealersPage"][0]{
      seoTitle, seoDescription,
      heroHeadline,
      heroDescription,
      forms[]{ title, subtitle, href, imgSrc, alt, width, height }
    }`

    Promise.all([
      c.fetch(query),
      fetchGlobalSeo(isPreview)
    ])
    .then(([page, globalSeo]) => {
      setPageData(page)
      setSeo(resolveSeo({ page, fallback: globalSeo }))
    })
    .catch(console.error)
  }, []);

  if (!pageData) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-500">Loading plans...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      {seo && <SEO title={seo.title} description={seo.description} noIndex={preview} />}
      <div className="relative bg-white">
        <section className="lg:my-[96px] md:my-[64px] my-[32px]">
          <div className="relative flex flex-col lg:flex-row justify-between items-stretch">
            <div className="w-full lg:max-w-[600px] flex flex-col gap-[16px] max-lg:text-center">
              <h1 className="inline-block tracking-tighter text-5xl lg:text-7xl font-lexend font-bold uppercase pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
                {pageData.heroHeadline}
              </h1>
              <p className="max-w-[600px] lg:mx-0 mx-auto tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
                {pageData.heroDescription}
              </p>
            </div>
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
                <img
                  src="/images/hero-diamond.png"
                  alt="Dealers"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <DownloadForms forms={pageData.forms} />
        <DealerForm />
        <BottomSection />
        <FooterSection />
      </div>
    </div>
  );
}
