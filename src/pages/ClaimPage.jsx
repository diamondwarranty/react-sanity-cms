import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'
import ContactSection from '../components/ContactCards'
import ContactForm from '../components/ContactForm'
import ClaimForm from '../components/ClaimForm'

export default function ClaimPage() {
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
       Start a Claim
        </h1>
        
              
              {/* Description */}
              <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
             (Repair Shop Use Only)


              </p>
              
              {/* Buttons */}
            
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
               
              </div>
            </div>
          </div>
        </section>
<ClaimForm />


 
        <FooterSection/>
        </div>
        </div>
  )
}
