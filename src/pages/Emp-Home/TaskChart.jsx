import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskChart = () => {
  const [taskChart, setTaskChart] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("Emp-token");

  useEffect(() => {
    const fetchTaskChart = async () => {
      try {
        
        const response = await axios.get('http://127.0.0.1:8001/empapi/taskchart/', {
          headers: {
            'Authorization': `Token ${token}`, 
          }
        });
        setTaskChart(response.data);
        setError(null); 
      } catch (error) {
        console.error("Failed to fetch team details:", error);
        setError("Failed to fetch team details. Please try again.");
      }
    };

    fetchTaskChart();
  }, []);
  console.log(taskChart);

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">My Team</h1>
      {error ? (
        <p className="mt-4 text-red-500">{error}</p>
      ) : taskChart.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">Project Details</th>
                  <th className="py-3 px-4 border-b border-gray-300">Assigned Person</th>
                  <th className="py-3 px-4 border-b border-gray-300">Start Date</th>
                  <th className="py-3 px-4 border-b border-gray-300">End Date</th>
                  <th className="py-3 px-4 border-b border-gray-300">Total Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {taskChart.map((task, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">{task.id}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{task.project_detail}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{task.assigned_person}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{task.start_date}</td>   
                    <td className="py-3 px-4 border whitespace-nowrap">{task.end_date}</td>   
                    <td className="py-3 px-4 border whitespace-nowrap">{task.total_days}</td>   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No Teams.</p>
      )}
    </div>
  );
};

export default TaskChart;
