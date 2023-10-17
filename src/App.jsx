import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Header from "./components/Header";
import Forecast from "./components/Forecast";
import Days from "./components/Days";
import Footer from "./components/Footer";
import useForecast from "./hooks/useForecast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const handleSubmit = (value) => {
    submitRequest(value);
  };

  useEffect(() => {
    submitRequest("Mexico City");
  }, []);

  return (
    <div className="bg-dark">
      <Container className="px-3">
        <Col style={{minHeight: "100vh"}}>
          <Header submitSearch={handleSubmit} isLoading={isLoading} />
          {forecast && !isError ? (
            <>
              <Forecast
                forecast={forecast.currentDay}
                details={forecast.currentDayDetails}
              />
              <Days days={forecast.upcomingDays}/>
            </>
          ) : (
            <div
              className="bg-primary-subtle p-3 rounded-4 d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <h1 className="fs-2 text-center fw-bold">
                Something went wrong, type another location or check your internet connection. 🤕
              </h1>
            </div>
          )}

          <Footer />
        </Col>
      </Container>
    </div>
  );
}

export default App;
