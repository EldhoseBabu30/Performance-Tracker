import React, { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmpRegister = async () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [position, setPosition] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // This function handles the registration and should be called on form submission
    const registerEmp = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8001/empapi/register/", {
          firstname,
          lastname,
          email_address,
          phoneno,
          position,
        });

        if (response.status !== 201) {
          if (response.data.name && response.data.name[0] === "A user with that username already exists.") {
            setErrorMessage("A user with that username already exists.");
          } else if (response.data.message) {
            throw new Error(response.data.message);
          } else {
            throw new Error("Registration failed");
          }
        } else {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered.",
          }).then(() => {
            navigate("/hr-home");
          });
        }
      } catch (error) {
        console.error("Registration error:", error);
        setErrorMessage(error.message || "Registration failed");
      }
    };

    // Check if there's an error message, and if not, proceed with registration
    if (errorMessage === "") {
      registerEmp();
    }
  }, [firstname, lastname, email_address, phoneno, position]);

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 w-96">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Employee Registration</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="firstName"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            placeholder="First Name"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            name="lastName"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)} 
            required
            placeholder="Last Name"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="email"
            name="email_address"
            value={email_address}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            placeholder="Email"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="tel"
            name="phoneno"
            value={phoneno}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
            placeholder="Phone Number"
            className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
           {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
