// Components
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center ">
          <img src="src/img/unergy.png" alt="Image Unergy" className="logo" />
          <h1 className="mb-0 text-center">Proyectos</h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
