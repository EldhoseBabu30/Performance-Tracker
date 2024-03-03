import  { useState } from 'react';

const EmpRegister = () => {
 
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  
  const handleRegistration = (e) => {
    e.preventDefault();
   
    console.log('Employee Registration Data:', employeeData);
    
    setEmployeeData({
      firstName: '',
      lastName: '',
      email: '',
      position: '',
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
