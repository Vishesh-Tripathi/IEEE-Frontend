import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const images = location.state?.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-2xl text-gray-600">No images to display</p>
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
        onClick={() => navigate("/")}
      >
        &times;
      </button>

      {/* Full-Screen Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Left Arrow */}
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 px-4 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-24 h-16 rounded-lg bg-cover bg-center cursor-pointer transition-transform duration-300 ${
              currentIndex === index
                ? "border-4 border-white transform scale-110"
                : "border-2 border-gray-300"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
