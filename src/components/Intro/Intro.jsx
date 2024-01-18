const Intro = () => {
  return (
    <>
      <div className='hero_area'>
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
                      <a className href='index.html'>Home <span className='sr-only'>(current)</span></a>
                      <a className href='about.html'>About </a>
                      <a className href='gallery.html'>Gallery </a>
                      <a className href='blog.html'>Blog </a>
                      <a className href='testimonial.html'>Testimonial </a>
                    </div>
                  </div>
                </div>
                <a className='navbar-brand' href='index.html'>
                  <span>
                    Picstudio
                  </span>
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
        {/* Slider */}
        <section className=' slider_section position-relative'>
          <div className='container-fluid'>
            <div className='row slider-row'>
              <div className='col-lg-3 offset-lg-1'>
                <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <div className='detail-box'>
                        <h1>
                          Pic <br />
                          Studio
                        </h1>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page
                        </p>
                        <div>
                          <a href='#'>
                            Request A Quote
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <div className='detail-box'>
                        <h1>
                          Pic <br />
                          Studio
                        </h1>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page
                        </p>
                        <div>
                          <a href='#'>
                            Request A Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel_control-box'>
                    <div className='carousel_btn-container'>
                      <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                        <span className='sr-only'>Previous</span>
                      </a>
                      <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                        <span className='sr-only'>Next</span>
                      </a>
                    </div>
                    <ol className='carousel-indicators'>
                      <li data-target='#carouselExampleIndicators' data-slide-to={0} className='active li_one'>01</li>
                      <li data-target='#carouselExampleIndicators' data-slide-to={1} className='li_two'>02</li>
                      <li className='ol_design' />
                    </ol>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 px-0'>
                <div className='img-box'>
                  <img src='/slider-img.png' alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {'}/* End: Slider */{'}
      </div>

    </>
  )
}

export default Intro
