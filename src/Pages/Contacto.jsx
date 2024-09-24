import HubspotForm from 'react-hubspot-form'
import Menu from '../components/Menu/Menu'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

export const Contacto = () => {
  return (
    <>
      {/* Menu */}
      <Menu />
      <section className='contact'>
        <div className='container-full'>
          <div className='row'>
            <div className='col-lg-5 col-md-7 col-12 '>
              <div className='contacto-bg'></div>
            </div>
            <div className='col-lg-7 col-md-7 col-12 form-container'>
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
                        window.location = 'mailto:cac@metropolis.mx'
                      }}
                    >cac@metropolis.mx
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
