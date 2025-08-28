import React from "react";

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
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="w-full h-[140px] p-5 bg-white/50 border border-secondary/20 rounded-lg"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full mx-auto object-contain"
            loading="lazy"
            width={logo.width}
            height={logo.height}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
