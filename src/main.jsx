import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Outlet } from 'react-router-dom'
import PageRouter from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <App />
      <PageRouter></PageRouter>
      <Outlet></Outlet>
    </BrowserRouter>
  </StrictMode>,
)
