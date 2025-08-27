import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'
import DownloadForms from '../components/DownloadForms'
import InputField from '../components/InputField/index.jsx'

export default function DealersPage() {
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
       Dealers
        </h1>
        
              
              {/* Description */}
              <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
             To become a Diamond Warranty dealership, simply download and complete the forms below. Once filled out, you can upload them directly using the submission form.


              </p>
              
              {/* Buttons */}
            
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
                <img
                  src="/images/hero-diamond.png"
                  alt="  Dealers"
                  className="absolute inset-0 w-full h-full object-contain "
                  loading="eager"
                 
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <DownloadForms />

        <section className="mb-section lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex w-full rounded-2xl border-2 border-secondary/15 bg-transparent">
        <div className="w-full flex flex-col gap-4 lg:gap-8 p-6 lg:p-12 font-lexend">
          <h3 className="inline-block tracking-tighter text-balance text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-0% to-secondary to-70%">
            Submit Forms
          </h3>

          <form
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
            action="/api/submit-dealer-application"
            method="POST"
            encType="multipart/form-data"
            id="dealerForm"
          >
           <InputField label="Name" id="name" name="name" required />
            <InputField label="Email" id="email" name="email" type="email" required />
            <InputField label="Phone" id="phone" name="phone" type="tel" required />

            {/* Upload Files */}
            <div className="col-span-1 lg:col-span-3">
              <div className="w-full flex flex-col lg:gap-1">
                <label
                  htmlFor="files"
                  className="block relative text-sm lg:text-base text-gray/80 font-medium"
                >
                  Upload Files{" "}
                  <span title="Required" className="text-base text-gray/30">
                    ✶
                  </span>
                </label>
               <input type="file" name="files" id="files" required="" className="w-full block p-2 lg:p-3 mt-1 rounded-md border-gray-300  ring-1 ring-inset ring-gray/10 text-sm md:text-base text-gray/80 focus:border-indigo-500 focus:ring-indigo-500" multiple="true" />
              </div>
              
            </div>

            {/* Terms */}
            <div className="col-span-1 lg:col-span-3 flex items-center gap-2">
              <input type="checkbox" id="terms" name="terms" required />
              <label
                htmlFor="terms"
                className="text-sm lg:text-base text-gray/80"
              >
                I have read and agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl text-center font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100 col-span-1 lg:col-span-3 bg-primary text-white hover:enabled:bg-primary/80"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>


 <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
         <h2 className="inline-block tracking-tighter text-4xl  lg:text-6xl font-lexend font-bold  pb-4 text-transparent bg-clip-text bg-gradient-to-r  from-[#1339FF] to-[#001999]">
  Need More Information?
</h2>


          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
        We’re here to help! Reach out to us or give us a call, and we’ll get back to you promptly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
       
            <BlueBtn link="/contact" text="Contact us"/>
          </div>
        </div>
      </div>
      </section>
        <FooterSection/>
        </div>
        </div>
  )
}
