import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="text-gray-300 py-8 bg-gray-900 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Left section: IEEE logo and address */}
        <div className="text-center md:text-left ml-8">
          {/* Logo */}
          <div className=" justify-center md:justify-start mb-2 flex">
            <img 
              src={logo}// Replace this with the actual logo path
              alt="IEEE SB Logo"
              className="h-12 w-auto mt-[-8px] "
            />
              <h1 className="text-white font-bold text-xl inline-block">
         
         <span className="px-1 py-1">IEEE-SB</span> MMMUT
       </h1>
          </div>
          {/* <h1 className="text-white font-bold text-xl inline-block">
         
            <span className="px-1 py-1">IEEE-SB</span> MMMUT
          </h1> */}
          <p className="mt-2">
            Madan Mohan Malaviya University of Technology GKP, UP
          </p>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left ml-40">
          <h2 className="text-white font-semibold inline-block mb-2">Resources:</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left ml-32">
          <h2 className="text-white font-semibold inline-block mb-2">Follow Us:</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Github</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
          </ul>
        </div>

        {/* Others */}
        <div className="text-center md:text-left ml-24">
          <h2 className="text-white font-semibold inline-block mb-2">Others:</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Old Website</a></li>
          </ul>
        </div>
      </div>

      {/* Social media icons */}
      {/* Uncomment if needed */}
      {/* 
      <div className="container mx-auto px-4 mt-8 flex justify-center space-x-6 text-2xl">
        <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-github"></i></a>
      </div>
      */}
    </footer>
  );
};

export default Footer;
