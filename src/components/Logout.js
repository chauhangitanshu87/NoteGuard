import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login or home page
    navigate("/login"); // Or navigate("/"), depending on where you want to redirect
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;