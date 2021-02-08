import React, { useContext, useState } from "react";

export const ProjectCountContext = React.createContext("");

export function ProjectCountProvider({ children }) {
  const [currentProjectCount, setCurrentProjectCount] = useState(0);
  return (
    <ProjectCountContext.Provider
      value={[currentProjectCount, setCurrentProjectCount]}
    >
      {children}
    </ProjectCountContext.Provider>
  );
}

export default ProjectCountContext;
