import React from "react";
import ai from "../../assets/ai.png";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-52  py-10 px-5 md:px-20">
      {/* Left Section */}
      <div className="flex-1 sm:m-16 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
         <span className="sm:m-32"> Welcome</span> <br /><span className="sm:ml-48">To</span> <br /> <span>IEEE-SB || MMMUT</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <img
          src={ai}
          alt="IEEE-SB || MMMUT"
          className="sm:w-[450px] h-auto object-cover rounded-lg  hover:scale-125 hover:filter hover:hue-rotate-90  hover:transition-transform hover:duration-1000 hover:ease-out transition-transform duration-1000 ease-out "
        />
      </div>
    </div>
  );
};

export default Hero;
