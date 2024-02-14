import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='hero_area'>
        {/* slider section */}
        <section className=' slider_section position-relative'>
          <div className='container-fluid'>
            <div className='row slider-row'>
              <div className='col-lg-3 offset-lg-1'>

                {/* Begin Bootstrap Carousel */}
                <div id='carouselExampleIndicators' className='carousel slide'>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <div className='detail-box'>
                        <h1>Magnolia <br />
                          <span className='light-300'>Home Resort</span>
                        </h1>
                        <p>9 Exclusivas residencias con concepto House Garden. Desde $7.9 MDP</p>
                        <div>
                          <Link to='https://api.whatsapp.com/send?phone=522221209242&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20desarrollo%20de%20Magnolia'>
                            Haz una cita
                          </Link>
                        </div>
                      </div>
                      <div className='carousel-item'>
                        <div className='detail-box'>
                          <h1>
                            Magnolia <br />
                            <span className='light-300'>Home Resort</span>
                          </h1>
                          <p>
                            Vive cada día como si estuvieras de vacaciones
                          </p>
                          <div>
                            <Link to='https://api.whatsapp.com/send?phone=522221209242&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20desarrollo%20de%20Magnolia'>
                              Haz una cita
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='carousel_control-box'>
                        <div className='carousel_btn-container'>
                          <Link className='carousel-control-prev' to='#carouselExampleIndicators' role='button' data-slide='prev'>
                            <span className='sr-only' />
                          </Link>
                          <Link className='carousel-control-next' to='#carouselExampleIndicators' role='button' data-slide='next'>
                            <span className='sr-only' />
                          </Link>
                        </div>
                        <ol className='carousel-indicators'>
                          <li data-target='#carouselExampleIndicators' data-slide-to={0} className='active li_one'>01</li>
                          <li data-target='#carouselExampleIndicators' data-slide-to={1} className='li_two'>02</li>
                          <li className='ol_design' />
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Bootstrap Carousel */}
              </div>
              <div className='col-lg-8 px-0'>
                <div className='img-box'>
                  <img src='/hero_magnolia.jpg' value='Hero Magnolia' className='img-fluid clip-mask' />
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      {/* end slider section */}
    </>
  )
}

export default Hero
