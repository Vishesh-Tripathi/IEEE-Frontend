import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen p-8 flex justify-center items-center">
      <div className=" bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-xl shadow-2xl  p-4 sm:p-6 md:p-8 sm:text-lg md:text-xl lg:text-2xl mt-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        {/* Vision Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Student Branches</h2>
          <p className="text-lg">
          An IEEE Student Branch gives students a community of peers, and a connection to faculty and industry professionals who drive innovation in countless technical fields. Student involvement in Branch activities, whether special projects, social and technical meetings, outreach programs, conferences, local Section or Regional opportunities, etc. can help develop a record of accomplishment and capabilities beyond the norm.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Vision</h2>
          <p className="text-lg">
            Our vision is to be the leading provider of solutions that empower businesses to grow, innovate, and succeed in a rapidly evolving global market.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Mission</h2>
          <p className="text-lg">
            Our mission is to deliver innovative products and services that add value to our clients and create a positive impact on the communities we serve.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Innovation: We encourage creativity and the pursuit of excellence.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
            <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
            <li>Accountability: We take responsibility for delivering on our commitments.</li>
          </ul>
        </section>

        {/* Goals Section */}
        <section>
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Goals</h2>
          <ul className="list-disc list-inside text-lg">
            <li>To continuously innovate and improve our offerings.</li>
            <li>To expand our market reach and grow sustainably.</li>
            <li>To foster long-term relationships with our clients and partners.</li>
            <li>To promote a culture of inclusivity, learning, and personal growth.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
