import Menu from '../components/Menu/Menu'
import '../components/VRtour/vrtour.js'
import { useEffect } from 'react';

const Amenidades = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cloudpano.com/public/shareScript.js';
    script.async = true;
    script.setAttribute('data-short', 'Zr7sc28jp');
    script.width = '100%';
    script.height = '500px';
    document.body.appendChild(script);
  }, []);

  return (
    <>
    <Menu />
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='light-300'>
              Amenidades
            </h2>
          </div>
        </div>
        <div className='row'>
          <div id="Zr7sc28jp"></div>
        </div>
        <div className='row'>
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
    </section>
    </>
  )
}

export default Amenidades
