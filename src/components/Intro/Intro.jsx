import { Link } from 'react-router-dom'
import HubspotForm from 'react-hubspot-form'

const Intro = () => {
  return (
    <>
      <div>
        {/* about section */}
        <section className='about_section layout_padding intro'>
          <div className='container'>
            <div className='row'>
              <div className='col-5'>
                <div className='bg-magnolia' />
              </div>
              <div className='col-md-7'>
                <div className='detail-box'>
                  <div className='heading_container'>
                    <h2>
                      Vive cada día como si fueran vacaciones <span className='light-300'>En Lomas de Angelópolis</span>
                    </h2>
                    <p>
                      Lomas de Angelópolis es un proyecto urbanístico de clase mundial, ubicado en la ciudad de Puebla, sobresale por su arquitectura innovadora, excelente diseño vial y su modernidad, cuanta con equipamientos y servicios como:
                    </p>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className='col'>
                    <div><span className='material-symbols-outlined'>school</span> Escuelas </div>
                    <div><span className='material-symbols-outlined'>local_mall</span> Centros comerciales </div>
                    <div><span className='material-symbols-outlined'>medication</span> Hospitales </div>
                    <div><span className='material-symbols-outlined'>work</span> Corporativos </div>
                    <div><span className='material-symbols-outlined'>bedroom_parent</span> Hoteles </div>
                  </div>
                  <div className='col'>
                    <div><span className='material-symbols-outlined'>nature</span> 30 parques </div>
                    <div><span className='material-symbols-outlined'>forest</span> 100 hectáreas de áreas verdes </div>
                    <div><span className='material-symbols-outlined'>pedal_bike</span> 17 km de ciclopista </div>
                    <div><span className='material-symbols-outlined'>sports_soccer</span> 30 canchas deportivas </div>
                    <div><span className='material-symbols-outlined'>brush</span>Espacios artísticos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* Contact Form */}
      <section className='bg-blue border-bottom py-5'>
        <div className='container form-cta'>
          <div className='row align-items-center'>
            <div className='col-lg-8 py-5'>
              <h2 className='light-200 x-4 line-height-compact'>Cotiza tu nueva<br /><span className='allison x-10 text-beige'>inversión inmobiliaria</span></h2>
            </div>
            <div className='col-lg-4 bg-beige'>
              <h3 className='light-300 mb-3 text-blue'>Déjanos tu información</h3>
              <p className='mb-5 text-blue'>En breve te contactaremos</p>
              <HubspotForm
                portalId='21634170'
                formId='e4e1d2d9-4bc9-4a26-ae9b-94c4cfd9f3f5'
                onSubmit={() => console.log('Enviado!')}
                onReady={(form) => console.log(`Form ready: ${form}`)}
                loading={<div>Cargando...</div>}
              />
              <div className='patch-hubspot-light' />
              {/* <Link className='cta negative' to='/contacto'>Solicitar cotización</Link> */}
            </div>
          </div>
        </div>
      </section>
        {/* gallery section */}
        <section className='gallery_section layout_padding-top description'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-6 ml-auto'>
                <div className='heading_container'>
                  <h2>
                    Se parte de un exclusivo concepto de tan solo 9 residencias
                  </h2>
                  <p>
                    Ubicadas en la mejor reserva de Punta Cascatta, con una vista única al Parque de las Cascadas
                  </p>
                  <Link to='/desarrollo' className='mb-5'>
                    Conoce las casas
                  </Link>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <img className='img-fluid' src='../casas-de-lujo-puebla.jpg' />
                <div />
              </div>
            </div>
          </div>
          <div className='container my-5 features'>
            <div className='row mb-5'>
              <h3>Cada residencia cuenta con </h3>
            </div>
            <div className='row align-items-center'>
              <div className='col-3 f1'>
                <span className='icon xl material-symbols-outlined'>king_bed</span>
                <p>4 recámaras</p>
              </div>
              <div className='col-3 f2'>
                <span className='icon xl material-symbols-outlined'>desktop_windows</span>
                <p>Sala de T.V.</p>
              </div>
              <div className='col-3 f3'>
                <span className='icon xl material-symbols-outlined'>deck</span>
                <p>Roof Garden</p>
              </div>
              <div className='col-3 f4'>
                <span className='icon xl material-symbols-outlined'>garage_home</span>
                <p>3 cajones techados</p>
              </div>
            </div>

          </div>
          <div className='gallery_container'>
            <div className='container-full gallery_bg'>
              <img src='../gallery-bg-casas-puebla.png' />
            </div>
            <div className='container'>
              <div className='gallery_box'>
                <div className='box b1'>
                  <div className='img-box'>
                    <img src='../FACHADA-02_T.jpg' />
                  </div>
                </div>
                <div className='box b2'>
                  <div className='img-box'>
                    <img src='../FACHADA-04.jpg' />
                  </div>
                  <div className='img-box'>
                    <img src='../ANDADOR.jpg' />
                  </div>
                </div>
                <div className='box b3'>
                  <div className='img-box'>
                    <img src='../amenidades-parque.jpg' />
                  </div>
                  <div className='img-box'>
                    <img src='../amenidades-restaurante.jpg' />
                  </div>
                </div>
                <div className='box b4'>
                  <div className='img-box'>
                    <img src='../casas-lomas-angelopolis.jpg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end gallery section */}
      </div>

    </>
  )
}

export default Intro
