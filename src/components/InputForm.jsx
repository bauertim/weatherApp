import { Search } from "lucide-react";
import { useDataContext } from "../context/DataContext";
import { useFormContext } from "../context/FormContext";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { useEffect } from "react";

const InputForm = () => {
  const { setInputValue, inputValue } = useFormContext();
  const { setCity, city } = useDataContext();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputValue !== "") {
      setInputValue(city);
    }
  }, [city]);

  return (
    <>
      <div className="flex text-black justify-center flex-row items-center">
        <ReactGoogleAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
          onPlaceSelected={(place) => {
            if (place) {
              if (place.name) {
                setCity(place.name);
              } else if (place.formatted_address) {
                setCity(place.formatted_address);
              }
            }
          }}
          value={inputValue}
          onChange={handleInputChange}
          className="bg white shadow-md shadow-neutral-300 rounded-full p-2 pl-4 flex w-72 mt-6 mb-4"
        />
        <button className="ml-3 mt-1" onClick={() => setCity(inputValue)}>
          <Search size={24} />
        </button>
      </div>
      {/* Input form without google autocomplete  */}
      {/* <form
        onSubmit={handleSubmit}
        className="flex text-black justify-center flex-row items-center"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={inputValue}
          onChange={handleInputChange}
          className="bg white shadow-md shadow-neutral-300 rounded-full p-2 pl-4 flex w-72 mt-6 mb-4"
        />
        <button className="ml-3 mt-1" onClick={() => setCity(inputValue)}>
          Search
        </button>
      </form> */}
    </>
  );
};

export default InputForm;
