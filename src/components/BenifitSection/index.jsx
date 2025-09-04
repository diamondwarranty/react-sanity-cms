import React from "react";
import client from "../../client";
import { useState } from "react";
import { useEffect } from "react";

const BenefitsSection = () => {
  const [benefitsData, setBenefitsData] = useState([]);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const query = `*[_type == "benefitsSection"][0]{
          sectionHeading,
          benefits[]{
            _key,
            image{
              asset->{
                _id,
                url
              }
            },
            alt,
            title,
            description
          }
        }`;

        const data = await client.fetch(query);

        const formattedBenefits = data?.benefits.map((item) => ({
          id: item._key,
          image: item.image?.asset?.url,
          alt: item.alt,
          title: item.title,
          description: item.description,
        }));

        setBenefitsData(formattedBenefits || []);
      } catch (error) {
        console.error("Error fetching benefits data:", error);
      }
    };

    fetchBenefits();
  }, []);
  if (benefitsData.length === 0) {
    return <div>Loading...</div>;
  }
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
