import { useContext } from "react";

// Context Projects
import ProjectsContext from "../context/ProjectsProvider";

const useProjects = () => {
  return useContext(ProjectsContext);
};

export default useProjects;
