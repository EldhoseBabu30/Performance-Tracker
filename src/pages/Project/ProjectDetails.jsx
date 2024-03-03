import React from "react";
import { useProjectData } from "../Register/ProjectDataContext";

const ProjectDetails = () => {
  const { projectData } = useProjectData();

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      {projectData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">Project Title</th>
                <th className="py-3 px-4 border-b border-gray-300">From</th>
                <th className="py-3 px-4 border-b border-gray-300">Due</th>
                <th className="py-3 px-4 border-b border-gray-300">Team Lead</th>
                <th className="py-3 px-4 border-b border-gray-300">Employees</th>
                <th className="py-3 px-4 border-b border-gray-300">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.projectTitle}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.from}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.due}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.teamLead.label}</td>
                  <td className="py-3 px-4 border whitespace-nowrap">
                    {project.employees.map((employee) => employee.label).join(", ")}
                  </td>
                  <td className="py-3 px-4 border whitespace-nowrap">{project.description}</td>
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
