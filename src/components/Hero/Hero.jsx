const Hero = () => {
  return (
    <>
      <div className='hero_area'>
        {/* slider section */}
        <section className=' slider_section position-relative'>
          <div className='container-fluid'>
            <div className='row slider-row'>
              <div className='col-lg-12 px-0'>
                <div className='img-box'>

                  <video controls autoPlay className='videoHeader'>
                    <source src='./header-video.mp4' type='video/mp4' />
                    <source src='./header-video.mp4' type='video/mp4' />
                  </video>
                  {/* <img src='/hero_magnolia.jpg' value='Hero Magnolia' className='img-fluid clip-mask' /> */}
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
