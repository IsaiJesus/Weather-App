const getCurrentDayForecast = (condition, current, location, date) => ({
  icon: condition.code,
  temp: current.temp_c,
  text: condition.text,
  city: `${location.name}, ${location.country}`,
  date: date
});

export default getCurrentDayForecast;