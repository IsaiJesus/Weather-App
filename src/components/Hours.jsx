import { Container } from "react-bootstrap";
import Hour from "./Hour";

export default function Hours({hours}) {
  return (
    <Container className="bg-dark py-2 px-0 mx-0">
      <div className="d-flex overflow-auto pb-1">
        {
          hours.map((hour, index) => (
            <Hour key={index} {...hour}/>
          ))
        }
      </div>
    </Container>
  );
}
