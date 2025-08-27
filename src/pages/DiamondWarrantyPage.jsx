import React, { useState } from 'react';
import Header from '../components/Header';
import BlueBtn from '../components/BlueBtn';
import WhiteBtn from '../components/WhiteBtn';
import StickyHeader from '../components/StickyHeader';
import TestimonialsSlider from '../components/TestimonialsSlider';

const DiamondWarrantyPage = () => {
  
  return (
    <div className="min-h-screen bg-white px-8 md:px-6 sm:px-4">
      {/* Hero Section */}
      <div className="relative  bg-white">
        {/* Background Image */}
       
      <Header />
      <StickyHeader />
        
        {/* Hero Content */}
  <section className="lg:my-[96px] md:my-[64px] my-[32px] ">
  <div className="relative flex flex-col lg:flex-row justify-between items-stretch">
    
    {/* Content */}
    <div className="w-full lg:max-w-[600px] flex flex-col gap-[16px] max-lg:text-center">
      
      {/* Rating */}
      <p className="tracking-tight text-sm lg:text-base text-[#001999] font-lexend font-medium">
        Rated 4.8 / 5 by 2,392 customers
      </p>
      
      {/* Headline */}
     <h1 className="inline-block tracking-[-5.76px] text-5xl md:text-[64px] lg:text-[72px] font-lexend font-bold uppercase pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
  Your Vehicle's Best Friend.
</h1>

      
      {/* Description */}
      <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
        As a leading extended warranty plan administrator since 2006, Diamond Warranty ensures your vehicle is covered, giving you peace of mind on the road.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col md:flex-row max-lg:justify-center gap-2 lg:gap-4 mt-2 lg:mt-4">
       <BlueBtn link="/products" text="View our coverages"/>
       <WhiteBtn link="/dealers" text="Join as a dealer"/>
      </div>
    </div>

    {/* Image */}
    <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
      <div className="relative w-full">
        <img
          src="/images/car.webp"
          alt="Your Vehicle's Best Friend."
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
            Starting under a new leadership team
          </h3>

          {/* Description */}
          <p className="tracking-tight text-base lg:text-lg text-gray-600 font-source-serif max-w-[800px] text-center">
            Diamond Warranty begins a new chapter under dynamic leadership. With
            fresh vision and decades of expertise, we're enhancing our services
            and strengthening our commitment to customer satisfaction.
          </p>

          {/* Button */}
          <WhiteBtn link="/about" text="Learn more"/>
        </div>
      </div>
    </section>
<TestimonialsSlider />
      {/* Testimonials Section */}
      <div className="flex py-[100px] flex-col items-center gap-[100px] self-stretch relative">
     

        {/* Benefits Section */}
        <div className="flex flex-col items-start gap-[68px] relative max-w-[1216px] mx-auto">
          {/* Nationwide Coverage */}
          <div className="flex w-full items-center gap-[64px] relative flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-start gap-[21px] flex-1 self-stretch relative">
              <h3 className="self-stretch text-[rgba(17,17,17,0.8)] font-lexend text-[48px] font-bold leading-[110%] tracking-[-2.88px] relative">
                Nationwide Claims Coverage
              </h3>
              <p className="self-stretch text-[rgba(16,16,16,0.6)] font-source-serif text-[24px] font-normal leading-[160%] tracking-[-0.48px] relative">
                Diamond Warranty offers extensive coverage across the U.S., with exceptions in Washington, Wyoming, Alaska, Hawaii, Louisiana, Minnesota, Utah, and Oklahoma. While Utah and Oklahoma are pending approval, repairs are still covered in these states, ensuring near-nationwide protection.
              </p>
            </div>
            <div className="flex w-[488px] h-[380px] flex-col justify-center items-center gap-[16px] flex-shrink-0 rounded-[16px] relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b787aede52143f4a83d0acb5b795a16f213abb0c?width=976" 
                alt="US Map showing coverage" 
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

          {/* Available in most states */}
          <div className="flex w-full items-center gap-[64px] relative flex-col lg:flex-row">
            <div className="flex w-[488px] h-[380px] px-[32px] py-[32px] flex-col justify-center items-center gap-[16px] flex-shrink-0 rounded-[16px] bg-gradient-to-b from-[rgba(0,25,153,0.05)] to-[rgba(0,25,153,0.05)] relative">
              {/* US Map with state highlighting would go here */}
              <div className="w-[380px] h-[246px] flex-shrink-0 relative bg-gradient-to-r from-[#1339FF] to-[#001999] rounded-lg flex items-center justify-center">
                <span className="text-white text-[48px] font-bold">US MAP</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-[21px] flex-1 self-stretch relative">
              <h3 className="self-stretch text-[rgba(17,17,17,0.8)] font-lexend text-[48px] font-bold leading-[110%] tracking-[-2.88px] relative">
                Available in most states
              </h3>
              <p className="self-stretch text-[rgba(16,16,16,0.6)] font-source-serif text-[24px] font-normal leading-[160%] tracking-[-0.48px] relative">
                Diamond Warranty offers extensive coverage across the U.S., with exceptions in Washington, Wyoming, Alaska, Hawaii, Louisiana, Minnesota, Utah, and Oklahoma. While Utah and Oklahoma are pending approval, repairs are still covered in these states, ensuring near-nationwide protection.
              </p>
            </div>
          </div>

          {/* $50M+ Claims */}
          <div className="flex w-full items-center gap-[64px] relative flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-start gap-[21px] flex-1 self-stretch relative">
              <h3 className="self-stretch text-[rgba(17,17,17,0.8)] font-lexend text-[48px] font-bold leading-[110%] tracking-[-2.88px] relative">
                $50,000,000+ Paid in Claims
              </h3>
              <p className="self-stretch text-[rgba(16,16,16,0.6)] font-source-serif text-[24px] font-normal leading-[160%] tracking-[-0.48px] relative">
                With over $20 million paid in claims, Diamond Warranty has a proven track record of delivering on our promises. Our fast, reliable service means you can trust us to be there when it matters most.
              </p>
            </div>
            <div className="flex w-[488px] h-[380px] px-[32px] py-[32px] flex-col justify-center items-center gap-[16px] flex-shrink-0 rounded-[16px] bg-gradient-to-b from-[rgba(0,25,153,0.05)] to-[rgba(0,25,153,0.05)] relative overflow-hidden">
              <div className="text-[#111] font-lexend text-[200px] font-bold leading-[110%] tracking-[-12px] opacity-5 absolute">
                $50M+
              </div>
              <div className="absolute text-[#111] font-lexend text-[100px] font-bold leading-[110%] tracking-[-6px] z-10">
                $50M+
              </div>
            </div>
          </div>

          {/* Since 2006 */}
          <div className="flex w-full items-center gap-[64px] relative flex-col lg:flex-row">
            <div className="flex w-[488px] h-[380px] px-[32px] py-[32px] flex-col justify-center items-center gap-[16px] flex-shrink-0 rounded-[16px] bg-gradient-to-b from-[rgba(0,25,153,0.05)] to-[rgba(0,25,153,0.05)] relative overflow-hidden">
              <div className="text-[#111] font-lexend text-[200px] font-bold leading-[110%] tracking-[-12px] opacity-5 absolute">
                2006
              </div>
              <div className="flex w-[234px] flex-col items-center gap-[10px] absolute z-10">
                <div className="w-[101.803px] h-[101.929px] bg-gradient-to-r from-[#1339FF] to-[#001999] rounded-full relative"></div>
                <div className="self-stretch text-[#111] text-center font-lexend text-[54px] font-bold leading-[90%] tracking-[-3.24px] uppercase relative">
                  Since<br/>2006
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-[21px] flex-1 self-stretch relative">
              <h3 className="self-stretch text-[rgba(17,17,17,0.8)] font-lexend text-[48px] font-bold leading-[110%] tracking-[-2.88px] relative">
                Reliability and Experience
              </h3>
              <p className="self-stretch text-[rgba(16,16,16,0.6)] font-source-serif text-[24px] font-normal leading-[160%] tracking-[-0.48px] relative">
                Since 2006, Diamond Warranty has been a trusted name in the extended warranty industry, relied on by thousands of clients for reliable protection. Our commitment to excellence ensures your vehicle is covered when you need it most.
              </p>
            </div>
          </div>

          {/* Fully Insured */}
          <div className="flex w-full items-center gap-[64px] relative flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-start gap-[21px] flex-1 self-stretch relative">
              <h3 className="self-stretch text-[rgba(17,17,17,0.8)] font-lexend text-[48px] font-bold leading-[110%] tracking-[-2.88px] relative">
                100% Fully Insured
              </h3>
              <p className="self-stretch text-[rgba(16,16,16,0.6)] font-source-serif text-[24px] font-normal leading-[160%] tracking-[-0.48px] relative">
                Diamond Warranty is fully insured by AmTrust Financial, one of the most trusted names in the industry. This ensures that your coverage is backed by a leading provider, protecting you dollar for dollar against insolvency and giving you confidence and peace of mind.
              </p>
            </div>
            <div className="flex w-[488px] h-[380px] px-[32px] py-[32px] flex-col justify-center items-center gap-[16px] flex-shrink-0 rounded-[16px] bg-gradient-to-b from-[rgba(0,25,153,0.05)] to-[rgba(0,25,153,0.05)] relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f30da9640553c50a6376fe4685f19afd923722bf?width=510" 
                alt="AmTrust" 
                className="w-[254.953px] h-[60px] flex-shrink-0 relative"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coverages Section */}
      <div className="flex flex-col items-start gap-[36px] relative mx-auto max-w-[1216px] mb-[100px] px-4">
        <h2 className="w-full max-w-[936px] text-[#111] font-lexend text-[64px] font-bold leading-[110%] tracking-[-3.84px] relative">
          Coverages tailored to your needs
        </h2>
        <p className="w-full max-w-[936px] text-[rgba(16,16,16,0.6)] font-source-serif text-[32px] font-normal leading-[160%] tracking-[-0.64px] relative">
          We provide a range of coverage options designed to meet the diverse needs of vehicles and drivers. Choose the plan that best fits your vehicle, and drive with confidence.
        </p>
        <div className="flex items-start gap-[36px] relative flex-wrap">
          <button className="flex px-[24px] py-[24px] justify-center items-center gap-[10px] rounded-[8px] border-2 border-[#1339FF] bg-[#1339FF] relative">
            <span className="text-white font-lexend text-[24px] font-bold leading-[90%] tracking-[-1.44px]">
              View our Coverages
            </span>
          </button>
          <button className="flex px-[24px] py-[24px] justify-center items-center gap-[10px] rounded-[8px] border-2 border-[#1339FF] relative">
            <span className="text-[#1339FF] font-lexend text-[24px] font-bold leading-[90%] tracking-[-1.44px]">
              Join as Dealer
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex px-[112px] py-0 flex-col items-start self-stretch relative">
        <div className="flex h-[120px] px-[64px] py-[20px] justify-between items-center self-stretch rounded-[16px] bg-[rgba(19,57,255,0.1)] relative">
          <div className="flex w-[435px] items-center gap-[12px] relative">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[40px] h-[40px] flex-shrink-0 relative"
            >
              <path d="M38.7092 16.4365H1.29089" stroke="#1339FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.0001 36.0365L1.29089 16.4384L8.41823 3.96387H31.5819L38.7091 16.4384L20.0001 36.0365Z" stroke="#1339FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.9818 16.4384L20 3.96387L28.0181 16.4384L20 36.0365L11.9818 16.4384Z" stroke="#1339FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.41797 3.96387L11.9816 16.4384" stroke="#1339FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M31.5819 3.96387L28.0182 16.4384" stroke="#1339FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#1339FF] font-lexend text-[28px] font-normal leading-[90%] tracking-[-1.12px] relative">
              Diamond Warranty
            </span>
          </div>
          <div className="flex w-[273px] px-[20px] py-[20px] justify-between items-center relative">
            <span className="text-[rgba(19,57,255,0.6)] text-right font-lexend text-[32px] font-light leading-[90%] tracking-[-1.28px] relative">
              PCI DSS Validated
            </span>
          </div>
        </div>
        <div className="flex px-0 py-[24px] justify-between items-start self-stretch relative flex-col md:flex-row gap-4">
          <div className="flex items-start gap-[16px] flex-1 relative flex-wrap">
            <span className="text-[rgba(96,96,96,0.6)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              1-800-384-5023
            </span>
            <span className="text-[rgba(96,96,96,0.2)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              /
            </span>
            <span className="text-[rgba(96,96,96,0.6)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              info@diamondwarrantycorp.com
            </span>
          </div>
          <div className="flex justify-end items-start gap-[16px] flex-1 relative flex-wrap">
            <span className="text-[rgba(96,96,96,0.6)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              Privacy Policy
            </span>
            <span className="text-[rgba(96,96,96,0.2)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              /
            </span>
            <span className="text-[rgba(96,96,96,0.6)] font-lexend text-[18px] font-normal leading-[90%] tracking-[-0.36px] relative">
              Terms and Conditions
            </span>
          </div>
        </div>
      </footer>
    </div>
   </div>
  );
};

export default DiamondWarrantyPage;
