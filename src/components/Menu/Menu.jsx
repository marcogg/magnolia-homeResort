import { Link } from 'react-router-dom'
import { useState } from 'react'
import '@/app.scss'

const Menu = () => {
  // setting state for menu
  const [isMenuActive, setMenuActive] = useState(false)

  // navigation  menu js
  const openNav = () => {
    setMenuActive(!isMenuActive)
  }

  return (
    <>
      <header className='header_section'>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-lg custom_nav-container d-block'>
            <div className='main_nav_menu'>
              <div className='fk_width'>
                <div className={`custom_menu-btn ${isMenuActive ? 'menu_btn-style' : ''}`}>
                  <button onClick={openNav}>
                    <span className='s-1'> </span>
                    <span className='s-2'> </span>
                    <span className='s-3'> </span>
                  </button>
                </div>
                <div id='myNav' className={`overlay ${isMenuActive ? 'menu_width' : ''}`}>
                  <div className='overlay-content'>
                    <Link to='/'>Inicio <span className='sr-only'>(current)</span></Link>
                    <Link to='/desarrollo'>Desarrollo </Link>
                    <Link to='/galeria'>Galería </Link>
                    <Link to='/amenidades'>Amenidades </Link>
                    <Link to='/contacto'>Haz una cita </Link>
                  </div>
                </div>
              </div>
              <Link to='/'>
                <span className='navbar-brand'>
                  Inicio
                </span>
              </Link>
              <div className='user_option'>
                <Link to='/contacto'>
                  Haz una cita
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Menu
