import { useEffect, useState } from "react";
import { createContext } from "react";

import axios from "axios";

// Create context
const ProjectsContext = createContext();

// Provider
const ProjectsProvider = ({ children }) => {
  // State projects
  const [projects, setProjects] = useState([]);

  // Runs when rendering component for the first time
  useEffect(() => {
    getAllProjects();
  }, []);

  // Function to get projects from API
  const getAllProjects = async () => {
    try {
      const url = "https://api.unergy.io/api/landing/project/";

      // Get projects from API
      const { data } = await axios.get(url);

      // Update value of state projects
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
