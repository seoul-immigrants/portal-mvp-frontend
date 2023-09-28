import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/Roboto.css'
import './assets/css/SpoqaHanSansNeo.css'
import './assets/css/color.css'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

// axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
