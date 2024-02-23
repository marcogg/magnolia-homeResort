import HubspotForm from 'react-hubspot-form'
import Menu from '../components/Menu/Menu'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import Footer from '../components/Footer/Footer'

export const Contacto = () => {
  return (
    <>
      {/* Menu */}
      <Menu />
      <section className='contact'>
        <div className='container-full'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 contacto-bg' />
            <div className='col-lg-6 col-md-6 form-container'>
              <h2 className='x-4 text-blue light-300'>Contacto</h2>
              <HubspotForm
                portalId='21634170'
                formId='e4e1d2d9-4bc9-4a26-ae9b-94c4cfd9f3f5'
                onSubmit={() => console.log('Enviado!')}
                onReady={(form) => console.log(`Form ready: ${form}`)}
                loading={<div>Cargando...</div>}
              />
              <div className='patch-hubspot' />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      {/* WhatsApp */}
      <Whatsapp />
    </>
  )
}
