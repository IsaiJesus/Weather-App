//Order of details of the current day

const currentDayForecast = (data) => [
  {
    name: "Visibility",
    value: data.visibility/1000,
    unit: "km",
  },
  {
    name: "Humidity",
    value: data.main.humidity,
    unit: "%",
  },
  {
    name: "Wind",
    value: Math.round(data.wind.speed),
    unit: "km/h",
  },
  {
    name: "Air pressure",
    value: data.main.pressure,
    unit: "mb",
  },
  {
    name: "Max temp",
    value: Math.round(data.main.temp_max),
    unit: "°C",
  },
  {
    name: "Min temp",
    value: Math.round(data.main.temp_min),
    unit: "°C",
  },
];

export default currentDayForecast;
