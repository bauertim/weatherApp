import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormContextProvider } from '../context/FormContext.jsx'
import { DataContextProvider } from '../context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </FormContextProvider>
  </StrictMode>,
)
