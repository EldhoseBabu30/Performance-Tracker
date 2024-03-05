import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useProjectData } from "./ProjectDataContext";
import { useEmployeeData } from './EmployeeDataContext';

import Swal from 'sweetalert2';

const ProjectRegister = () => {
  const [selectedTeamLead, setSelectedTeamLead] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const navigate = useNavigate();
  const { addProjectData } = useProjectData();
  const { employeeData } = useEmployeeData();

 
  const options = employeeData.map(employee => ({
    value: `${employee.firstName} ${employee.lastName}`,
    label: `${employee.firstName} ${employee.lastName}`
  }));

  

  const handleTeamLeadChange = (selectedOption) => {
    setSelectedTeamLead(selectedOption);
  };

  const handleEmployeeChange = (selectedOptions) => {
    setSelectedEmployees(selectedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      projectTitle: event.target.elements.projectTitle.value,
      from: event.target.elements.from.value,
      due: event.target.elements.due.value,
      teamLead: selectedTeamLead,
      employees: selectedEmployees,
      description: event.target.elements.description.value
    };

    try {
      await registerProject(formData);
     
      Swal.fire({
        icon: "success",
        title: "Project Registered Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      addProjectData(formData); 
      navigate("/project-details");
    } catch (error) {
      console.error("Project registration failed:", error);
    }
  };

  const registerProject = async (formData) => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        console.log("Project registered successfully:", formData);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h1 className="text-2xl font-semibold mb-6">Project Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="projectTitle"
            placeholder="Project Title"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">
              From
            </label>
            <input
              type="date"
              id="from"
              className="w-32 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="due" className="block text-sm font-medium text-gray-700">
              Due
            </label>
            <input
              type="date"
              id="due"
              className="w-32 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="teamLead" className="block text-sm font-medium text-gray-700">
            Team Lead
          </label>
          <Select
            id="teamLead"
            options={options} 
            value={selectedTeamLead}
            onChange={handleTeamLeadChange}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700">
            Employees
          </label>
          <Select
            id="employees"
            options={options} 
            value={selectedEmployees}
            onChange={handleEmployeeChange}
            isMulti
            className="w-full"
          />
        </div>
        <div>
          <textarea
            id="description"
            placeholder="Project Description"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectRegister;
