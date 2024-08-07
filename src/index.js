import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './pages/home/App'
import Login from './pages/login/Login'
import Confirmation from './pages/confirmation/Confirmation'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import { UserProvider } from './context/user/State'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/confirmemail" element={< Confirmation />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)