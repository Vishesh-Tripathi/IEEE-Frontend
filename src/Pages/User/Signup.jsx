import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate(); // Use it here, at the top level of the component

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    setError(""); // Reset error message
    setSuccess(""); // Reset success message

    if (!fullName || !email || !gender || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/v1/users/register", {
        fullName,
        email,
        password,
      });
      console.log(res);
      if (res.status === 201) {
        setSuccess("User created successfully");
        navigate("/login"); // Use navigate to redirect
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div
      className="h-screen  bg-cover bg-center flex items-center justify-center"
    >
      <div className=" bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg  max-w-lg  w-full">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-3xl text-center font-bold mb-4 text-white">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none"
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
