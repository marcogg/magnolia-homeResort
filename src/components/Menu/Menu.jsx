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
                {/* Menu desktop */}
                <div className='menu_top'>
                  <Link to='/'>Proyecto</Link>
                  <Link to='/desarrollo'>Desarrollo </Link>
                  <Link to='/amenidades'>Amenidades </Link>
                  <Link to='/ubicacion'>Ubicación </Link>
                  <Link to='/contacto'>Haz una cita </Link>
                  <Link to='https://api.whatsapp.com/send?phone=522221209242&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20desarrollo%20de%20Magnolia'><img src='../whatsapp-outline-01.png' alt='Whatsapp' style={{ width: '47px !important' }} /></Link>
                </div>

                <div id='myNav' className={`overlay ${isMenuActive ? 'menu_width' : ''}`}>
                  {/* Menu Mobile */}
                  <div className='overlay-content menu_mobile'>
                    <Link to='/'>Proyecto</Link>
                    <Link to='/desarrollo'>Desarrollo </Link>
                    <Link to='/amenidades'>Amenidades </Link>
                    <Link to='/ubicacion'>Ubicación </Link>
                    <Link to='/contacto'>Haz una cita </Link>
                  </div>
                </div>
              </div>
              {/* <Link to='/'>
                <span className='navbar-brand'>
                  Inicio
                </span>
              </Link> */}
              {/* <div className='user_option'>
                <Link className='cta to-left' to='/contacto'>
                  Haz una cita
                </Link>
              </div> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Menu
