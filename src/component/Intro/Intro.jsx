import React from 'react';

function Intro() {
  return (
    <div className="p-4 md:p-16">
      {/* Responsive Heading */}
      <h1 className="flex font-bold justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-2 text-center">
        <span>
          <span className="text-cyan-400">I</span>nstitute of{' '}
          <span className="text-cyan-400">E</span>lectrical and{' '}
          <span className="text-cyan-400">E</span>lectronics{' '}
          <span className="text-cyan-400">E</span>ngineers
        </span>
      </h1>

      {/* Responsive Content Box with Glassy Effect */}
      <div className="bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 text-base sm:text-lg md:text-xl lg:text-2xl  mt-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum impedit esse nemo ab recusandae
          laborum accusamus et. Minus, dignissimos, nisi exercitationem cumque dolor odio voluptatum autem quibusdam
          similique repellat, iure veritatis.
        </p>
      </div>
    </div>
  );
}

export default Intro;
