import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'

export default function ProductsPage() {
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
         Coverages
        </h1>
        
              
              {/* Description */}
              <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
               Protection that’s as unique as your vehicle. Discover plans that keep you covered, no matter where the road leads.
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

{/* product card */}

<ProductCard />

 <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
         <h2 className="inline-block tracking-tighter text-4xl  lg:text-6xl font-lexend font-bold  pb-4 text-transparent bg-clip-text bg-gradient-to-r  from-[#1339FF] to-[#001999]">
  Dealership Partnerships
</h2>


          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
           Partner with us to offer your customers top-tier coverage. Join a network dedicated to protection and reliability.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
       <BlueBtn link="/dealers" text="Join as a dealer"/>
            <WhiteBtn link="/contact" text="Contact us"/>
          </div>
        </div>
      </div>
      </section>
        <FooterSection/>
        </div>
        </div>
  )
}
