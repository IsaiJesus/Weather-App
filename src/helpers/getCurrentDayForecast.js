import moment from 'moment';

//Data from custom hook, useForecast
//data is all the information and title is the lcoation that you are looking for    
//moment change dates from numbers to dates with text
const getCurrentDayForecast = (data, title) => ({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.the_temp),
    imgUrl: data.weather_state_abbr,
    weatherDescription: data.weather_state_name,
});

export default getCurrentDayForecast;