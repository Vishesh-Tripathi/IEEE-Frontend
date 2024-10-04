import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CardGrid = () => {
  const [cards, setCards] = useState([]); // Initialize cards state as an empty array
  const [loading, setLoading] = useState(true); // State for loading indication

  // Fetch events (cards) from the backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/events');
      console.log(response.data); // Log response data to ensure you're getting the right structure
      setCards(response.data); // Set the fetched data to cards
      setLoading(false); // Set loading to false after data is loaded
    } catch (error) {
      console.error('Error fetching cards:', error);
      setLoading(false);
    }
  };

  // Conditional rendering while loading
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>; // Simple loading spinner
  }

  return (
    <>
    <div className=' flex items-center justify-center mt-4'>

      <h1 className=' text-5xl text-cyan-400 '>Our Main Events</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
      {cards.length > 0 && cards.map((card, index) => {
        // console.log(card); // Debug to see each card object
        return (
          <Link to={'/coming-soon'} key={card._id} className="relative group cursor-pointer">
            {/* Background Image */}
            <div
              className="bg-cover bg-center h-64 rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out rounded-lg"></div>
            </div>

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-bold text-gray-900">{card.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default CardGrid;
