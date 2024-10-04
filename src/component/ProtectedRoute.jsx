// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check localStorage for the authentication token
  const isAuthenticated = !!localStorage.getItem('accessToken');

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/signin" />;
  }

  // Render the protected component if authenticated
  return children;
};

export default ProtectedRoute;
