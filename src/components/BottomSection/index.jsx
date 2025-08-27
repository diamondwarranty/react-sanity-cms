import React from 'react'
import WhiteBtn from '../WhiteBtn'
import BlueBtn from '../BlueBtn'

export default function BottomSection() {
  return (
    <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
         <h2 className="inline-block tracking-tighter text-4xl  lg:text-6xl font-lexend font-bold  pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
   Coverage Options for Every Driver’s Needs 
</h2>


          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
            We provide a range of coverage options designed to meet the diverse
            needs of vehicles and drivers. Choose the plan that best fits your
            vehicle, and drive with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
            <BlueBtn link="/products" text="View our coverages"/>
       <WhiteBtn link="/dealers" text="Join as a dealer"/>
          </div>
        </div>
      </div>
      </section>
  )
}
