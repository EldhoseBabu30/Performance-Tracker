import React, { useEffect, useState } from "react";
import axios from "axios";

const TLProjectDetails = ({ teamLeadName, updateRequests }) => {
  const token = localStorage.getItem('TlToken');
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSelected, setIsSelected] = useState(false);


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

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
    sendRequestToHR(projectId);
    setIsSelected(true);
  };

  const handleRemoveSelected = () => {
    setSelectedProject(null);
    setIsSelected(false);

  };

  const sendRequestToHR = (projectId) => {
    const requests = JSON.parse(localStorage.getItem('hrRequests')) || [];
    const selectedProject = projectData.find(project => project.id === projectId);
    requests.push({ projectId, projectName: selectedProject.topic, teamLeadName });
    localStorage.setItem('hrRequests', JSON.stringify(requests));
    console.log(`Request for project ${projectId} sent to HR inbox by ${teamLeadName}`);
    updateRequests(requests);
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
                <th className="py-3 px-4 border-b border-gray-300">Actions</th>
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
                    {/* <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => handleSelectProject(project.id)}
                        disabled={selectedProject !== null && selectedProject !== project.id}
                        className={`flex justify-center items-center w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                          selectedProject === project.id ? "bg-green-500 text-white hover:bg-green-600" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {isSelected && (selectedProject === project.id  ? "Selected" : "Select"}
                      </button>
                      {isSelected  && (
                        <button
                          type="button"
                          onClick={handleRemoveSelected}
                          className="flex justify-center items-center p-2 border border-transparent rounded-lg shadow-sm text-xs text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Decline
                        </button>
                      )}
                    </div> */}

                    <div className="btn">
                      {
                        isSelected ? <><button className="bg-green-500">Selected</button><button onClick={() => handleRemoveSelected(project.id)}>Decline</button></> 
                        :
                        <button className="bg-green-500" onClick={() => handleSelectProject(project.id)}>Select</button>
                      }
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
