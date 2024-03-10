import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../../components/Controllers/AuthContext";


const ViewEmployees = () => {
  const { token } = useAuth(); 
  const [employeeData, setEmployeeData] = useState([]);

  console.log(employeeData);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/teamleadapi/employee/', {
          headers: {
            'Authorization': `Token ${token}`, 
          }
        });
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  return (
    <div className="mt-8 h-96 overflow-y-auto">
    <h1 className="text-2xl font-semibold mb-4">Employees</h1>
    {employeeData.length > 0 ? (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300">Employee Name</th>
              <th className="py-3 px-4 border-b border-gray-300">Email</th>
              <th className="py-3 px-4 border-b border-gray-300">Position</th>
              <th className="py-3 px-4 border-b border-gray-300">Phone No</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employeeData.map((employee, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border whitespace-nowrap">{employee.Firstname} {employee.lastname}</td>
                <td className="py-3 px-4 border whitespace-nowrap">{employee.email_address}</td>
                <td className="py-3 px-4 border whitespace-nowrap">{employee.position}</td>
                <td className="py-3 px-4 border whitespace-nowrap">{employee.phoneno}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="mt-4">No projects found.</p>
    )}
  </div>
  
  );
};

export default ViewEmployees;
