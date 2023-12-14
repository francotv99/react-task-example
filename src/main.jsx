import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContexprovider } from './context/TaskContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContexprovider>
      <App />
    </TaskContexprovider>
  </React.StrictMode>,
)
