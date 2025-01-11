import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './auth/Login'

const Authentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return <>{!isAuthenticated ? <Login onLogin={handleLogin} /> : <App />}</>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authentication />
    {/* <App /> */}
  </StrictMode>
)
