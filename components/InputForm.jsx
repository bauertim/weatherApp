import { useDataContext } from '../context/DataContext';
import { useFormContext } from '../context/FormContext';

const InputForm = () => {
  const { setInputValue, inputValue } = useFormContext()
  const { setCity } = useDataContext()
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={() => setCity(inputValue)}>Get Weather</button>
    </form>
  )
}

export default InputForm


