import React from 'react'
import FooterSection from '../components/FooterSection'
import BottomSection from '../components/BottomSection'
import Header from '../components/Header'
import StickyHeader from '../components/StickyHeader'
import BlueBtn from '../components/BlueBtn'
import WhiteBtn from '../components/WhiteBtn'
import ProductCard from '../components/ProductCard'
import DownloadForms from '../components/DownloadForms'


  const faqs = [
    {
      question: "Why choose Diamond Warranty?",
      answer:
        "With over 18 years of industry experience, we know exactly what dealerships and their customers need from a warranty company. Our deep understanding allows us to deliver the reliable coverage and support you expect.",
    },
    {
      question: "When can I use my warranty?",
      answer:
        "All of our protection plans begin on day one, mile one of your warranty purchase date with the exception of our 5 Yr/100,000 Mile Powertrain Plus program which begins 30 Days or 1,000 Miles after the purchase date; and our Exclusionary (factory wrap) program which becomes active once the original manufacturer's warranty expires.",
    },
    {
      question: "What does my warranty cover?",
      answer:
        'We believe that doing the right thing is always the right thing to do. All of our warranties are written as "stated covered component" contracts. Meaning, if a component is listed on your contract as a part of your coverage - then it\'s covered.',
    },
    {
      question: 'My dealership said this warranty was "bumper to bumper". Is that true?',
      answer:
        "We hear this everyday from customers across the country. The number one issue we face as a warranty company is our product(s) being misrepresented by selling dealerships. Sometimes customers are told they are purchasing a better coverage than what they are actually being sold by someone in a selling dealership. Unless you purchased a Diamond Warranty Exclusionary (factory wrap) protection plan, there is a good chance you do not have a 'bumper to bumper' warranty. If you would like more information on what your warranty covers, feel free to send us an email or call anytime and we would be happy to assist you.",
    },
  ];

export default function FaqPage() {
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
      FAQ
        </h1>
        
              
              {/* Description */}
              <p className="max-w-[600px] lg:mx-0 mx-auto  tracking-tight text-xl lg:text-2xl leading-[160%] font-source-serif text-[rgba(16,16,16,0.6)]">
            Browse through the topics below to find the information you need. If you still have questions, don’t hesitate to contact us directly for personalized assistance.
              </p>
              
            
            
            </div>
        
            {/* Image */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[calc(100%-600px)]">
              <div className="relative w-full">
                <img
                  src="/images/hero-diamond.png"
                  alt="  FAQ"
                  className="absolute inset-0 w-full h-full object-contain "
                  loading="eager"
                 
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>


 <section className="mb-section">
      <div className="max-w-[800px]">
        {faqs.map((faq, idx) => (
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




 <section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
         <h2 className="inline-block tracking-tighter text-4xl  lg:text-6xl font-lexend font-bold  pb-4 text-transparent bg-clip-text bg-gradient-to-r  from-[#1339FF] to-[#001999]">
Still Have Questions?
</h2>


          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
        We’re here to assist you. Reach out for more information, or explore how you can join us as a dealer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
            <WhiteBtn link="/contact" text="Contact us"/>
       <BlueBtn link="/dealers" text="Join as a dealer"/>
          </div>
        </div>
      </div>
      </section>
        <FooterSection/>
        </div>
        </div>
  )
}
