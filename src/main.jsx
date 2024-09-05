import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Demo from './demo.jsx'
import SolarEclipse from './components/SolarEclipse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SolarEclipse/>
  </StrictMode>,
)
