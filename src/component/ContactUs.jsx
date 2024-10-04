import React from "react";

const LandingPage = () => {
  return (
    <div className="landing_page relative ">
      <div className="relative flex flex-wrap justify-start w-full p-0 mx-auto mt-0 mb-0">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"
          alt="Background"
        /> */}
        <div className="relative flex flex-wrap justify-start max-w-screen-xl mx-auto mt-16 mb-16 ">
          <div className="flex items-center justify-start w-full p-0 md:w-6/12">
            <div className="content-box text-white">
              <p className="text-blk text-4xl font-extrabold leading-tight mb-4">
                Lorem ipsum amet dolor
              </p>
              <p className="text-blk text-lg text-gray-400 mb-12 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis volupta
              </p>
              <div className="flex justify-evenly max-w-xs">
                <a href="#twitter" className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a href="#facebook" className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a href="#google" className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                    alt="Google"
                  />
                </a>
                <a href="#instagram" className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-6/12 ">
            <form className="form-box bg-gray-900 text-white p-8 max-w-lg border-[0.5px]">
              <p className="text-blk text-3xl leading-tight mb-4">Get a quote</p>
              <p className="text-blk text-gray-400 mb-6">
                We will get back to you in 24 hours
              </p>
              <div className="w-full">
                <div className="w-full mb-4">
                  <input
                    className="input w-80 h-12 bg-gray-800 text-lg p-4 rounded border border-gray-600"
                    name="FirstName"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className="w-80 mb-4">
                  <input
                    className="input w-80 h-12 bg-gray-800 text-lg p-4 rounded border border-gray-600"
                    name="LastName"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
                <div className="w-full mb-4 md:w-6/12 pr-2">
                  <input
                    className="input w-80 h-12 bg-gray-800 text-lg p-4 rounded border border-gray-600"
                    name="Email"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="w-full md:w-6/12">
                  <input
                    className="input w-80 h-12 bg-gray-800 text-lg p-4 rounded border border-gray-600"
                    name="PhoneNumber"
                    placeholder="Phone Number"
                    type="tel"
                  />
                </div>
                <div className="w-80 mb-4 pt-4">
                  <textarea
                    className="w-full h-40 bg-gray-800 text-lg p-4 rounded border border-gray-600"
                    placeholder="Type message here"
                    name="Message"
                  />
                </div>
              </div>
              <button
                className="submit-btn w-full h-14 bg-green-700 text-white font-semibold rounded"
                type="submit"
              >
                Get quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
