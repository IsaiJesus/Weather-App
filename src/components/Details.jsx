import { Col, Row } from "react-bootstrap";

export default function Details({name, value, unit}) {
  return (
    <Row className="mb-1 px-4 d-flex align-items-center">
      <Col className="text-start fw-medium p-0">{name}</Col>
      <Col className="text-end fw-medium p-0">{value} {unit}</Col>
    </Row>
  );
}
