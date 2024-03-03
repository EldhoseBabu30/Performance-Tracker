import React, { createContext, useContext, useState } from "react";

const ProjectDataContext = createContext();

export const useProjectData = () => useContext(ProjectDataContext);

export const ProjectDataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState([]);

  const addProjectData = (formData) => {
    setProjectData([...projectData, formData]);
  };

  return (
    <ProjectDataContext.Provider value={{ projectData, addProjectData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export default ProjectDataContext;