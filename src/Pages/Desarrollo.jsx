import { Link } from "react-router-dom"

const Desarrollo = () => {
  return (
    <>
        <section className='desarrollo layout_padding'>
          <div className='container-full'>
            <div className='row'>
              <div className='col-12'>
                <div className='bg-desarrollo'>
                  <h2 className="title header allison">Vive cada día</h2>
                  <h3 className="subtitle header">como si estuvieras de vacaciones</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* gallery section */}
        <section className='gallery_section layout_padding-top description'>
          <div className='container'>
            <div className='row'>
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

                  <Link to='/desarrollo'>
                    Conoce las casas
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='container my-5 features'>
            <div className='row mb-5'>
              <h3>Cada residencia cuenta con </h3>
            </div>
            <div className='row'>
              <div className='col-3 f1'>
                <span className='icon xl material-symbols-outlined'>king_bed</span>
                <p>4 recámaras</p>
              </div>
              <div className='col-3 f2'>
                <span className='icon xl material-symbols-outlined'>desktop_windows</span>
                <p>Sala de TV</p>
              </div>
              <div className='col-3 f3'>
                <span className='icon xl material-symbols-outlined'>deck</span>
                <p>Roof Garden</p>
              </div>
              <div className='col-3 f4'>
                <span className='icon xl material-symbols-outlined'>garage_home</span>
                <p>3 Lugares de estacionamiento techado</p>
              </div>
            </div>

          </div>
          <div className='gallery_container'>
            <div className='gallery_bg'>
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

    </>
  )
}

export default Desarrollo
