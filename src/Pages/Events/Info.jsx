import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TechSrijanPage = () => {
  const [activeDay, setActiveDay] = useState('Day 1');
  const [showFullTimeline, setShowFullTimeline] = useState(false);

  const navigate  = useNavigate();

  const timelineData = {
    'Day 1': [
      { time: '10:00 AM', title: 'Opening Ceremony', description: 'Kick off the event with an amazing opening.' },
      { time: '11:00 AM', title: 'Coding Contest', description: 'Show your coding skills in a competitive environment.' },
      { time: '1:00 PM', title: 'Robotics Workshop', description: 'Learn the basics of robotics and automation.' },
      { time: '3:00 PM', title: 'Tech Talk', description: 'Industry leaders share their experiences in tech.' },
      { time: '5:00 PM', title: 'Day 1 Closing Ceremony', description: 'Awards and closing speeches for Day 1.' },
    ],
    'Day 2': [
      { time: '10:00 AM', title: 'AI Workshop', description: 'Learn about Artificial Intelligence and its applications.' },
      { time: '12:00 PM', title: 'Cybersecurity Seminar', description: 'An introduction to the world of cybersecurity.' },
      { time: '2:00 PM', title: 'Hackathon Begins', description: 'A 24-hour coding competition.' },
      { time: '4:00 PM', title: 'Gaming Tournament', description: 'Compete in popular video games and win exciting prizes.' },
      { time: '6:00 PM', title: 'Day 2 Closing Ceremony', description: 'Highlights of Day 2 and announcements.' },
    ],
    'Day 3': [
      { time: '10:00 AM', title: 'Robo Race', description: 'Race your robots in a thrilling competition.' },
      { time: '12:00 PM', title: 'Blockchain Workshop', description: 'An introduction to blockchain technology.' },
      { time: '2:00 PM', title: 'Hackathon Continues', description: 'Participants continue working on their projects.' },
      { time: '5:00 PM', title: 'Hackathon Awards', description: 'Presentation of awards for the best projects.' },
      { time: '6:00 PM', title: 'Closing Ceremony', description: 'Fest highlights and the official closing ceremony.' },
    ],
  };

  const handleTabChange = (day) => {
    setActiveDay(day);
    setShowFullTimeline(false); // Reset to show partial timeline on tab change
  };

  const toggleFullTimeline = () => {
    setShowFullTimeline(!showFullTimeline);
  };

  const renderTimeline = (day) => {
    return (
      <div className="relative border-l-4 border-blue-600">
        {timelineData[day].map((event, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border-white border"></div>
            <p className="text-gray-600 text-sm">{event.time}</p>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-4xl font-bold text-center">TechSrijan</h1>
        <p className="text-center text-xl mt-2">The Ultimate Tech Fest</p>
      </header>

      {/* Tabs for Each Day */}
      <div className="tabs flex justify-center mt-6 space-x-4">
        <button
          className={`py-2 px-4 rounded-lg border transition-colors ${
            activeDay === 'Day 1' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('Day 1')}
        >
          Day 1
        </button>
        <button
          className={`py-2 px-4 rounded-lg border transition-colors ${
            activeDay === 'Day 2' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('Day 2')}
        >
          Day 2
        </button>
        <button
          className={`py-2 px-4 rounded-lg border transition-colors ${
            activeDay === 'Day 3' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('Day 3')}
        >
          Day 3
        </button>
      </div>

      {/* Timeline Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Event Timeline - {activeDay}</h2>
        <div className="container mx-auto">
          {/* If full timeline is shown, show all 3 days, otherwise show selected day's timeline */}
          {showFullTimeline ? (
            <>
              {renderTimeline('Day 1')}
              {renderTimeline('Day 2')}
              {renderTimeline('Day 3')}
            </>
          ) : (
            renderTimeline(activeDay)
          )}

          {/* Button to View Full Timeline */}
          <div className="flex justify-center mt-6">
            <button
              className="py-2 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
              onClick={toggleFullTimeline}
            >
              {showFullTimeline ? 'Hide Full Timeline' : 'View Full Timeline'}
            </button>
          </div>
        </div>
      </section>

      {/* TechSrijan Events Section */}
      
      <section className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Events Under TechSrijan</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
         
          <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-blue-700">Robo Race</h3>
            <p className="text-gray-600 mt-2">Build and race your robots.</p>
          </div>
          <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-blue-700">Gaming Tournament</h3>
            <p className="text-gray-600 mt-2">Compete in popular games and win exciting prizes.</p>
          </div>
          <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-blue-700">AI Workshop</h3>
            <p className="text-gray-600 mt-2">Get hands-on experience with artificial intelligence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSrijanPage;

