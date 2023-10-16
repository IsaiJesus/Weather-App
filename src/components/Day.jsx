import { Col } from "react-bootstrap";
import imageAssociation from "../helpers/imageAssociation";

export default function Day({icon, temperature, weekday}) {

  const iconImg = imageAssociation(icon);

  return (
    <Col className=" bg-primary-subtle py-1 m-1 text-center rounded" style={{minWidth: "160px"}}>
      <img className="p-1" style={{width: "80px"}} src={iconImg} alt="Weather Icon" />
      <h3 className="fw-bold fs-2">{temperature} °C</h3>
      <p className="mb-1 p-1">{weekday}</p>
    </Col>
  );
}
