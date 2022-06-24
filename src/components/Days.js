import "../index.css";

//Data from Today component
export default function Days({ weekday, temperature, imgUrl }) {
  //URL for the weather icon from the API
  const imgUrlBase = "https://openweathermap.org/img/wn/";

  return (
    <div className="col p-2 text-center">
      <div className="days py-2 p-0">
        <img
          className="days-icon p-2"
          src={`${imgUrlBase}${imgUrl}.png`}
          alt={weekday}
        />
        <h3 className="m-0 pt-1">{temperature}°C</h3>
        <p className="m-0 p-1 days-weekday">{weekday}</p>
      </div>
    </div>
  );
}
