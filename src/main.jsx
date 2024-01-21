// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Amenidades from './Pages/Amenidades'
import Contacto from './Pages/Contacto'
import Desarrollo from './Pages/Desarrollo'
import Galeria from './Pages/Galeria'
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
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/desarrollo',
    element: <Desarrollo />
  },
  {
    path: '/galeria',
    element: <Galeria />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
