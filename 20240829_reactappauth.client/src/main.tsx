import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/WeatherForecat/App.tsx'
import './index.css'
import Login from './components/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Login/>
  </StrictMode>
)
