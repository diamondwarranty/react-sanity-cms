import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import { UseTitle } from '../components/useTitle'


export default function TermsPage() {
  UseTitle("Terms and Conditions");

     const agreementPoints = [
    "Dealer agrees to follow the proper procedures issued by DWC on all Forms and Agreements supplied by DWC to the Dealer and to Fax / Email the completed Agreement forms to DWC at the time of sale without delay.",
    "Dealer agrees that eligible vehicles include only those vehicles that qualify under the DWC Dealer Guideline Procedures and the vehicle is in sound mechanical condition at the time of sale of the Agreement.",
    "Dealer agrees that any misrepresentation of facts by the Dealer to DWC for the purpose of securing or selling a DWC Service Contract / Warranty Agreement shall constitute a material breach of this Agreement.",
    "DWC has the sole right to reject any Warranty / Service Contract Agreement and return the same to the selling Dealer.",
    "Dealer agrees to market DWC Service Contracts / Warranties to each purchaser of qualified new or pre-owned vehicles sold by His / Her Dealership.",
    "The DWC Dealer Guidelines determine which vehicles are eligible for a Warranty / Service Contract Agreement. Any violation of the DWC Guideline Program Procedures by the Dealer will result in the denial of coverage for the ineligible vehicle. Denied coverage shall be the sole responsibility of the Dealer.",
    "Dealer agrees to refund the purchaser of the Service / Warranty the Dealers retained portion (profit) of the Service Contract cost on a pro-rated basis in the event of a cancellation and refund of the Agreement at the request of DWC due to total loss or repossession of the vehicle covered under the Vehicle Warranty / Service Contract Agreement or by mandated State Laws.",
    "IN WITNESS WHERETO, the parties hereto have executed this Agreement on the Date by their signatures below. Dealer agrees He / She has read, any questions have been explained and Dealer fully understands the DWC Procedures and Dealer's obligations listed by His / Her initials of this agreement prior to the signing of this Agreement."
  ];
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
      Terms and Conditions
        </h1>
        
              
             
            
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
              </div>
            </div>
          </div>
        </section>

 <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="flex flex-col gap-8 max-w-[800px]">
        {agreementPoints.map((point, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>


 
        <FooterSection/>
        </div>
        </div>
  )
}
