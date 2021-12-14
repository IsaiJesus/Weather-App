import "../index.css";
import Days from "../components/Days";
import Details from "./Details";

//Data from App component
export default function Today({ currentDay, currentDayDetails, days }) {
  const imgUrlBase = "https://www.metaweather.com/static/";

  return (
    <>
      <div className="today container p-3">
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col text-center align-items-center">
            <img
              className="weather-icon"
              src={`${imgUrlBase}img/weather/${currentDay.imgUrl}.svg`}
              alt={currentDay.weekday}
            />
            <h3 className="m-0 pt-3 pb-1">{currentDay.weekday}</h3>
            <p className="m-0 current-description">
              {currentDay.weatherDescription}
            </p>
          </div>
          <div className="col text-center d-flex flex-column justify-content-center">
            <h1 className="m-0 pb-1 current-degree">
              {currentDay.temperature}°C
            </h1>
            <div className="d-flex pb-2 align-items-center justify-content-center text-center">
              <i className="pe-2 fas fa-map-marker-alt"></i>
              <h2 className="m-0">{currentDay.location}</h2>
            </div>
            <p className="current-date m-0">{currentDay.date}</p>
          </div>
        </div>
        <div className="row mt-4 mt-sm-2 px-1 px-sm-4">
          {currentDayDetails.map(item => (
            <Details key={item.name} {...item} />
          ))}
        </div>
      </div>
      <div className="container mt-4 mb-2">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0">
          {days.map(day => (
            <Days key={day.weekday} {...day} />
          ))}
        </div>
      </div>
    </>
  );
}
