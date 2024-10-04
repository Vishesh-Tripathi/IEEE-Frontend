import React from 'react';
import Navbar from '../Navbar';
import Bacground from '../Bacground';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">

<div className="fixed inset-0 z-[-1]">
        <Bacground />
      </div>


     <Navbar/>
      

      {/* Main Content Area */}
      <main className="">
        {children}
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Layout;
