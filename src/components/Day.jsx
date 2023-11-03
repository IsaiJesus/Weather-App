import { Col } from "react-bootstrap";
import imageAssociation from "../helpers/imageAssociation";

export default function Day({icon, temp, weekday,}) {
  const iconImg = imageAssociation(icon);

  return (
    <Col className=" bg-primary-subtle p-1 m-1 text-center rounded" style={{minWidth: "160px"}}>
      <img className="px-1 py-2" style={{width: "100px"}} src={iconImg} alt="Weather Icon" />
      <h4 className="fw-bold fs-2">{temp} °C</h4>
      <p className="mb-1 p-1 fw-medium fs-5">{weekday}</p>
    </Col>
  );
}
