import { Container, Row, Spinner } from "react-bootstrap";

// Hooks
import useProjects from "../hooks/useProjects";

// Components
import Project from "./Project";
import Searcher from "./Searcher";

const ListProjects = () => {
  const { projects, loading } = useProjects();

  return (
    <Container>
      <Searcher />
      <Row className="mt-2">
        {loading && (
          <Spinner
            animation="grow"
            variant="warning"
            className="d-block m-auto"
          />
        )}

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
