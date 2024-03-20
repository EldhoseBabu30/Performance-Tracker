import React, { useEffect, useState } from "react";
import axios from "axios";

const AssignedProject = ( ) => {
  
  const [assignedProject, setAssignedProject] = useState([]);
  const token = localStorage.getItem('TlToken');
  const [formData, setFormData] = useState([
    {
      id: "",
    },
  ]);

  


  useEffect(() => {
    const fetchAssignedProjectDetail = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/teamleadapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setAssignedProject(response.data);
      } catch (error) {
        console.error("Failed to fetch assigned project details:", error);
      }
    };

    fetchAssignedProjectDetail();
  }, [token]);


  const handleMarkComplete = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8001/teamleadapi/assignedprojects/${formData.id}/project_completed/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Assign successful");
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };
  handleMarkComplete();



  const handleComplete = (projectId) => {
    setFormData({ id: projectId });
  };

  console.log(assignedProject);
  console.log(token);

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Assigned Project</h1>
      {assignedProject.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Id</th>
                <th className="py-3 px-4 border-b border-gray-300">Project</th>
                <th className="py-3 px-4 border-b border-gray-300">Team Lead</th>
                <th className="py-3 px-4 border-b border-gray-300">Team Name</th>
                <th className="py-3 px-4 border-b border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assignedProject.map((assigned, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{assigned.id}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{assigned.project}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{assigned.teamlead}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{assigned.team}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    <div className="flex space-x-4">
                     
                      <button
                        onClick={() => handleComplete(assigned.id)}
                        type="button"
                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Complete
                      </button>

                  
                    </div>
                  </td>

                 
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

export default AssignedProject;
