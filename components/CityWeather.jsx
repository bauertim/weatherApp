

import { useEffect } from 'react'
import { useDataContext } from '../context/DataContext'
import axios from 'axios'

const CityWeather = () => {
  const { weatherData, city, setWeatherData, searchList, setSearchList } = useDataContext()

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER}`
      );
      setWeatherData(response.data);
      setSearchList([city, ...searchList.slice(0,4)]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city !== '')
    fetchData();
  }, [city]);


  return (
    <>
    {weatherData ? (
      <>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Feels like : {weatherData.main.feels_like}°C</p>
        <p>Temperatue Min : {weatherData.main.temp_min}°C</p>
        <p>Temperature Max : {weatherData.main.temp_max}°C</p>
        <p>Humidity : {weatherData.main.humidity}%</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Pressure : {weatherData.main.pressure}</p>
        <p>Wind Speed : {weatherData.wind.speed}m/s</p>
      </>
    ) : (
      <p>Search for weather in a city</p>
    )}
  </>
  )
}

export default CityWeather