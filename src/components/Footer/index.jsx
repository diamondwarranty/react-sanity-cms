import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white mt-section mb-12">
      <footer className=" font-lexend mx-auto">
        {/* Top Bar */}
        <div className="w-full md:h-[80px] lg:h-[120px] text-white bg-[#1339ff1a] rounded-2xl">
          <nav className="h-full flex flex-col md:flex-row justify-between items-center gap-2 py-4 px-6 md:px-8 lg:px-12">
            {/* Logo + Text */}
            <a href="/" className="flex items-center text-[#1339FF]">
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
                Diamond Warranty
              </div>
            </a>

            {/* Right Text */}
            <p className="text-[#1339ff80] text-xl lg:text-2xl font-light tracking-tighter leading-none">
              PCI DSS Validated
            </p>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="py-4 lg:py-8 text-[10px] lg:text-xs text-center text-gray/40">
          <p>
            This website and associated marketing materials that link to this
            website may use the terms "Warranty", "Extended Warranty", "After
            Market Warranty", "Vehicle Service Contract", "Vehicle Protection
            Plan" and "Used Car Warranty" for marketing purposes only. However,
            per definition, automobile manufacturers are the only organizations
            that can offer extended car warranties. All other sellers offer
            Vehicle Service Contracts (VSCs). Diamond Warranty provides
            mechanical repair coverage for your vehicle after the manufacturer's
            warranty has expired. Specific Vehicle Service Contract coverage
            differs depending upon the service contract purchased. Not available
            in all states. Vehicle names, logos, brands, and other trademarks
            associated with Diamond Warranty are property of their respective
            trademark holders. Diamond Warranty is a nationwide Vehicle Service
            Contract administrators.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="text-sm py-4 lg:py-8 border-t border-gray/10">
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center">
            <div className="flex items-center">
              <p className="text-gray/40">© Diamond Warranty Corp.</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <a
                href="/terms"
                className="whitespace-nowrap text-gray/40 hover:text-gray/60 transition"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
