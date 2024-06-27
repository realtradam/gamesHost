import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'rsuite/dist/rsuite-no-reset.min.css'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
