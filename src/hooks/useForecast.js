import { useState } from "react";
import axios from "axios";

//helpers to fill data
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetails from "../helpers/getCurrentDayDetails";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const BASE_URL = "https://www.metaweather.com/api/location";
//API usage information from a youtube video of a weather forecast app
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  //States for each component
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  //Return the woeid, it's to know the id to find the city you're looking for 
  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });

    //If the search doesn't exist, return the Error component
    if (!data || data.length === 0) {
      setIsError('There is no such location');
      setIsLoading(false);
      return;
    }

    return data[0];
  };

  //Save the data for the searched city
  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    //If the search doesn't exist, return the Error component
    if (!data || data.length === 0) {
      setIsError('Something went wrong');
      setIsLoading(false);
      return;
    }
    return data;
  };

  //Get the city data for the week
  const gatherForecastData = (data) => {
    //Get the weather for the current day
    const currentDay = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title
    );
    //Get the details for the current day
    const currentDayDetails = getCurrentDayDetails(
      data.consolidated_weather[0]
    );
    //Get the weather for the upcoming days
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

    //Fill the setForecast with the data from the API
    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setIsLoading(false);
  };

  //The location is from the Form component
  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);
    const response = await getWoeid(location);
    //If there is not response or if there is not the id, return
    if (!response?.woeid) return;

    const data = await getForecastData(response.woeid);
    //If there is not data, return
    if (!data) return;

    gatherForecastData(data);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
