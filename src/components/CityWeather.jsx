import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";
import axios from "axios";

const CityWeather = () => {
  const { weatherData, city, setWeatherData, searchList, setSearchList } =
    useDataContext();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }`
      );
      setWeatherData(response.data);
      setSearchList([response.data, ...searchList.slice(0, 4)]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city !== "") fetchData();
  }, [city]);

  return (
    <div>
      <div className="flex flex-col bg-blue-500 text-white rounded-xl p-4 font-light sm:w-[600px] mx-auto bg-gradient-to-r from-blue-400 to-blue-500">
        {weatherData ? (
          <div className="flex flex-row items-center justify-center sm:justify-between sm:ml-8 ">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl mt-1">{weatherData.name}</h2>

              <p className="text-5xl">{weatherData.main.temp.toFixed(1)}°</p>
              <p className="mt-1">{weatherData.weather[0].description}</p>
              <div className="flex flex-row gap-5 text-sm">
                <p>H : {weatherData.main.temp_max.toFixed(0)}°C</p>
                <p>L : {weatherData.main.temp_min.toFixed(0)}°C</p>
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
            </div>
            <div className="hidden sm:flex"></div>
            <div className="text-sm hidden sm:flex sm:flex-col sm:mr-4 sm:mt-4">
              <p>Feels like : {weatherData.main.feels_like}°C</p>
              <p>Humidity : {weatherData.main.humidity}%</p>
              <p>Pressure : {weatherData.main.pressure}</p>
              <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </div>
          </div>
        ) : (
          <p>Search for weather</p>
        )}
      </div>
    </div>
  );
};

export default CityWeather;
