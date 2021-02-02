import React, { useContext, useState } from "react";

export const ProjectContext = React.createContext("");

export function ProjectProvider({ children }) {
  const [project, setProject] = useState("");
  return (
    <ProjectContext.Provider value={[project, setProject]}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
