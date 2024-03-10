import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setSelectedRole(role);
    if (role === "HR") {
      navigate("/hr-login");
    } else if (role === "Team Lead") {
      navigate("/tl-login");
    }
    else if (role === 'Employee'){
      navigate("/emp-login")
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-16 rounded-lg text-center w-96">
        {/* Adjusted width using w-96, you can change this value */}
        <h1 className="text-3xl font-bold mb-6">Select a Role</h1>

        <div className="flex flex-col">
          <button
            onClick={() => handleButtonClick("HR")}
            className={`w-full p-8 mb-8 bg-blue-500 text-white rounded ${
              selectedRole === "HR" && "bg-blue-700"
            }`}
          >
            HR
          </button>

          <button
            onClick={() => handleButtonClick("Team Lead")}
            className={`w-full mb-8 p-8 bg-green-500 text-white rounded ${
              selectedRole === "Team Lead" && "bg-green-700"
            }`}
          >
            Team Lead
          </button>
          <button
            onClick={() => handleButtonClick("Employee")}
            className={`w-full p-8 bg-red-500 text-white rounded ${
              selectedRole === "Employee" && "bg-red-700"
            }`}
          >
            Employee
          </button>
        </div>

        {selectedRole && (
          <div className="mt-8">
            <p className="text-lg font-semibold">
              You selected: {selectedRole}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
