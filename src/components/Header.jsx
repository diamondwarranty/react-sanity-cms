import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-[10]">
      <div className="flex h-[120px] px-16 py-[43px] justify-between items-center rounded-2xl bg-gradient-to-r from-[#1339FF] via-[rgba(19,57,255,0.5)] to-[#001640] relative overflow-hidden">
        {/* Logo Section */}
        <div className="flex w-[435px] items-center gap-3 relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 flex-shrink-0"
          >
            <path d="M38.7092 16.4365H1.29089" stroke="white" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.0001 36.0364L1.29089 16.4382L8.41823 3.96375H31.5819L38.7091 16.4382L20.0001 36.0364Z" stroke="white" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9818 16.4382L20 3.96375L28.0181 16.4382L20 36.0364L11.9818 16.4382Z" stroke="white" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.41797 3.96375L11.9816 16.4382" stroke="white" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.5819 3.96375L28.0182 16.4382" stroke="white" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="text-white font-lexend text-[28px] font-normal leading-[90%] tracking-[-1.12px]">
            Diamond Warranty
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#products" className="text-white/45 font-lexend text-2xl font-normal leading-[90%] tracking-[-0.96px] hover:text-white transition-colors">
            Products
          </a>
          <a href="#about" className="text-white/45 font-lexend text-2xl font-normal leading-[90%] tracking-[-0.96px] hover:text-white transition-colors">
            About
          </a>
          <a href="#faq" className="text-white/45 font-lexend text-2xl font-normal leading-[90%] tracking-[-0.96px] hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#dealers" className="text-white/45 font-lexend text-2xl font-normal leading-[90%] tracking-[-0.96px] hover:text-white transition-colors">
            Dealers
          </a>
          <a href="#contact" className="text-white/45 font-lexend text-2xl font-normal leading-[90%] tracking-[-0.96px] hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl bg-gradient-to-r from-[#1339FF] via-[rgba(19,57,255,0.9)] to-[#001640] overflow-hidden">
          <div className="px-8 py-6 space-y-4">
            <a href="#products" className="block text-white/45 font-lexend text-xl font-normal leading-[90%] tracking-[-0.8px] hover:text-white transition-colors py-2">
              Products
            </a>
            <a href="#about" className="block text-white/45 font-lexend text-xl font-normal leading-[90%] tracking-[-0.8px] hover:text-white transition-colors py-2">
              About
            </a>
            <a href="#faq" className="block text-white/45 font-lexend text-xl font-normal leading-[90%] tracking-[-0.8px] hover:text-white transition-colors py-2">
              FAQ
            </a>
            <a href="#dealers" className="block text-white/45 font-lexend text-xl font-normal leading-[90%] tracking-[-0.8px] hover:text-white transition-colors py-2">
              Dealers
            </a>
            <a href="#contact" className="block text-white/45 font-lexend text-xl font-normal leading-[90%] tracking-[-0.8px] hover:text-white transition-colors py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
