import formattedDate from "./formattedDate";

const getUpcomingDaysForecast = (data) =>
  data.slice(1, 3).map((item) => ({
    icon: item.day.condition.code,
    temp: item.day.avgtemp_c,
    weekday: formattedDate(item.date + ' 23:59')
  }));

export default getUpcomingDaysForecast;
