const getCurrentDayForecast = (days, today, dayName, date, temp) => ({
  weekday: dayName,
  date: date,
  location: today.name,
  temperature: temp,
  imgUrl: today.weather[0].icon,
  weatherDescription: days.weather[0].main,
});

export default getCurrentDayForecast;
