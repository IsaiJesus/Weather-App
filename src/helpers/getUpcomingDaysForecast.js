import formattedDate from "./formattedDate";

const getUpcomingDaysForecast = (data) =>
  data.slice(1, 7).map((day) => ({
    icon: day.day.condition.code,
    temperature: day.hour[12].temp_c,
    weekday: formattedDate(day.date)
  }));

export default getUpcomingDaysForecast;