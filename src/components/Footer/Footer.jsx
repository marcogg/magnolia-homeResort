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
                  <div className='col-md-3 col-lg-3'>
                    <img src='../logo_magnolia_1tinta.svg' width={120} />
                  </div>
                  <div className='col-md-6 col-lg-4'>
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
                                window.location = 'mailto:cac@metropolis.mx'
                              }}
                            >cac@metropolis.mx
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
                  <div className='col-md-2 col-lg-4'>
                    <div className='info_link-box'>
                      <ul>
                        <li>
                          <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                          <Link to='/desarrollo'>Desarrollo</Link>
                        </li>
                        <li>
                          <Link to='/amenidades'>Amenidades</Link>
                        </li>
                        <li>
                          <Link to='/ubicacion'>Ubicación</Link>
                        </li>
                        <li>
                          <Link to='/contacto'>Contacto</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-1 '>
                    <div className='social_box'>
                      <Link to={'https://www.facebook.com/magnoliaresi'}>
                        <img src='../facebook.png' />
                      </Link>
                      <Link to={'https://www.instagram.com/magnolia.residences/'}>
                        <img src='../instagram.png' />
                      </Link>

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
            <div className='row'>
              <div className='col-lg-7 col-md-7 col-12'>
                <p>2024 © <span id='displayYear' /> Todos los derechos reservados</p>
              </div>
              <div className='col-lg-5 col-md-5 col-12'>
                <p>Consulta nuestro <Link onClick={(e) => {
                  e.preventDefault()
                  window.location = '../../AvisodePrivacidadMagnolia.pdf'
                }}><span className='text-beige'>Aviso de privacidad</span></Link></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
