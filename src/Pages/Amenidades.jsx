import Menu from '../components/Menu/Menu'
import '../components/VRtour/vrtour.js'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import Glider from 'react-glider'
import 'glider-js/glider.min.js'
import 'glider-js/glider.min.css'

const Amenidades = () => {

  useEffect(() => {
      const script = document.createElement('script')
      script.src = 'https://app.cloudpano.com/public/shareScript.js'
      script.async = true
      script.setAttribute('data-short', 'Zr7sc28jp')
      script.width = '100%'
      script.height = '500px'
      const element = document.getElementById('tour');
      element.appendChild(script);

  },[])

  return (
    <>
      <Menu />
      <section>
        <div className='container-full amenidades-bg'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='title header text-white line-height-compact'>
                Amenidades
              </h2>
              <h2 className='allison x-10 text-beige text-center line-height-compact'>del desarrollo</h2>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row my-5 align-items-center'>
          <div className='col-lg-6 col-md-6 col-6'>
            <h2 className='line-height-compact'>Conoce la mejor Casa Club <br /><span className='allison x-6 text-blue'>de Puebla</span></h2>
          </div>
          <div className='col-lg-6 col-md-6 col-6'>
            <p>Nuestro concepto Home Resort, redefine la idea de vivir en un condominio.
            Descubre comó puedes superar tus expectativas disfrutando de todas las comodidades y servicios de un hotel de 5 estrellas sin salir de casa. 
            Conoce la mejor casa club de Puebla, cada rincón ha sido diseñado para ofrecerte una experiencia cómoda y funcional, cuenta con todas las amenidades y servicios que requiere la vida moderna.</p>
          </div>
        </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12'>
            <div id='tour' />
          </div>
        </div>
        {/* Carousel Amenidades */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <Glider
                draggable
                hasArrows
                hasDots
                slidesToShow={4}
                slidesToScroll={1}
              >
              {/* New Card */}
                  <div>
                    <div className='card'>
                      <img src='../carousel-amenities/ajedrez-gigante.jpg' />
                      <div className='card-body'>
                        <p className='card-text'>Ajedrez Gigante</p>
                      </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/areas-verdes.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Áreas Verdes</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/carril-nado.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Carril de nado</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/gym.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Gimnasio</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/jacuzzi-spa.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Spa con jacuzzi</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/juegos-infantiles.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Juegos Infantiles</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/juegos-infantiles-arenero.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Arenero</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/ludoteca.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Ludoteca</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/restaurante.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Restuarante</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/spa.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Sauna en Spa</p>
                        </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                        <img src='../carousel-amenities/teens-lounge.jpg' />
                        <div className='card-body'>
                          <p className='card-text'>Teens lounge</p>
                        </div>
                    </div>
                  </div>
              </Glider>
            </div>
          </div>
        </div>
      </section>
      {/* Servicios */}
      <section className='bg-blue'>
        <div className='container'>
        <div className='row pt-5 mt-5'>
          <div className='col-lg-12 col-md-12 col-12'>
            <h2 className='allison x-10 text-beige text-center'>Servicios</h2>
            <p className='text-center mb-5'>Además cuentas con los servicios <b>roomservice</b> que necesitas para no salir de casa,</p>
          </div>
          <div className='col-lg-12 col-md-12 col-12'>
              <Glider
                draggable
                hasArrows
                hasDots
                slidesToShow={3}
                slidesToScroll={1}
              >
              {/* New Card */}
                  <div>
                    <div className='card'>
                      <img src='../carousel-services/bolero.jpg' />
                      <div className='card-body'>
                        <p className='card-text'>Bolero</p>
                      </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                      <img src='../carousel-services/estetica.jpg' />
                      <div className='card-body'>
                        <p className='card-text'>Estética</p>
                      </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                      <img src='../carousel-services/lavado-autos.jpg' />
                      <div className='card-body'>
                        <p className='card-text'>Lavado de autos</p>
                      </div>
                    </div>
                  </div>
                  {/* New Card */}
                  <div>
                    <div className='card'>
                      <img src='../carousel-services/tienda.jpg' />
                      <div className='card-body'>
                        <p className='card-text'>Tienda</p>
                      </div>
                    </div>
                  </div>
              </Glider>
            </div>

        </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Amenidades
