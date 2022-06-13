import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './pages/home/App'
import Login from './pages/login/Login'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import { UserProvider } from './context/user/State'

const container = document.getElementById('root')
const root = createRoot(container)

console.log(`We are running this application in ${process.env.NODE_ENV} mode.`)
console.log(`Hello ${process.env.REACT_APP_HELLO} !!.`)

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)