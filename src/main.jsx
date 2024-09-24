import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Amenidades from './Pages/Amenidades'
import { Contacto } from './Pages/Contacto'
import Desarrollo from './Pages/Desarrollo'
import './app.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Gracias from './Pages/Gracias.jsx'
import Ubicacion from './Pages/Ubicacion.jsx'

const router = createBrowserRouter(
  [
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
      path: '/ubicacion',
      element: <Ubicacion />
    },
    {
      path: '/gracias-por-contactarnos',
      element: <Gracias />,
      errorElement: <Gracias />
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
