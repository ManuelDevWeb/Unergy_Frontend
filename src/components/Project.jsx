import { Col, Card, Button, Row } from "react-bootstrap";
import {
  FaSearchLocation,
  FaCalendarDay,
  FaPercentage,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Project = ({
  name,
  image,
  financingPercentage,
  profit,
  localization,
  initialDateFinancing,
}) => {
  const percentaje = financingPercentage.toFixed(1);
  const profitRounded = profit.toFixed(3);

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
        <Row className="bodyCard">
          <Col xs={6} className="flex-column mb-1">
            <p className="mb-0">
              <FaPercentage />
              <span>{percentaje}</span>
            </p>
            <p className="mb-0 text-secondary labelCard">Financiacion</p>
          </Col>

          <Col xs={6} className="flex-column mb-1">
            <p className="mb-0">
              <FaMoneyBillAlt />
              <span>{profitRounded}</span>
            </p>
            <p className="mb-0 text-secondary labelCard">Rentabilidad</p>
          </Col>

          <Col xs={6} className="flex-column  mb-1">
            <p className="mb-0">
              <FaSearchLocation />
              <span>{localization}</span>
            </p>
            <p className="mb-0 text-secondary labelCard">Localizacion</p>
          </Col>

          <Col xs={6} className="flex-column">
            <p className="mb-0">
              <FaCalendarDay />
              <span>{initialDateFinancing}</span>
            </p>
            <p className="mb-0 text-secondary labelCard">Fecha Inicio</p>
          </Col>

          <Button className="btn btnProject">Ver detalles</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default Project;
