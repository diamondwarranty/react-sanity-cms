import React from "react";
import Since2006 from "../Since2006";

const LogoSection = () => {
  const logos = [
    {
      src: "/images/automatic.webp",
      alt: "Automatic",
      width: 270,
      height: 36,
    },
    {
      src: "/images/DAC.png",
      alt: "AmTrust",
      width: 270,
      height: 36,
    },
  ];

  return (
    <div className="w-full min-h-[300px] flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center p-10 lg:px-24 bg-secondary/5 rounded-2xl lg:my-[96px] md:my-[64px] my-[32px]">
      
        <div
          
          className="w-full h-[140px] p-5 bg-white/50 border border-secondary/20 rounded-lg"
        >
          <img
           src= "/images/automatic.webp"
      alt= "Automatic"
      width= "270"
      height= "36"
            className="h-full mx-auto object-contain"
            loading="lazy"
           
            decoding="async"
          />
        </div>
     <div className="w-full h-[140px] p-5 bg-white/50 border border-secondary/20 rounded-lg flex items-center justify-center">
  <div className="relative flex flex-col justify-center items-center w-full h-full rounded-xl overflow-hidden">
      {/* Background year text */}
      {/* <div className="since-2006-bg-year text-[40px] sm:text-[60px] md:text-[80px] leading-none">
        CARRIER
      </div> */}

      {/* Content container */}
      <div className="relative flex flex-col items-center gap-1 z-10">
        {/* Main Text */}
        <h2 className="text-center font-lexend font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999] text-2xl
        md:text-4xl">
          A RATED
          <br />
          CARRIER
        </h2>
      </div>
    </div>
</div>

     
    </div>
  );
};

export default LogoSection;
