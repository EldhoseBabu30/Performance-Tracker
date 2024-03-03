import React from "react";


const ProjectDetails = ({ projects }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Registered Projects</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Project Title</th>
            <th className="py-2 px-4 border-b">From</th>
            <th className="py-2 px-4 border-b">Due</th>
            <th className="py-2 px-4 border-b">Team Lead</th>
            <th className="py-2 px-4 border-b">Employees</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{project.title}</td>
              <td className="py-2 px-4 border-b">{project.from}</td>
              <td className="py-2 px-4 border-b">{project.due}</td>
              <td className="py-2 px-4 border-b">{project.teamLead.label}</td>
              <td className="py-2 px-4 border-b">
                {project.employees.map((employee) => employee.label).join(", ")}
              </td>
              <td className="py-2 px-4 border-b">{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDetails;
