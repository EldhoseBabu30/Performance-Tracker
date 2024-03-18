import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectOfTeams = () => {
  const [teamProjects, setTeamProjects] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ id: '' });
  const token = localStorage.getItem("Emp-token");

  useEffect(() => {
    const fetchTeamProjects = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/empapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTeamProjects(response.data);
      } catch (error) {
        console.log("Error fetching team projects:", error);
        setError("Error fetching team projects");
      }
    };

    fetchTeamProjects();
  }, []);

  console.log("token", token);
  console.log(teamProjects);

  const handleCreate = async (projectId) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8001/empapi/projectdetail/${formData.id}/taskchart_add/`,
        formData, 
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("API Response:", response.data);
     
    } catch (error) {
      console.error("Error creating project task:", error);
    }
  };

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      {teamProjects.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Team Lead
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Project
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">Team</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Create Project Task
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teamProjects.map((project, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {project.id}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {project.teamlead}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {project.project}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      {project.team}
                    </td>
                    <td className="py-3 px-4 border whitespace-nowrap">
                      <button
                        onClick={() => handleCreate(project.id)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                      >
                        Create
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No team projects found.</p>
      )}
    </div>
  );
};

export default ProjectOfTeams;
