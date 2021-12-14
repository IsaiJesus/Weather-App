import moment from 'moment';

//This substring reduces the date to three letters
const getWeekday = (date) => moment(date).format('dddd').substring(0, 3);

//Fill the data for each object
const getUpcomingDaysForecast = (data) =>
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.max_temp),
        weekday: getWeekday(day.applicable_date),
    }));

export default getUpcomingDaysForecast;