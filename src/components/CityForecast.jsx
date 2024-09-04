import { useDataContext } from "../context/DataContext";

const CityForecast = () => {
  const { forecastData } = useDataContext();
  return (
    <div>
      <div className="my-4 flex flex-row overflow-x-auto bg-blue-900 rounded-lg p-2 sm:w-[600px] mx-auto">
        {forecastData &&
          forecastData.list.map((hours, index) => (
            <div key={index} className="mr-4">
              <p className="text-center text-sm">
                {hours.dt_txt.split(" ")[1].split(":")[0]}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${hours.weather[0].icon}.png`}
                alt="weather icon"
              />
              <p>{hours.main.temp.toFixed(1) + "°"}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CityForecast;
