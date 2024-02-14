import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <section className='info_section '>
          <div className='info_container layout_padding-top'>
            <div className='container'>
              <div className='heading_container'>
                <h2>
                  Contacto
                </h2>
              </div>
              <div className='info_main'>
                <div className='row'>
                  <div className='col-md-6 col-lg-6'>
                    <div className='info_contact '>
                      <a href='#' className='link-box'>
                        <div className='img-box'>
                          <span className='material-symbols-outlined'>location_on</span>
                        </div>
                        <div className='detail-box'>
                          <h6>
                            Blvd. de Los Lagos 201, Lomas de Angelópolis, Cascatta, Puebla
                          </h6>
                        </div>
                      </a>
                      <a href='#' className='link-box'>
                        <div className='img-box'>
                          <span className='material-symbols-outlined'>mail</span>
                        </div>
                        <div className='detail-box'>
                          <h6>
                            <button
                              className='btn-contact' onClick={(e) => {
                                e.preventDefault()
                                window.location = 'mailto:cac@metropolis.com'
                              }}
                            >cac@metropilis.com
                            </button>
                          </h6>
                        </div>
                      </a>
                      <a href='#' className='link-box'>
                        <div className='img-box'>
                          <span className='material-symbols-outlined'>call</span>
                        </div>
                        <div className='detail-box'>
                          <h6>
                            <button
                              className='btn-contact' onClick={(e) => {
                                e.preventDefault()
                                window.location = 'tel:2224540321'
                              }}
                            >22 2454 0321
                            </button>
                          </h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='col-md-2 col-lg-3'>
                    <div className='info_link-box'>
                      <ul>
                        <li className=' '>
                          <Link to='/desarrollo'>Desarrollo</Link>
                        </li>
                        <li className>
                          <Link to='/amenidades'>Amenidades</Link>
                        </li>
                        <li className>
                          <Link to='/galeria'>Galería</Link>
                        </li>
                        <li className>
                          <Link to='/contacto'>Contacto</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-6 '>
                    <div className='social_box'>
                      <Link>
                        <img src='../facebook.png' alt />
                      </Link>
                      <a href='#'>
                        <img src='../instagram.png' alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info section */}
        {/* footer section */}
        <footer className='footer_section '>
          <div className='container'>
            <p>2024 © <span id='displayYear' /> Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer