import { Stack } from "react-bootstrap";
import Details from "./Details";
import { FaMapMarkerAlt } from "react-icons/fa";
import imageAssociation from "../helpers/imageAssociation";

export default function Forecast({ forecast, details }) {

  const icon = imageAssociation(forecast.icon);

  return (
    <Stack className="bg-primary-subtle rounded-4 mb-1 align-items-center">
      <main className="w-100 p-3 d-flex flex-column align-items-center text-center">
        <div style={{ height: "140px" }}></div>
        <img
          className="m-2 position-absolute z-0"
          style={{ width: "220px" }}
          src={icon}
          alt="Weather Icon"
        />
        <h1
          className="fw-bold z-1 mb-1"
          style={{ fontSize: "5rem", letterSpacing: "-2px" }}
        >
          {forecast.temp} °C
        </h1>
        <p className="mt-1 mb-3 fw-medium fs-5">{forecast.text}</p>
        <h2 className="fs-1 mb-3 z-1 text-center fw-bold d-flex align-items-center">
          {forecast.city} <FaMapMarkerAlt className="ms-1" />
        </h2>
        <p className="fs-4 fw-medium mb-5 z-1">{forecast.date}</p>
        <div className="w-100">
          {details.map((item) => (
            <Details key={item.name} {...item} />
          ))}
        </div>
      </main>
    </Stack>
  );
}
