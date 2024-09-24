import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import HubspotForm from 'react-hubspot-form'

const Ubicacion = () => {
  return (
    <>
      {/* Menu */}
      <Menu />
      <section className='contact'>
        <div className='container-full'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2757422320105!2d-98.2863799250725!3d18.96342585549748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb92ffec6f54f%3A0x27ec751fe159701c!2sMagnolia%20Residences!5e0!3m2!1ses-419!2smx!4v1716957311600!5m2!1ses-419!2smx" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className='col-lg-6 col-md-6 col-12 form-container'>
              <h2 className='x-4 text-blue light-300 mb-5'>Contacto</h2>
              <div className='contact-info'>
                <div className='img-box'>
                  <span className='material-symbols-outlined'>mail</span>
                </div>
                <div className='detail-box'>
                  <h6>
                    <button
                      className='btn-contact' onClick={(e) => {
                        e.preventDefault()
                        window.location = 'mailto:cac@metropolis.com'
                      }}
                    >cac@metropolis.com
                    </button>
                  </h6>
                </div>
              </div>
              <div className='contact-info'>
                <div className='img-box'>
                  <span className='material-symbols-outlined'>call</span>
                </div>
                <div className='detail-box'>
                  <h6>
                    <button
                      className='btn-contact' onClick={(e) => {
                        e.preventDefault()
                        window.location = 'tel:2224540321'
                      }}
                    >22 2454 0321
                    </button>
                  </h6>
                </div>
              </div>
              <HubspotForm
                portalId='21634170'
                formId='e4e1d2d9-4bc9-4a26-ae9b-94c4cfd9f3f5'
                onSubmit={() => console.log('Enviado!')}
                onReady={(form) => console.log(`Form ready: ${form}`)}
                loading={<div>Cargando...</div>}
              />
              {/* <div className='patch-hubspot' /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      {/* WhatsApp */}
      <Whatsapp />
      {/* Scroll to top */}
      <ScrollToTop />
    </>
  )
}

export default Ubicacion