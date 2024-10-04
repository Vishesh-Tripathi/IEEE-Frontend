import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
// import profileLogo from '../assets/profile.png'; // Profile image

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDrawerOpen, setAboutDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on authentication

  const islogin = localStorage.getItem('accessToken');
  useEffect(()=>{
    if(islogin){
      setIsLoggedIn(true)
      localStorage.setItem('login',true);
    }
  })


  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    localStorage.setItem('login',false);
  };
  return (
    <nav className="nitu p-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-4">
          <a href="#">
            <img
              src={logo} // Replace with the path to your logo
              alt="Logo"
              className="h-12 sm:h-20 w-auto"
            />
          </a>
          <h1 className='sm:text-2xl font-medium text-white'>
            IEEE-<span className='text-cyan-400'>SB</span>||MMMUT
          </h1>
        </div>

        {/* Menu Items for Desktop */}
        <ul className="hidden md:flex space-x-8 text-white text-xl ml-auto">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Home</li></NavLink>

          {/* About Us with Drawer */}
          <li className="relative">
            <NavLink 
              to={'/about'}
              className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}
       
            >
              About Us
            </NavLink>
          </li>

          <NavLink to="/events" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Events</li></NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Gallery</li></NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Team</li></NavLink>
          <NavLink to="/signin" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Membership</li></NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}><li>Contact Us</li></NavLink>

          {/* Profile Icon when logged in */}
          {isLoggedIn && (
            <>
            <NavLink to="/admin" className="ml-4">
              <img
                src='https://listimg.pinclipart.com/picdir/s/367-3673668_open-man-with-tie-icon-clipart.png' // Path to profile image
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
            </NavLink>
            <button  onClick={logout}>Logout</button>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 text-white font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Home</li></NavLink>

          {/* About Us with Drawer in Mobile */}
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} >
          <li>
              About Us
          </li>
          </NavLink>

          <NavLink to="/events" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Events</li></NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Gallery</li></NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Team</li></NavLink>
          <NavLink to="/signin" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Membership</li></NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-400'} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}><li>Contact Us</li></NavLink>

          {/* Profile Icon when logged in */}
          {isLoggedIn && (
            <NavLink to="/profile" className="mt-4">
              <img
                src={profileLogo} // Path to profile image
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
            </NavLink>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
