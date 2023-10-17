import formattedDate from "./formattedDate";

const getUpcomingDaysForecast = (data) =>
  data.slice(2, 8).map((item) => ({
    icon: item.hour[12].condition.code,
    temperature: item.hour[12].temp_c,
    weekday: formattedDate(item.date)
  }));

export default getUpcomingDaysForecast;