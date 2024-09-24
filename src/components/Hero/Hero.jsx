import './_hero.scss'

const Hero = () => {
  return (
    <>
      <div className='hero_area'>
        {/* slider section */}
        <section className='position-relative'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12 px-0'>
                <div className='img-box'>
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}><iframe src="https://player.vimeo.com/video/994181184?badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="Magnolia Home Resort" className='video-space' /></div>

                  {/* <video controls autoPlay className='videoHeader'>
                    <source src='./header-video.mp4' type='video/mp4' />
                    <source src='./header-video.mp4' type='video/mp4' />
                  </video> */}
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
