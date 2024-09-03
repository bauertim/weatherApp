import CityWeather from '../components/CityWeather'
import InputForm from '../components/InputForm'
import PreviousSearch from '../components/PreviousSearch'
import './App.css'

function App() {

  return (
    <main>
      <InputForm />
      <CityWeather />
      <PreviousSearch />
    </main>
  )
}

export default App
