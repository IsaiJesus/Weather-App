import { useState } from "react";
import axios from "axios";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetails from "../helpers/getCurrentDayDetails";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";
import formattedDate from "../helpers/formattedDate";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = "?key=6d2fe9f4352346dbbba14010231510";

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getForecastData = async (location) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `${BASE_URL}${API_KEY}&q=${location}&days=8&aqi=no&alerts=no`
      );
      return data;
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      return;
    }
  };

  const submitRequest = async (location) => {
    const data = await getForecastData(location);
    if (!data) {
      setIsLoading(false);
      return;
    } else {
      setIsLoading(false);

      const date = formattedDate(data.current.last_updated);
      const currentDay = getCurrentDayForecast(
        data.current.condition,
        data.current,
        data.location,
        date
      );

      const currentDayDetails = getCurrentDayDetails(
        data.current,
        data.forecast
      );

      const upcomingDays = getUpcomingDaysForecast(data.forecast.forecastday);

      setForecast({ currentDay, currentDayDetails, upcomingDays });
    }
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
