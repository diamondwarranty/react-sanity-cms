import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../client';

const FooterSection = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Sanity
  useEffect(() => {
    const query = `*[_type == "footerSection"][0]{
      logoText,
      logoLink,
      rightText,
      disclaimer,
      copyright,
      links[]{
        text,
        url
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setFooterData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Sanity data:', err);
        setError('Failed to load footer data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!footerData) return null;

  return (
    <div className="w-full bg-white mt-section mb-12">
      <footer className="font-lexend mx-auto">
        {/* Top Bar */}
        <div className="w-full md:h-[80px] lg:h-[120px] text-white bg-[#1339ff1a] rounded-2xl">
          <nav className="h-full flex flex-col md:flex-row justify-between items-center gap-2 py-4 px-6 md:px-8 lg:px-12">
            {/* Logo + Text */}
            <Link to={footerData.logoLink} className="flex items-center text-[#1339FF]">
              <div className="size-6 md:size-9 mr-2 lg:mr-3 -mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.667"
                    d="M38.71 16.436H1.29M20 36.036 1.29 16.438 8.419 3.964h23.164l7.127 12.474L20 36.036Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.667"
                    d="M11.982 16.438 20 3.964l8.018 12.474L20 36.036l-8.018-19.598ZM8.418 3.964l3.564 12.474M31.582 3.964l-3.564 12.474"
                  ></path>
                </svg>
              </div>
              <div className="text-xl text-[#1339FF] lg:text-2xl font-regular tracking-tighter leading-none">
                {footerData.logoText}
              </div>
            </Link>

            {/* Right Text */}
            <p className="text-[#1339ff80] text-xl lg:text-2xl font-light tracking-tighter leading-none">
              {footerData.rightText}
            </p>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="py-4 lg:py-8 text-[10px] lg:text-xs text-center text-gray/40">
          <p>{footerData.disclaimer}</p>
        </div>

        {/* Bottom Links */}
        <div className="text-sm py-4 lg:py-8 border-t border-gray/10">
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center">
            <div className="flex items-center">
              <p className="text-gray/40">{footerData.copyright}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              {footerData.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="whitespace-nowrap text-gray/40 hover:text-gray/60 transition"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
