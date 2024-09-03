import React from 'react'
import { useFormContext } from '../context/FormContext'
import { useDataContext } from '../context/DataContext'

const PreviousSearch = () => {
  const { setInputValue } = useFormContext()
  const { searchList, setCity } = useDataContext()
  return (
    <div>
      {searchList.length > 0 && <h2>Previous Searches</h2>} 
      <ul>
        {searchList.map((search, index) => (
          <li key={index + search}>
            <button onClick={() => { setCity(search);
              setInputValue(search)
            }}>
            {search}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PreviousSearch