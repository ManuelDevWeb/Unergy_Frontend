import { Container, Row } from "react-bootstrap";

// Hooks
import useProjects from "../hooks/useProjects";

// Components
import Project from "./Project";

const ListProjects = () => {
  const { projects } = useProjects();

  console.log(projects);

  return (
    <Container>
      <Row className="mt-2">
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.nombre_corto_l[0].text}
            image={project.project_file[0].nomfile_img}
            financingPercentage={project.porc_avance_financiacion}
            profit={project.rentabilidad}
            localization={project.id_caracterizacion.ciudad}
            initialDateFinancing={project.fecha_inicio_rentabilidad}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ListProjects;
