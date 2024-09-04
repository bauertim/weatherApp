import CityWeather from "./components/CityWeather";
import InputForm from "./components/InputForm";
import PreviousSearch from "./components/PreviousSearch";

function App() {
  return (
    <main className="flex flex-col bg-slate-200 text-white px-6 h-svh">
      <InputForm />
      <CityWeather />
      <PreviousSearch />
    </main>
  );
}

export default App;
