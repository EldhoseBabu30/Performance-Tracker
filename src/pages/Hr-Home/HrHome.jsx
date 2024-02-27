// HrHome.js
import React from 'react';
import Navbar from '../../components/Header/Navbar';

const HrHome = () => {
  // Set isLoggedIn to true if the user is logged in
  const isLoggedIn = true; // You need to set this based on whether the user is logged in or not
  // Retrieve HR name from local storage
  const userName = localStorage.getItem('name');

  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn to Navbar */}
    <div className="flex justify-center items-end mt-20 pb-10"> {/* Adjust mt-20 for more space */}
      <div>
        <h3 className="text-center text-3xl font-medium leading-tight text-primary">Welcome, {userName}</h3>
      </div>
    </div>
  </div>
  );
};

export default HrHome;
