import { useState, useEffect } from 'react';
import client, { getClient } from '../client';
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import LogoSection from '../components/LogoSection'
import SEO from '../components/SEO';
import { fetchGlobalSeo, resolveSeo } from '../lib/seo';

export default function AboutPage() {
  const [pageData, setPageData] = useState(null);
  const [seo, setSeo] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isPreview = params.get('preview') === 'true'
    setPreview(isPreview)
    const c = isPreview ? getClient(true) : client

    const query = `*[_type == "aboutPage"][0]{
      seoTitle, seoDescription,
      heroHeadline,
      heroDescription,
      logos[]{ src, alt, width, height },
      carrierText,
      aboutSections[]{ id, image, alt, title, description }
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

  if (!pageData) return <div>Loading...</div>;

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
                  alt="Coverages"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <LogoSection logos={pageData.logos} carrierText={pageData.carrierText} />
        <div className="flex flex-col gap-12">
          {pageData.aboutSections.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col gap-4 md:gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full max-h-[350px] object-cover bg-gray-100 rounded-2xl"
                  loading="lazy"
                  width={976}
                  height={760}
                  decoding="async"
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 justify-center md:w-1/2">
                <h3 className="inline-block font-lexend tracking-tighter text-3xl lg:text-4xl font-semibold text-gray/80 text-balance">
                  {item.title}
                </h3>
                <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <BottomSection />
        <FooterSection />
      </div>
    </div>
  );
}