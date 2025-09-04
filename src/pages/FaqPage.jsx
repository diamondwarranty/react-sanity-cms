import { useState, useEffect } from 'react';
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'
import DownloadForms from '../components/DownloadForms'
import { UseTitle } from '../components/useTitle'
import client from '../client';

export default function FaqPage() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "faqPage"][0]{
          heroHeadline,
          heroDescription,
          faqs[]{
            question,
            answer
          }
        }`
      )
      .then((data) => setPageData(data))
      .catch(console.error);
  }, []);

  if (!pageData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      <div className="relative bg-white">
        <Header />
        <StickyHeader />
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
                  alt="FAQ"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-section">
          <div className="max-w-[800px]">
            {pageData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b-2 last:border-none border-secondary/5 py-4 lg:py-8 last:pb-0 first:pt-0"
              >
                <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-gray/80 mb-4 font-lexend">
                  {faq.question}
                </h3>
                <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
        <BottomSection />
        <FooterSection />
      </div>
    </div>
  );
}