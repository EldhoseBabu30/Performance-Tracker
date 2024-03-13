import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../components/Controllers/AuthContext";

const ProjectDetails = () => {
  const { token } = useAuth();
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/teamleadapi/projects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setProjectData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchProjectDetails();
  }, []);

  const handleSelectProject = (projectId) => {
    // If the clicked project is already selected, unselect it
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Id
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Title
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Description
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Due Date</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Project Status
                </th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Select a Project
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.id}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.topic}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.description}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.end_date}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.project_status}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">

                    <button
                      type="button"
                      onClick={() => handleSelectProject(project.id)}
                      disabled={selectedProject !== null && selectedProject !== project.id}

                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        selectedProject === project.id
                          ? "bg-green-600"
                          : selectedProject !== null
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      }`}
                    >
                      {selectedProject === project.id ? "Selected" : "Select"}
                    </button>

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

export default ProjectDetails;
