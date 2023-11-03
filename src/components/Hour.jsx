import { Col } from "react-bootstrap";
import imageAssociation from "../helpers/imageAssociation";

export default function Hour({ icon, temperature, time }) {
  const iconImg = imageAssociation(icon);

  return (
    <Col
      className=" bg-primary-subtle py-1 m-1 text-center rounded"
      style={{ minWidth: "140px" }}
    >
      <img
        className="px-1 py-2"
        src={iconImg}
        alt="Weather Icon"
        style={{ width: "80px" }}
      />
      <h4 className="fw-bold fs-2 mt-1 mb-2">{temperature} °C</h4>
      <p className="my-1 p-0 fw-medium fs-5">{time}</p>
    </Col>
  );
}
