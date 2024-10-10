import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import HomePage from './pages/home'

const mount: HTMLElement = document.getElementById('mount')!

ReactDOM.createRoot(mount).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)
