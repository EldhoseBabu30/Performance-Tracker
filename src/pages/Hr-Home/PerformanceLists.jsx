import React, { useEffect, useState } from "react";
import axios from "axios";

const PerformanceLists = () => {
  const [performanceData, setPerformanceData] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("HRtoken"); 

    const fetchPerformanceDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/hrapi/Performance/', {
          headers: {
            'Authorization': `Token ${token}`, 
          }
        });
        setPerformanceData(response.data);
       
      } catch (error) {
        console.error("Failed to fetch team details:", error);
      }
    };

    if (token) { 
        fetchPerformanceDetails();
    }
  }, []);

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Performance of Employees</h1>
      {performanceData.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">HR  </th>
                  <th className="py-3 px-4 border-b border-gray-300">Employee</th>
                  <th className="py-3 px-4 border-b border-gray-300">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {performanceData.map((performance, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">{performance.id}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{performance.hr}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{performance.employee}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{performance.performance}</td>   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No Teams.</p>
      )}
      {/* Pass the team lead name as a prop to ProjectDetails component */}
  
    </div>
  );
};

export default PerformanceLists;
