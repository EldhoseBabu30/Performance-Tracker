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
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 w-96">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Employee Registration</h2>
      <form onSubmit={handleRegistration} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="firstName"
            value={employeeData.Firstname}
            onChange={handleInputChange}
            required
            placeholder="First Name"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            required
            placeholder="Last Name"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="email"
            name="email_address"
            value={employeeData.email_address}
            onChange={handleInputChange}
            required
            placeholder="Email"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="tel"
            name="phoneno"
            value={employeeData.phoneno}
            onChange={handleInputChange}
            required
            placeholder="Phone Number"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="position"
            value={employeeData.position}
            onChange={handleInputChange}
            required
            placeholder="Position"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register Employee
        </button>
      </form>
    </div>
  </div>
  );
};

export default EmpRegister;
