import { useDataContext } from "../context/DataContext";
import { useFormContext } from "../context/FormContext";

const InputForm = () => {
  const { setInputValue, inputValue } = useFormContext();
  const { setCity } = useDataContext();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
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
      </form>
    </>
  );
};

export default InputForm;
