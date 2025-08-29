import React from "react";

const benefitsData = [
  {
    id: 1,
    image: "/images/map1.webp",
    alt: "Nationwide Claims Coverage",
    title: "Nationwide Claims Coverage",
    description:
      "Diamond Warranty offers comprehensive claims coverage throughout the entire United States, providing you with peace of mind no matter where you are. Our network of service centers ensures that you receive support and repairs when you need them, maintaining consistent quality and reliability across the country.",
  },
  {
    id: 2,
    image: "/images/map2.webp",
    alt: "Available in Most States",
    title: "Available in Most States",
    description:
      "Our warranty plans are available in nearly every state, with some exceptions. While we cover repairs nationwide, you may not be able to purchase our warranty in certain states, such as Washington, Wyoming, Alaska, Hawaii, Louisiana, Minnesota, and currently pending approval in Utah and Oklahoma.",
  },
  {
    id: 3,
    image: "/images/50M.webp",
    alt: "$50,000,000+ Paid in Claims",
    title: "$50,000,000+ Paid in Claims",
    description:
      "With over $50 million paid in claims, Diamond Warranty has a proven track record of delivering on our promises. Our fast, reliable service means you can trust us to be there when it matters most.",
  },
  {
    id: 4,
    image: "/images/since2006.webp",
    alt: "Reliability and Experience",
    title: "Reliability and Experience",
    description:
      "Since 2006, Diamond Warranty has been a trusted name in the extended warranty industry, relied on by thousands of clients for reliable protection. Our commitment to excellence ensures your vehicle is covered when you need it most.",
  },
  {
    id: 5,
    image: "/images/ratted.png",
    alt: "100% Fully Insured",
    title: "100% Fully Insured",
    description:
      "Diamond Warranty is fully insured by AmTrust Financial, one of the most trusted names in the industry. This ensures that your coverage is backed by a leading provider, protecting you dollar for dollar against insolvency and giving you confidence and peace of mind.",
  },

];

const BenefitsSection = () => {
  return (
    <div className="flex flex-col gap-12">
      {benefitsData.map((item, index) => (
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
            <h3 className="inline-block font-lexend tracking-tighter text-3xl lg:text-4xl font-semibold text-gray/80">
              {item.title}
            </h3>
            <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
