import { useEffect, useState } from "react";
import { createContext } from "react";

import axios from "axios";

// Create context
const ProjectsContext = createContext();

// Provider
const ProjectsProvider = ({ children }) => {
  // State projects dinamyc
  const [projects, setProjects] = useState([]);
  // State projects static
  const [projectsFiltered, setProjectsFiltered] = useState([]);
  // State loading
  const [loading, setLoading] = useState(false);

  // Runs when rendering component for the first time
  useEffect(() => {
    getAllProjects();
  }, []);

  // Function to get projects from API
  const getAllProjects = async () => {
    try {
      setLoading(true);
      const url = "https://api.unergy.io/api/landing/project/";

      // Get projects from API
      const { data } = await axios.get(url);

      // Update value of state projects
      setProjects(data);
      setProjectsFiltered(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, loading, projectsFiltered, setProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
