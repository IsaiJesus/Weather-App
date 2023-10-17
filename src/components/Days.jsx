import { Container } from "react-bootstrap";
import Day from "./Day";

export default function Days({days}) {
  return (
    <Container className="bg-dark py-2 px-0 mx-0">
      <div className="d-flex flex-wrap">
        {
          days.map((day, index) =>(
            <Day key={index} {...day}/>
          ))
        }
      </div>
    </Container>
  );
}
