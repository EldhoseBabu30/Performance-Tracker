import React, { useState } from 'react';

const EmpRegister = () => {
  // State to store employee registration data
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic, e.g., send data to server
    console.log('Employee Registration Data:', employeeData);
    // You can add logic here to send the data to your server or perform any other actions
    // Reset the form after registration
    setEmployeeData({
      firstName: '',
      lastName: '',
      email: '',
      position: '',
    });
  };

  // JSX for the registration form
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Employee Registration</h2>
      <form onSubmit={handleRegistration} className="space-y-6">
        <label className="block text-sm font-medium text-gray-900">
          First Name:
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
            required
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-900">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            required
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-900">
          Email:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-900">
          Position:
          <input
            type="text"
            name="position"
            value={employeeData.position}
            onChange={handleInputChange}
            required
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <br />
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
            Register Employee</button>
      </form>
    </div>
    </div>
  );
};

export default EmpRegister;
