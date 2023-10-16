const currentDayForecast = (data, max_min) => [
  {
    name: "Max temperature",
    value: max_min.forecastday[0].day.maxtemp_c,
    unit: "°C",
  },
  {
    name: "Min temperature",
    value: max_min.forecastday[0].day.mintemp_c,
    unit: "°C",
  },
  {
    name: "Feels like",
    value: data.feelslike_c,
    unit: "°C",
  },
  {
    name: "Visibility",
    value: data.vis_km,
    unit: "km",
  },
  {
    name: "Humidity",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "Wind",
    value: data.wind_kph,
    unit: "km/h",
  },
  {
    name: "Air pressure",
    value: data.pressure_mb,
    unit: "mb",
  }
];

export default currentDayForecast;
