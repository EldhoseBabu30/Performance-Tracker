import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEmployeeData } from './EmployeeDataContext';

const EmpRegister = () => {
  const [employeeData, setEmployeeData] = useState({
    Firstname: '',
    lastname: '',
    email_address: '',
    position: '',
    phoneno:'',

  });

  const { addEmployeeData } = useEmployeeData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const employee = { ...employeeData };
    addEmployeeData(employee);

    setEmployeeData({
      firstName: '',
      lastName: '',
      email_address: '',
      position: '',
      phoneno:'',
    });

    Swal.fire({
      icon: 'success',
      title: 'Employee Registered Successfully',
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Employee Registration</h2>
        <form onSubmit={handleRegistration} className="space-y-6">
          <label className="block text-sm font-medium text-gray-900">
            First Name:
            <input
              type="text"
              name="firstName"
              value={employeeData.Firstname}
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
              value={employeeData.lastname}
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
              value={employeeData.email_address}
              onChange={handleInputChange}
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <br />
          <br />
          <label className="block text-sm font-medium text-gray-900">
            Phone No
            <input
              type="tel"
              name="phoneno"
              value={employeeData.phoneno}
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
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmpRegister;
