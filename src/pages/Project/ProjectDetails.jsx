import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../../components/Controllers/AuthContext";


const ProjectDetails = () => {
  const { token } = useAuth(); 
  const [projectData, setProjectData] = useState([]);

  console.log(projectData);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/hrapi/projects/', {
          headers: {
            'Authorization': `Token ${token}`, 
          }
        });
        setProjectData(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
        // Handle error
      }
    };

    fetchProjectDetails();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto overflow-y-auto">
          <table className="min-w-full bg-white rounded-md overflow-scroll shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Project Title</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Description</th>
                <th className="py-3 px-4 border-b border-gray-300">Due Date</th>
                <th className="py-3 px-4 border-b border-gray-300">Project Status</th>
              
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
          
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.topic}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.description}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.end_date}</td>
                  
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
