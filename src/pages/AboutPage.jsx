import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'
import LogoSection from '../components/LogoSection'

const aboutData = [
  {
    id: 1,
    image: "/images/about1.webp",
    alt: "Unmatched Service and Support",
    title: "Unmatched Service and Support",
    description:
      "We’re here to offer tailored solutions that meet your needs. Our expert team works tirelessly to enhance your ownership experience, providing peace of mind on every drive.",
  }, 
  {
    id: 2,
    image: "/images/about2.webp",
    alt: "Building Trust and Reliability",
    title: "Building Trust and Reliability",
    description:
      "Our mission is to create strong partnerships with both dealerships and customers. We focus on protecting your investment with the best coverage options backed by our proven expertise.",
  }, 
]
export default function AboutPage() {
  return (
   <div className="min-h-screen bg-white lg:px-8 px-4 sm:px-6">
        {/* Hero Section */}
        <div className="relative  bg-white">
          {/* Background Image */}
         
        <Header />
        <StickyHeader />

        <section className="lg:my-[96px] md:my-[64px] my-[32px] ">
          <div className="relative flex flex-col lg:flex-row justify-between items-stretch">
            
            {/* Content */}
            <div className="w-full lg:max-w-[600px] flex flex-col gap-[16px] max-lg:text-center">
              
            
              
              {/* Headline */}
             <h1 className="inline-block tracking-tighter text-5xl  lg:text-7xl font-lexend font-bold uppercase pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
         About
        </h1>
        
              
              {/* Description */}
              <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
              With close to 20 years of industry knowledge and experience, Diamond Warranty leads the way in providing trusted, comprehensive extended warranty plans.
              </p>
              
              {/* Buttons */}
            
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
                <img
                  src="/images/hero-diamond.png"
                  alt="  Coverages"
                  className="absolute inset-0 w-full h-full object-contain "
                  loading="eager"
                 
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
 <LogoSection />

         <div className="flex flex-col gap-12">
      {aboutData.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col gap-4 md:gap-8 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
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

          {/* Text */}
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


 <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
         <h2 className="inline-block tracking-tighter text-4xl text-balance  lg:text-6xl font-lexend font-bold  pb-4 text-transparent bg-clip-text bg-gradient-to-r  from-[#1339FF] to-[#001999]">
 Ready to Secure Your Vehicle?
</h2>


          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
          Explore our coverage plans or join us as a dealership partner and offer your customers the best in protection.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
       <BlueBtn link="/products" text="View our coverages"/>
            <WhiteBtn link="/dealers" text="Join as a dealer"/>
          </div>
        </div>
      </div>
      </section>
        <FooterSection/>
        </div>
        </div>
  )
}
