import React from 'react'
import WhiteBtn from '../WhiteBtn'
import BlueBtn from '../BlueBtn'
import client from '../../client';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BottomSection() {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Sanity
  useEffect(() => {
    const query = `*[_type == "bottomSection"][0]{
      title,
      description,
      buttons[]{
        text,
        link,
        style
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setSectionData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Sanity data:', err);
        setError('Failed to load section data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!sectionData) return null;
  return (
<section className="lg:my-[96px] md:my-[64px] my-[32px]">
      <div className="border-t-2 border-secondary/5 pt-[96px]">
        <div className="max-w-[700px] lg:ml-28">
          {/* Heading */}
          <h2 className="inline-block tracking-tighter text-4xl lg:text-6xl font-lexend font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1339FF] to-[#001999]">
            {sectionData.title}
          </h2>

          {/* Paragraph */}
          <p className="tracking-tight text-xl lg:text-2xl leading-relaxed lg:leading-relaxed font-serif text-gray/60 mb-8 text-balance">
            {sectionData.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
            {sectionData.buttons.map((button, index) => (
              button.style === 'blue' ? (
                <BlueBtn key={index} link={button.link} text={button.text} />
              ) : (
                <WhiteBtn key={index} link={button.link} text={button.text} />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
