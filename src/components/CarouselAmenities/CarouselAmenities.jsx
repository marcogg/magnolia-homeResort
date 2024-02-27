// import './controls.js'

const CarouselAmenities = () => {
  return (
    <>
      <div id='carouselAmenitiesInterval' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-amenities-inner'>
          <div className='carousel-amenities-item active' data-bs-interval={10000}>
            {/* Card */}
            <div className='card mt-3'>
              <div className='img-amenities-wrapper'><img src='../amenities/alberca.jpg' className='card-img-top' /></div>
              <div className='card-body'>
                <p className='card-text'>Alberca exterior con bar, camastros y sombrillas</p>
              </div>
            </div>
          </div>
          <div className='carousel-amenities-item'>
            {/* Card */}
            <div className='card mt-3'>
              <div className='img-amenities-wrapper'><img src='../amenities/carril-nado.jpg' className='card-img-top' /></div>
              <div className='card-body'>
                <p className='card-text'>Alberca semi olímpica techada con chapoteadero</p>
              </div>
            </div>
          </div>
          <div className='carousel-amenities-item'>
            {/* Card */}
            <div className='card mt-3'>
              <div className='img-amenities-wrapper'><img src='../amenities/restaurante.jpg' className='card-img-top' /></div>
              <div className='card-body'>
                <p className='card-text'>Restaurante con terraza y vista al Parque de las Cascadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselAmenities
