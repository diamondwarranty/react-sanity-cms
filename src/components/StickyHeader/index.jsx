import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StickyHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) {
      // past 100px → show header
      setShowHeader(true);
    } else {
      // back to top (< 100px) → hide header
      setShowHeader(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div
      id="stickyHeader"
      className={`hidden lg:block w-full fixed top-0 left-0 z-50 transition-transform duration-300 transform pt-4 px-4 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full h-full mx-auto flex justify-between items-center bg-white backdrop-blur-md  ring-1 ring-gray-200 rounded-xl p-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-[#1339FF] transition-all duration-100 active:scale-[0.98] focus:scale-100"
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
          <div className="text-xl lg:text-2xl font-regular tracking-tighter leading-none">
            Diamond Warranty
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {["Products", "About", "FAQ", "Dealers", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-base lg:text-xl tracking-tight text-gray-600 transition-all duration-100 active:scale-[0.98] focus:scale-100 opacity-60 hover:opacity-100"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" id="menuToggle">
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
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}
