import { Col, Card, Button } from "react-bootstrap";

const Project = ({
  name,
  image,
  financingPercentage,
  profit,
  localization,
  initialDateFinancing,
}) => {
  return (
    <Col md={6} lg={3}>
      <Card className="cardProject mb-2">
        <h3 className="text-uppercase mt-1 text-center">{name}</h3>
        <p className="text-center">
          Estado: <span className="text-primary">Participación</span>{" "}
        </p>
        <Card.Img
          variant="top"
          className="imgProject"
          src={`https://api.unergy.io${image}`}
          alt={`Image ${name}`}
        />
        <div className="bodyCard">
          <p>{financingPercentage}</p>
          <p>{profit}</p>
          <p>{localization}</p>
          <p>{initialDateFinancing}</p>
          <Button className="btn btnProject">Ver detalles</Button>
        </div>
      </Card>
    </Col>
  );
};

export default Project;
