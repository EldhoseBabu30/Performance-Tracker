import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../components/Controllers/AuthContext";

const TLProjectDetails = ({ teamLeadName, updateRequests }) => {
  const { token } = useAuth();
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const sendRequestToHR = (projectId, projectName, teamLeadName) => {
    const requests = JSON.parse(localStorage.getItem('hrRequests')) || [];
    requests.push({ projectId, projectName, teamLeadName });
    localStorage.setItem('hrRequests', JSON.stringify(requests));
    console.log(`Request for project ${projectId} (${projectName}) sent to HR inbox by ${teamLeadName}`);
    updateRequests(requests); // Update HR inbox requests
  };

  const handleRemoveSelected = (projectId) => {
    const updatedRequests = JSON.parse(localStorage.getItem('hrRequests')) || [];
    const filteredRequests = updatedRequests.filter(request => request.projectId !== projectId);
    localStorage.setItem('hrRequests', JSON.stringify(filteredRequests));
    updateRequests(filteredRequests); // Update HR inbox requests
  };

  const handleSelectProject = (projectId, projectData) => {
    if (selectedProject !== projectId) {
      setSelectedProject(projectId);
      sendRequestToHR(projectId, projectData.topic, teamLeadName);
    } else {
    }
  };

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
  }, [token]);

  const handleDeclineProject = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null);
    }
  
    handleRemoveSelected(projectId); // Remove the project from HR inbox
    
    const updatedProjectData = projectData.map((project) => {
      if (project.id === projectId) {
        return { ...project, selected: false };
      }
      return project;
    });
  
    setProjectData(updatedProjectData);
  };

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Project Id</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Title</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Description</th>
                <th className="py-3 px-4 border-b border-gray-300">Due Date</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Status</th>
                <th className="py-3 px-4 border-b border-gray-300">Select a Project</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.id}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.topic}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.description}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.end_date}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.project_status}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    <div className="flex space-x-4">
                      {/* Select Button */}
                      <button
                        type="button"
                        onClick={() => handleSelectProject(project.id, project)}
                        disabled={selectedProject !== null && selectedProject !== project.id}
                        className={`flex justify-center items-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
                          selectedProject === project.id
                            ? "bg-green-600 text-white"
                            : selectedProject !== null
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {selectedProject === project.id ? "Selected" : "Select"}
                      </button>
                      
                      {/* Decline or Reject Button */}
                      <button
                        type="button"
                        onClick={() => handleDeclineProject(project.id)}
                        className="flex justify-center items-center p-2 border border-transparent rounded-lg shadow-sm text-xs text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
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

export default TLProjectDetails;
