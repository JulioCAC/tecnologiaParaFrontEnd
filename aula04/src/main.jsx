import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppExercio02 from './AppExercio02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppExercio02/>
  </StrictMode>,
)
