import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    setError(""); // Reset error message
    setSuccess(""); // Reset success message

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Data to send
    const loginData = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        loginData
      );

      if (response.status === 200) {
        setSuccess("Login successful!");
        localStorage.setItem("accessToken", response.data.message.accessToken);
        navigate("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setError("Error occurred. Please check your network.");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        // backgroundImage:
        //   "url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full border-[0.5px]">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-3xl text-center font-bold mb-4 text-white">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-800"
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
              className="w-full px-4 py-2 rounded-md bg-gray-100 bg-opacity-70 border focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-800"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-300 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
