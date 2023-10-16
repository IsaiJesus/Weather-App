import { Stack } from "react-bootstrap";
import Details from "./Details";
import { FaMapMarkerAlt } from "react-icons/fa";
import icon from "../assets/clear-sky.png";

export default function Forecast({ forecast, details }) {
  return (
    <Stack className="bg-primary-subtle rounded-4 mb-1 align-items-center">
      <main className="w-100 p-3 d-flex flex-column align-items-center text-center">
        <div style={{ height: "150px" }}></div>
        <img
          className="m-2 position-absolute z-0"
          style={{ width: "220px" }}
          src={icon}
          alt=""
        />
        <h2
          className="fw-bold z-1 mb-1"
          style={{ fontSize: "5rem", letterSpacing: "-2px" }}
        >
          {forecast.temp} °C
        </h2>
        <p className="mb-3 fw-medium fs-5">{forecast.text}</p>
        <h3 className="fs-2 z-1 text-center fw-bold d-flex align-items-center">
          {forecast.city} <FaMapMarkerAlt className="ms-1" />
        </h3>
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
