import { useState } from "react";

import { FaSearch } from "react-icons/fa";

// Hooks
import useProjects from "../hooks/useProjects";

const Searcher = () => {
  const { projectsFiltered, setProjects } = useProjects();

  // State search
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (value) => {
    let res = projectsFiltered.filter((project) => {
      if (
        project.nombre_corto_l[0].text
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        return project;
      }
    });
    setProjects(res);
  };

  return (
    <div className="searcher d-flex justify-content-center">
      <input
        type="text"
        value={search}
        placeholder="Busca algun proyecto por nombre! 😁"
        onChange={handleChange}
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default Searcher;
