import React from "react";

const GlowingCircle = () => {
  return (
    <div className="flex items-center justify-center gap-16 sm:gap-60 p-4 2xl:gap-80 ">
      {/* First Circle */}
      <div className="relative flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#6d6a6a] rounded-full shadow-custom">
        <div className="absolute w-full h-full bg-[#b9adad] rounded-full animate-glow"></div>
        <p className="z-10 text-white text-xs sm:text-sm">Glow</p>
      </div>

      {/* Second Circle */}
      <div className="relative flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#6d6a6a] rounded-full shadow-custom">
        <div className="absolute w-full h-full bg-[#b9adad] rounded-full animate-glow"></div>
        <p className="z-10 text-white text-xs sm:text-sm">Glow</p>
      </div>

      {/* Third Circle */}
      <div className="relative flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#6d6a6a] rounded-full shadow-custom">
        <div className="absolute w-full h-full bg-[#b9adad] rounded-full animate-glow"></div>
        <p className="z-10 text-white text-xs sm:text-sm">Glow</p>
      </div>

      {/* Fourth Circle - Hidden on Small Screens */}
      <div className="relative hidden sm:flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#6d6a6a] rounded-full shadow-custom">
        <div className="absolute w-full h-full bg-[#b9adad] rounded-full animate-glow"></div>
        <p className="z-10 text-white text-xs sm:text-sm">Glow</p>
      </div>
    </div>
  );
};

export default GlowingCircle;
