import { Col } from "react-bootstrap";
import iconImg from "../assets/clear-sky.png";

export default function Day({icon, temperature, weekday}) {
  return (
    <Col className="bg-primary-subtle py-1 m-1 text-center rounded">
      <img className="p-1" style={{width: "80px"}} src={iconImg} alt="" />
      <h3 className="fw-bold fs-2">{temperature} °C</h3>
      <p className="mb-1 p-1">{weekday}</p>
    </Col>
  );
}
