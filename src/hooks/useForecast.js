import { useState } from "react";
import axios from "axios";

//helpers to fill data
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetails from "../helpers/getCurrentDayDetails";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const CITY_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const KEY_ID = "&appid=eb42031611601a1401c1e7423f7ce112";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const EXCLUDE = "&exclude=current,hourly,minutely,alerts&units=metric";

const useForecast = () => {
  //States for each component
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  //Return the woeid, it's to know the id to find the city you're looking for 
  const getCity = async (location) => {
    try {
      const { data } = await axios(`${CITY_URL}${location}&units=metric${KEY_ID}`);
      return data;
    } catch (error) {
      setIsError('There is no such location, try again.');
      setIsLoading(false);
      return;
    }
  };

  //Save the data for the searched city
  const getForecastData = async (lat, lon) => {
    try {
      const { data } = await axios(`${FORECAST_URL}lat=${lat}&lon=${lon}${EXCLUDE}${KEY_ID}`);
      return data;
    } catch (error) {
      setIsError('Something went wrong.');
      setIsLoading(false);
      return;
    }
  };

  //Get the city data for the week
  const gatherForecastData = (data, res) => {

    var dayName = new Date(res.dt * 1000).toLocaleDateString("en", {
      weekday: "long",
    });
    var monthDate = new Date(res.dt * 1000).toLocaleDateString("en", {
      month: "long", 
    });
    var dayDate = new Date(res.dt * 1000).toLocaleDateString("en", {
      day: "numeric", 
    });
    var date = monthDate + " " + dayDate;

    var temp = res.main.temp.toFixed(0);
    //Get the weather for the current day
    const currentDay = getCurrentDayForecast(
      data.daily[0],
      res,
      dayName,
      date,
      temp
    );

    //Get the details for the current day
    const currentDayDetails = getCurrentDayDetails(
      res
    );

    //Get the weather for the upcoming days
    const upcomingDays = getUpcomingDaysForecast(data.daily);

    //Fill the setForecast with the data from the API
    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setIsLoading(false);
  };

  //The location is from the Form component
  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);
    const res = await getCity(location);
    //If there is not response or if there is not the id, return
    if (!res?.coord) return;

    const lat = res.coord.lat;
    const lon = res.coord.lon;
    const data = await getForecastData(lat, lon);
    //If there is not data, return
    if (!data) return;

    //data is the next seven days forecast and res is the current forecast that includes the name of the city 
    gatherForecastData(data, res);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
