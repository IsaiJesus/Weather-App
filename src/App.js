import Form from "./components/Form";
import Today from "./components/Today";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import useForecast from "./hooks/useForecast";
import "./index.css";
import Reload from "./components/Reload";

function App() {
  //Get the states from the custom hook, useForecast
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  //Get the value from the component Form and send it to the custom hook
  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <div className="background d-flex flex-column align-items-center justify-content-between">
      <div className="container p-3 d-flex flex-column align-items-center justify-content-between">
        <Header />
        {forecast ? (
          <>
            <Today
              currentDay={forecast.currentDay}
              currentDayDetails={forecast.currentDayDetails}
              days={forecast.upcomingDays}
            />
            <Reload />
          </>
        ) : (
          <>
            {!isLoading && <Form submitSearch={onSubmit} />}
            {isError && <Error message={isError}/>}
            {isError && <Reload />}
            {isLoading && <Loader />}
          </>
        )}
      </div>
      {!forecast && (
        <svg
          xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#09a129"
            fillOpacity="1"
            d="M0,160L40,154.7C80,149,160,139,240,112C320,85,400,43,480,37.3C560,32,640,64,720,90.7C800,117,880,139,960,133.3C1040,128,1120,96,1200,101.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <path
            fill="#38b000"
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,165.3C384,192,480,256,576,250.7C672,245,768,171,864,160C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      )}
    </div>
  );
}

export default App;
