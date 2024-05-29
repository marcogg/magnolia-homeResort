import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

const Gracias = () => {
    return (
        <>
            <Menu />
            <section className='gracias'>
                <div className='container-full'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='bg-gracias'></div>
                        </div>
                        <div className='col-lg-6 px-5'>
                            <h2 className='title mt-5'>Gracias por contactarnos</h2>
                            <h3 className='subtitle'>En breve uno de nuestros ejecutivos se pondrá en contacto contigo</h3>
                            <p className='mt-5'>O si lo prefieres, puedes contactarnos también en:</p>
                            <div className='row justify-content-space-between mb-5'>
                                <div className='col-12 col-md-6 col-lg-6'>
                                    <button className='btn btn-blue' onClick={(e) => {
                                        e.preventDefault()
                                        window.location = 'tel:2224540321'

                                    }}>Llamar al CAC</button>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6'>
                                    <button className='btn btn-blue' onClick={(e) => {
                                        e.preventDefault()
                                        window.location = 'https://api.whatsapp.com/send?phone=522221209242&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20desarrollo%20Magnolia'

                                    }}>Mensaje de Whatsapp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Gracias