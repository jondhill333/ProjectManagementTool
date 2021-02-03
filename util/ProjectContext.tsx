import React, { useContext, useState } from "react";

export const ProjectContext = React.createContext("");

export function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState("");
  return (
    <ProjectContext.Provider value={[currentProject, setCurrentProject]}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
