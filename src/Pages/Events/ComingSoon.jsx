import add from '../../assets/add.mp4';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillMuted } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";


const ComingSoon = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 1000); // Adjust the duration for zoom in/out

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef} // Set the ref to the video element
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={add} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Coming Soon Text */}
      <h1
        className={`text-6xl font-bold text-white transition-transform duration-500 ${isZoomed ? 'scale-110' : 'scale-100'}`}
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        Coming Soon!
      </h1>

      {/* Sound Control Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow"
      >
        {videoRef.current?.muted ? <AiFillMuted /> : <FaVolumeMute />}
      </button>
    </div>
  );
};

export default ComingSoon;
