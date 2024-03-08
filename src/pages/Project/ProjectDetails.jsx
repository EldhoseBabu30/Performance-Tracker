import React, { useEffect } from "react";
import axios from 'axios';
import { useProjectData } from "../Register/ProjectDataContext";

const ProjectDetails = () => {
  const { projectData, setProjectData } = useProjectData();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/hrapi/projects/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
          }
        });
        setProjectData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
        // Handle error
      }
    };

    fetchProjectDetails();
  }, [setProjectData]);

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Project Title</th>
                {/* Add other table headers */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.projectTitle}</td>
                  {/* Add other project details */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
