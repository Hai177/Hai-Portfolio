import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ActiveSectionContextProvider from "./context/activeSection.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
    <App />
    </ActiveSectionContextProvider>
  </React.StrictMode>,
)
