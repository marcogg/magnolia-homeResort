import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Desarrollo = () => {

  return (
    <>
      <section className='desarrollo layout_padding'>
        <div className='container-full'>
          <div className='row'>
            <div className='col-12'>
              <div className='bg-desarrollo'>
                <h2 className='title header allison'>Vive cada día</h2>
                <h3 className='subtitle header'>como si estuvieras de vacaciones</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* gallery section */}
      <section className='gallery_section layout_padding-top description'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 ml-auto'>
              <div className='heading_container'>
                <h2>
                  Tu <b>garden house</b> con vista al Parque de las Cascadas
                </h2>
                <p>
                  Ubicadas en la mejor reserva de Punta Cascatta, con una vista única al Parque de las Cascadas
                </p>
                <div className='row'>
                  <div />
                </div>

                <p>
                  Con un circuito de 2 mil metros cuadrados rodeado por lagos, cascada y amenidades como:
                  <ul>
                    <li>Cancha de pádel</li>
                    <li>Cancha de basquetbol</li>
                    <li>Cancha de voleibol de playa</li>
                    <li>Muro de escalar infantil</li>
                    <li>Arenero</li>
                    <li>Estacionamiento público</li>
                  </ul>

                  Disfruta de la naturaleza a unos pasos de tu residencia.
                </p>
              </div>
            </div>
            <div className='col-lg-7'>
              <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                  <div className='carousel-item active' data-bs-interval={10000}>
                    <img src='./../carousel/parque-cascadas.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item' data-bs-interval={2000}>
                    <img src='./../carousel/parque-cascadas-2.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item'>
                    <img src='./../carousel/parque-cascadas-3.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item'>
                    <img src='./../carousel/parque-cascadas-4.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item'>
                    <img src='./../carousel/parque-cascadas-5.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item'>
                    <img src='./../carousel/parque-cascadas-6.jpg' className='d-block w-100' />
                  </div>
                  <div className='carousel-item'>
                    <img src='./../carousel/parque-cascadas-7.jpg' className='d-block w-100' />
                  </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
                  <span className='carousel-control-prev-icon' aria-hidden='true' />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
                  <span className='carousel-control-next-icon' aria-hidden='true' />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end: park section */}
      </section>
      {/* Render */}
      <section>
        <div className='gallery_section container-full'>
          <div className='row'>
            <div className='render-vista' />

          </div>

        </div>
      </section>
      {/* end: render */}

      {/* Casa Club */}

      <section className='container'>
        <div className='row py-5'>
          <div className='col-6 py-5'>
            <h2 className='line-height-compact'><span className='text-blue light-300'>Redefinimos la idea</span><br /><span className='allison x-6'>de vivir en condominio</span></h2>
          </div>
          <div className='col-6'>
            <p>Descubre comó puedes superar tus expectativas disfrutando de todas las comodidades y servicios de un hotel de 5 estrellas sin salir de casa.</p>
            <p> Conoce la mejor casa club de Puebla, cada rincón ha sido diseñado para ofrecerte una experiencia cómoda y funcional, cuenta con todas las amenidades y servicios que requiere la vida moderna.</p>
          </div>
        </div>
        {/* Carousel */}
        <div className='row'>
          <div id='carouselAmenitiesInterval' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                  <div className='carousel-item active' data-bs-interval={10000}>
                    {/* Card */}
                    <div className="card" style={{width: '18rem'}}>
                      <img src="../amenities/alberca.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">Alberca exterior con bar</p>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item' data-bs-interval={2000}>
                   
                  </div>
                  <div className='carousel-item'>
                    
                  </div>
                  <div className='carousel-item'>
                    
                  </div>
                  <div className='carousel-item'>
                    
                  </div>
                  <div className='carousel-item'>
                    
                  </div>
                  <div className='carousel-item'>
                    
                  </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
                  <span className='carousel-control-prev-icon' aria-hidden='true' />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
                  <span className='carousel-control-next-icon' aria-hidden='true' />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
        </div>

      </section>

      {/* end: Casa Club */}

      <section className='gallery_section layout_padding-top bg-beige'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h3>El concepto </h3>
              <h3 className='allison x-6'>
                Garden House
              </h3>
            </div>
            <div className='col-6'>
              <p><b>Magnolia Home Resort</b> va más allá de un concepto tradicional, es un conjunto único creado con amenidades y servicios que satisfacen los gustos más exigentes y donde se ha cuidado hasta el más mínimo detalle.</p>
              <br />
              <p>Un exclusivo proyecto de tan solo 9 Garden Houses en donde se fusionan los ambientes interiores con la naturaleza de la mejor reserva de Punta Cascatta y extraordinarias vistas al Parque de las Cascadas.</p>
              <br />
              <p>Vivir en Punta Cascatta es disfrutar de todo lo que exige la vida moderna con la seguridad y tranquilidad que te da no tener que salir de casa.</p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default Desarrollo
