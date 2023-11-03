import formattedTime from "./formattedTime";

const getUpcomingHoursForecast = (data) =>
  data.map((item) => ({
    icon: item.condition.code,
    temperature: item.temp_c,
    time: formattedTime(item.time),
  }));

export default getUpcomingHoursForecast;
