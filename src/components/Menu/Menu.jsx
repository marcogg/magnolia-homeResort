const Menu = () => {
  return (
    <>
      {/* header menu */}
      <header className='header_section'>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-lg custom_nav-container d-block'>
            <div className='main_nav_menu'>
              <div className='fk_width'>
                <div className='custom_menu-btn'>
                  <button onClick='openNav()'>
                    <span className='s-1'> </span>
                    <span className='s-2'> </span>
                    <span className='s-3'> </span>
                  </button>
                </div>
                <div id='myNav' className='overlay'>
                  <div className='overlay-content'>
                    <a className href='index.html'>Inicio <span className='sr-only'>(current)</span></a>
                    <a className href='about.html'>Desarrollo </a>
                    <a className href='gallery.html'>Galería </a>
                    <a className href='blog.html'>Amenidades </a>
                    <a className href='testimonial.html'>Haz una cita </a>
                  </div>
                </div>
              </div>
              <a className='navbar-brand' href='index.html'>
                <span>
                  Magnolia
                </span>
                <span className='light-300'>Home Resort</span>
              </a>
              <div className='user_option'>
                <a href='#'>
                  login
                </a>
                <form className='form-inline '>
                  <button className='btn  nav_search-btn' type='submit' />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </>
  )
}

export default Menu
