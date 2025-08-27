import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1200px] mx-auto ">
      {/* Top Bar */}
      <div className="text-sm py-3 lg:py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-2 lg:gap-4 font-medium">
            <Link
              to="/contact"
              className=" text-gray-400 hover:text-gray-600 transition sm:hidden"
            >
              Contact
            </Link>
            <Link
              to="tel:1-800-384-5023"
              className="hidden sm:inline text-gray-400 hover:text-gray-600 transition"
            >
              1-800-384-5023
            </Link>
            <span className="hidden sm:inline text-gray-200">/</span>
            <Link
              to="mailto:info@diamondwarrantycorp.com"
              className="hidden sm:inline  text-gray-400 hover:text-gray-600 transition"
            >
              info@diamondwarrantycorp.com
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 font-medium">
            <Link
              to="/claim"
              className="whitespace-nowrap text-gray-400 hover:text-gray-600 transition"
            >
              Start a claim
            </Link>
            <span className="text-gray-200">/</span>
            <Link
              to="https://portal.diamondwarrantycorp.com"
              className="whitespace-nowrap text-gray-400 hover:text-gray-600 transition"
            >
              Dealer login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full md:h-[80px] lg:h-[100px] text-white bg-gradient-to-r from-[#1339FF] to-[#001999] rounded-2xl">
        <nav className="h-full flex justify-between items-center py-4 px-6 md:px-8 lg:px-12">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-white transition-all duration-100 active:scale-[0.98] focus:scale-100"
          >
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
            <div className="text-xl lg:text-2xl font-medium tracking-tighter leading-none">
              Diamond Warranty
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {[
              ["Products", "/products"],
              ["About", "/about"],
              ["FAQ", "/faq"],
              ["Dealers", "/dealers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="text-base font-medium lg:text-xl tracking-tight text-white transition-all duration-100 active:scale-[0.98] focus:scale-100 opacity-60 hover:opacity-100"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-2">
            {[
              ["Products", "/products"],
              ["About", "/about"],
              ["FAQ", "/faq"],
              ["Dealers", "/dealers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="block py-2 bg-white/10 text-white p-3 mb-2 hover:bg-white/20 rounded-md"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
