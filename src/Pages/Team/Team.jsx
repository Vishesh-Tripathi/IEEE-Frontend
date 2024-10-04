import axios from "axios";
import React, { useEffect, useState } from "react";

const InstructorCard = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/teams');
      setInstructors(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  // Hardcoded Faculty Advisor profile
  const facultyAdvisor = {
    id: 1,
    name: "Rajan Mishra",
    position: "Faculty Advisor",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG0BG6qtZG8kg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688828967198?e=1732752000&v=beta&t=A8H5vPFeA6cJEFRyRyDnmkQpfHW-RzgrTy_AE_VFgkw", // Replace with an actual image URL
    socialLinks: {
      twitter: "https://twitter.com/facultyadvisor",
      facebook: "https://facebook.com/facultyadvisor",
      instagram: "https://instagram.com/facultyadvisor",
      email: "mailto:facultyadvisor@example.com"
    }
  };

  // Hardcoded Instructor profiles
  const hardcodedInstructors = [
    {
      id: 2,
      name: "Akash Pandey",
      position: "Student-Chair",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG0BG6qtZG8kg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688828967198?e=1732752000&v=beta&t=A8H5vPFeA6cJEFRyRyDnmkQpfHW-RzgrTy_AE_VFgkw", // Replace with actual image URL
      socialLinks: {
        twitter: "https://twitter.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        email: "mailto:janesmith@example.com"
      }
    },
    {
      id: 3,
      name: "Antrali",
      position: "Student-Chair",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQHj2jywoNnISA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1723294885541?e=1728500400&v=beta&t=oTGnp3Ff9SdAfRtx0ziHC6WZDa1srb8fAOi2ubtcMzo",
      socialLinks: {
        twitter: "https://twitter.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        email: "mailto:markjohnson@example.com"
      }
    },
    {
      id: 4,
      name: "Ashish Siddharth",
      position: "Vice-Chairman",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQGCGOHKtOGB-A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722007832222?e=1728500400&v=beta&t=-p7_1mx8ML5PIYMMqrMxnz4QrDsmtwYEmyPEEoYzVwQ",
      socialLinks: {
        twitter: "https://twitter.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        email: "mailto:emilydavis@example.com"
      }
    },
    {
      id: 4,
      name: "Kritika Jaiswal",
      position: "Vice-Chairman",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFzQd7lCCp9Lg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725325451975?e=1733356800&v=beta&t=kaUh5OeMFwfSBD5layrln679KC0GHafoc1oeKFCScx4",
      socialLinks: {
        twitter: "https://twitter.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        email: "mailto:emilydavis@example.com"
      }
    }
  ];

  return (
    <div className=" justify-evenly py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        {/* <h2 className="text-4xl font-bold text-cyan-400 mb-4">Meet Our Expert Team </h2> */}
       {/* <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>
      

      {/* Faculty Advisor Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">1. Faculty Advisor</h2>
        <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="w-48 h-48 mb-4">
            <img className="rounded-full object-cover w-full h-full" src={facultyAdvisor.imageUrl} alt={facultyAdvisor.name} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-700">{facultyAdvisor.name}</h3>
          <p className="text-xl text-cyan-400">{facultyAdvisor.position}</p>
          <div className="flex mt-4 space-x-4">
            <a href={facultyAdvisor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" />
            </a>
            <a href={facultyAdvisor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
            </a>
            <a href={facultyAdvisor.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <img className="w-5 pt-1" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="Instagram" />
            </a>
            <a href={facultyAdvisor.socialLinks.email} target="_blank" rel="noopener noreferrer">
              <img className="w-5 pt-1" src="https://www.svgrepo.com/show/223047/gmail.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <br />

      {/* Instructors Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">Meet Our Expert Team </h2>
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">3. Additional Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardcodedInstructors.map((instructor) => (
            <div key={instructor.id} className="p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-48 h-48 mb-4">
                <img className="rounded-full object-cover w-full h-full" src={instructor.imageUrl} alt={instructor.name} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">{instructor.name}</h3>
              <p className="text-xl text-cyan-400">{instructor.position}</p>
              <div className="flex mt-4 space-x-4">
                <a href={instructor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" />
                </a>
                <a href={instructor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
                </a>
                <a href={instructor.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="Instagram" />
                </a>
                <a href={instructor.socialLinks.email} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/223047/gmail.svg" alt="Email" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fetched Dynamic Instructors */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">3. Additional Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-48 h-48 mb-4">
                <img className="rounded-full object-cover w-full h-full" src={instructor.imageUrl} alt={instructor.name} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">{instructor.name}</h3>
              <p className="text-xl text-cyan-400">{instructor.position}</p>
              <div className="flex mt-4 space-x-4">
                <a href={instructor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" />
                </a>
                <a href={instructor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
                </a>
                <a href={instructor.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="Instagram" />
                </a>
                <a href={instructor.socialLinks.email} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 pt-1" src="https://www.svgrepo.com/show/223047/gmail.svg" alt="Email" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
