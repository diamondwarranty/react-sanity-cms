import { useState, useEffect } from 'react';
import client from '../client';
import { UseTitle } from '../components/useTitle';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';
import BottomSection from '../components/BottomSection';
import FooterSection from '../components/FooterSection';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  UseTitle("Coverages");
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "coveragesPage"][0]{
          heroHeadline,
          heroDescription,
          plans[]{
            title,
            description,
            sections[]{
              title,
              items
            },
            terms,
            footnotes[]{
              text,
              bold
            }
          }
        }`
      )
      .then((data) => setPageData(data))
      .catch(console.error);
  }, []);

  if (!pageData?.plans) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-500">Loading plans..+++.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
      {/* Hero Section */}
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
                  alt="Coverages"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <ProductCard plans={pageData.plans} />

        <BottomSection />
        <FooterSection />
      </div>
    </div>
  );
}
