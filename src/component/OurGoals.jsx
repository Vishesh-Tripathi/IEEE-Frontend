import React from 'react'

function OurGoals() {
  return (
    // <div>OurGoals</div>
    <>
    <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl pl-12 font-bold mt-2'> 
        <span className='text-cyan-400 pl-8'>Our </span>
        <span className='text-white '>Goals </span>
    </div>
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row items-center md:items-start ">
        {/* Left: Paragraph Section */}
        <div className="md:w-[700px] w-full mb-4 md:mb-0 bg-[rgba(101,107,108,0.79)] rounded-xl shadow-lg p-4 sm:p-4  text-base sm:text-[18px]   mt-6 ml-8">
          <p className="text-lg  text-white ">
       <h1 className='text-2xl text-red-500'>IEEEXplore</h1>
The IEEE Xplore digital library is your gateway to trusted research—journals, conferences, standards, ebooks, and educational courses—with approximately 5 million documents to help you fuel imagination, build from previous research, and inspire new ideas.

Explore More
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/4 w-full ml-3 mt-6">
          <img 
            src="https://vishesh-tripathi.github.io/IEEE_SB_MMMUT-landing-Page/ieee-xplore-template-header4_2x.jpg"
            alt="Sample" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row items-center md:items-start ">
        {/* Left: Paragraph Section */}
        <div className="md:w-[700px] w-full mb-4 md:mb-0 bg-[rgba(101,107,108,0.79)] rounded-xl shadow-lg p-4 sm:p-4  text-base sm:text-[18px]    ml-8">
          <p className="text-lg  text-white ">
       <h1 className='text-2xl text-red-500'>Innovation</h1>
       Homes and buildings make up a significant portion of energy use. New research shows gamification can encourage energy-saving behaviors in smart homes.By the end of 2023, reports estimate the world will have over 16.7 billion connected Internet of Things (IoT) devices. This means there will be a tremendous amount of potentially vulnerable targets if they are not properly protected
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/4 w-full ml-3 ">
          <img  className='rounded-lg '
            src="https://vishesh-tripathi.github.io/IEEE_SB_MMMUT-landing-Page/ieee-xplore-template-header4_2x.jpg"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row items-center md:items-start ">
        {/* Left: Paragraph Section */}
        <div className="md:w-[700px] w-full mb-4 md:mb-0 bg-[rgba(101,107,108,0.79)] rounded-xl shadow-lg p-4 sm:p-4  text-base sm:text-[18px]    ml-8">
          <p className="text-lg  text-white ">
       <h1 className='text-2xl text-red-500'>Technology</h1>
       Homes and buildings make up a significant portion of energy use. New research shows gamification can encourage energy-saving behaviors in smart homes.By the end of 2023, reports estimate the world will have over 16.7 billion connected Internet of Things (IoT) devices. This means there will be a tremendous amount of potentially vulnerable targets if they are not properly protected
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/4 w-full ml-3 ">
          <img  className='rounded-lg '
            src="https://vishesh-tripathi.github.io/IEEE_SB_MMMUT-landing-Page/ieee-xplore-template-header4_2x.jpg"
          />
        </div>
      </div>
    </div>

    </>
  )
}

export default OurGoals