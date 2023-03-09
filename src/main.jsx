import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { StateContextProvider } from './context/StateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
      <BrowserRouter>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </BrowserRouter>
  </StateContextProvider>
)
