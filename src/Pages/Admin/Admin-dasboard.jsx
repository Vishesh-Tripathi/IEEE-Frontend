import React from 'react';
import AdminForm from './Admin.update.jsx';
import ImageUploadForm from '../Events/HiglightsForm';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-700">Admin Dashboard</div>
        <div className="flex items-center">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img 
              className="w-10 h-10 rounded-full object-cover" 
              src="https://via.placeholder.com/100" 
              alt="Admin"
            />
            <span className="text-gray-700 font-medium">Admin Name</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, Admin!</h2>
         <AdminForm/>
         <ImageUploadForm/>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
