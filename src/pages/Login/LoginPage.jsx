import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('role');
  
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('name', storedName);
  
      const roleNavigationMap = {
        hr: '/hr-home',
        tl: '/tl-home',
        employee: '/emp-home',
      };
  
      const targetRoute = roleNavigationMap[storedRole];
  
      if (targetRoute) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in.',
        }).then(() => {
          navigate(targetRoute);
        });
      } else {
        alert('Invalid role');
      }
    } else {
      alert('Incorrect email or password');
    }
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Sign in to your account</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="text-center text-sm font-medium text-gray-500 mt-4">
          Not a member?{' '}
          <Link to={'/register'} className="text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};



export default LoginPage;

// src/components/ProjectStatusReport.js
// import React from 'react';
// import Spreadsheet from 'react-spreadsheet';

// const ProjectStatusReport = () => {
//   // Initial data for the spreadsheet
//   const initialData = [
//     [{ value: 'Task', readOnly: true }, { value: 'Status', readOnly: true }],
//     ['Task 1', 'In Progress'],
//     ['Task 2', 'Completed'],
//     // Add more rows as needed
//   ];

//   return (
//     <div className="container mx-auto my-8">
//       <Spreadsheet
//         data={initialData}
//         onChange={(data) => console.log(data)}
//       />
//     </div>
//   );
// };

// export default ProjectStatusReport;
