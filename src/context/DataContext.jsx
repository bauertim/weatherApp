import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [city, setCity] = useState("Ljubljana");
  const [forecastData, setForecastData] = useState(null);

  return (
    <DataContext.Provider
      value={{
        weatherData,
        setSearchList,
        setWeatherData,
        searchList,
        city,
        setCity,
        forecastData,
        setForecastData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === null) {
    throw Error("cant use it outside of Datacontextprovider");
  }
  return context;
}
