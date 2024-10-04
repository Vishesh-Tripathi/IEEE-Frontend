import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./Pages/HomePage/Home";
import Signup from "./Pages/User/Signup";
import Login from "./Pages/User/Login";
import InstructorsSection from "./Pages/Team/Team";
import CardGalleryComponent from "./Pages/Gallary/Gallery";
import Carousel from "./Pages/Events/Event";
import TechSrijanPage from "./Pages/Events/Info";
import AdminDashboard from "./Pages/Admin/Admin-dasboard";
import ComingSoon from "./Pages/Events/ComingSoon";
import AboutPage from "./component/About";
import LandingPage from "./component/ContactUs";
import ProtectedRoute from "./component/ProtectedRoute"; // Import your ProtectedRoute component
import axios from 'axios';

function App() {
  // Simulate the authentication state
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Set this to true when the user logs in
  // useEffect(() => {
  //   const login = localStorage.getItem('login')
  //   if (login === 'true') {
  //     setIsAuthenticated(true);
  //   }
  // }, []);
  // console.log(isAuthenticated)
  axios.defaults.withCredentials  = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* <Route path="/signup" element={<Layout><Signup /></Layout>} /> */}
        <Route path="/signin" element={<Layout><Login /></Layout>} />
        <Route path="/team" element={<Layout><InstructorsSection /></Layout>} />
        <Route path="/gallery" element={<Layout><CardGalleryComponent /></Layout>} />
        <Route path="/events" element={<Layout><Carousel /></Layout>} />
        <Route path="/info" element={<Layout><TechSrijanPage /></Layout>} />
        <Route path="/coming-soon" element={<Layout><ComingSoon /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><LandingPage /></Layout>} />
        
        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute >
              <Layout><AdminDashboard /></Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
