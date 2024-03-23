import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextFunction from './context/ContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextFunction>
    <App />
  </ContextFunction>
)
