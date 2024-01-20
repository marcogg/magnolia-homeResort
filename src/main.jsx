import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Amenidades from './Pages/Amenidades.jsx'
import './app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/amenidades',
    element: <Amenidades />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
