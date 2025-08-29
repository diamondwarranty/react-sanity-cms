import React from "react";

const Since2006 = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full rounded-xl overflow-hidden">
      {/* Background year text */}
      <div className="since-2006-bg-year text-[40px] sm:text-[60px] md:text-[80px] leading-none">
        CARRIER
      </div>

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
  );
};

export default Since2006;
