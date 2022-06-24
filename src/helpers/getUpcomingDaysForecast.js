const dayName = (date) => new Date(date * 1000).toLocaleDateString("en", {
  weekday: "short",
});

//Fill the data for each object
const getUpcomingDaysForecast = (data) =>
  data.slice(1, 7).map((day) => ({
    imgUrl: day.weather[0].icon,
    temperature: Math.round(day.temp.day),
    weekday: dayName(day.dt),
    key: day.dt,
  }));

export default getUpcomingDaysForecast;
