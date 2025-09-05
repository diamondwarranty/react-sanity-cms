import React, { useEffect, useState } from 'react';
import BlueBtn from '../components/BlueBtn';
import WhiteBtn from '../components/WhiteBtn';
import TestimonialsSlider from '../components/TestimonialsSlider';
import BenefitsSection from '../components/BenifitSection';
import FooterSection from '../components/FooterSection';
import BottomSection from '../components/BottomSection';
import client, { getClient } from '../client';
import SEO from '../components/SEO';
import { fetchGlobalSeo, resolveSeo } from '../lib/seo';

const DiamondWarrantyPage = () => {
  const [hero, setHero] = useState(null);
  const [seo, setSeo] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isPreview = params.get('preview') === 'true'
    setPreview(isPreview)
    const c = isPreview ? getClient(true) : client

    const heroQuery = `*[_type == "hero" && _id == "heroSettings"][0]{
      rating,
      headline,
      description,
      primaryButton{ text, link },
      secondaryButton{ text, link },
      heroImage{ asset->{url}, alt },
      sectionContent{ heading, description, button{ text, link } }
    }`

    Promise.all([
      c.fetch(heroQuery),
      fetchGlobalSeo(isPreview)
    ])
    .then(([heroData, globalSeo]) => {
      setHero(heroData)
      setSeo(resolveSeo({ page: { seoTitle: heroData?.headline, seoDescription: heroData?.description }, fallback: globalSeo }))
    })
    .catch(console.error)
  }, []);

  if (!hero) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      {seo && <SEO title={seo.title} description={seo.description} noIndex={preview} />}
      {/* Hero Section */}
      <div className="relative  bg-white">
        {/* Hero Content */}
  <section className="lg:my-[96px] md:my-[64px] my-[32px] ">
  <div className="relative flex flex-col lg:flex-row justify-between items-stretch">
    
    {/* Content */}
    <div className="w-full lg:max-w-[600px] flex flex-col gap-[16px] max-lg:text-center">
      
      {/* Rating */}
      <p className="tracking-tight text-sm lg:text-base text-[#001999] font-lexend font-medium">
      {hero.rating}
      </p>
      
      {/* Headline */}
     <h1 className="inline-block tracking-tighter text-5xl text-balance  lg:text-7xl font-lexend font-bold uppercase pb-2 text-transparent bg-clip-text max-lg:text-center bg-gradient-to-r from-[#1339FF] to-[#001999]">
     {hero.headline}
     </h1>

      
      {/* Description */}
      <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
      {hero.description}
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col md:flex-row max-lg:justify-center gap-2 lg:gap-4 mt-2 lg:mt-4">
        <BlueBtn
          link={hero.primaryButton?.link || "/products"}
          text={hero.primaryButton?.text || "View our coverages"}
        />
        <WhiteBtn
          link={hero.secondaryButton?.link || "/dealers"}
          text={hero.secondaryButton?.text || "Join as a dealer"}
        />
      </div>
    </div>

    {/* Image */}
    <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
      <div className="relative w-full">
        <img
          src={hero.heroImage?.asset?.url || "/images/car.webp"}
          alt={hero.heroImage?.alt || "Your Vehicle's Best Friend."}
          className="absolute inset-0 w-full h-full object-contain object-right-bottom"
          loading="eager"
          width="899"
          height="600"
          decoding="async"
        />
      </div>
    </div>
  </div>
</section>




      

      {/* New Ownership Section */}
     <section className="mb-section flex flex-col lg:mb-[96px] md:mb-[64px] mb-[32px]">
      <div className="flex w-full rounded-2xl border-2 border-[#001999]/15 bg-gradient-to-b from-[#001999]/5 to-transparent">
        <div className="flex flex-col gap-6 items-center w-full p-10">
          {/* Heading */}
          <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-[#001999] text-center uppercase font-lexend">
            {hero.sectionContent?.heading || "Starting under a new leadership team"}
          </h3>

          {/* Description */}
          <p className="tracking-tight text-base lg:text-lg text-gray/60 font-source-serif max-w-[800px] text-center">
            {hero.sectionContent?.description ||
              "Diamond Warranty begins a new chapter under dynamic leadership. With fresh vision and decades of expertise, we're enhancing our services and strengthening our commitment to customer satisfaction."}
          </p>

          {/* Button */}
          <WhiteBtn
            link={hero.sectionContent?.button?.link || "/about"}
            text={hero.sectionContent?.button?.text || "Learn more"}
          />
        </div>
      </div>
    </section>
<TestimonialsSlider />

<section className=" lg:mb-[96px] md:mb-[64px] mb-[32px]">
  <BenefitsSection />
</section>
     
     

      

      {/* Coverages Section */}
    <BottomSection />

      {/* Footer */}
    <FooterSection />
    </div>
   </div>
  );
};

export default DiamondWarrantyPage;
