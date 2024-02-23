import { useState } from 'react'

const TopViews = () => {
  const [isPB, setPB] = useState(false)
  const [isPA, setPA] = useState(false)
  const [isRoof, setRoof] = useState(false)

  const plantaBaja = () => {
    setPB(!isPB)
  }

  const plantaAlta = () => {
    setPA(!isPA)
  }

  const roof = () => {
    setRoof(!isRoof)
  }

  return (
    <>
      <section className='top-views'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-12 col-lg-12 mb-5'>
              <h2 className='text-center line-height-compact x-4'><span className='light-200'>Conoce las plantas </span><br /><span className='allison x-10 text-beige'>del proyecto</span></h2>
            </div>
          </div>
          <div className='row views'>
            <div className='col-12 col-md-4 col-lg-4'>
              <h3 className='light-300 text-center'>Planta Baja</h3>
              <button onClick={plantaBaja} className='cta negative'>{`${isPB ? 'Ocultar Planta Baja' : 'Ver Planta Baja'}`}</button>
              <div id='planta-baja' className={`${isPB ? 'showView' : 'display-none'}`}>
                <img src='./../blueprints/planta-baja.webp' className='img-fluid' />
                <ul className='align-items-center row'>
                  <li><span className='material-symbols-outlined list-icon'>scene</span> Estancia</li>
                  <li><span className='material-symbols-outlined list-icon'>restaurant</span> Comedor</li>
                  <li><span className='material-symbols-outlined list-icon'>countertops</span> Cocina Equipada</li>
                  <li><span className='material-symbols-outlined list-icon'>local_laundry_service</span> Cuarto de lavado</li>
                  <li><span className='material-symbols-outlined list-icon'>desk</span> Estudio</li>
                  <li><span className='material-symbols-outlined list-icon'>soap</span> Toilet</li>
                  <li><span className='material-symbols-outlined list-icon'>potted_plant</span> Jardín privado</li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <h3 className='light-300 text-center'>Planta Alta</h3>
              <button onClick={plantaAlta} className='cta negative'>{`${isPA ? 'Ocultar Planta Alta' : 'Ver Planta Alta'}`}</button>
              <div id='planta-alta' className={`${isPA ? 'showView' : 'display-none'}`}>
                <img src='./../blueprints/planta-alta.webp' className='img-fluid' />
                <div className='row'>
                  <ul className='align-items-center justify-content-center'>
                    <li><span className='material-symbols-outlined list-icon'>king_bed</span> Rec. principal con baño, vestidor y balcón</li>
                    <li><span className='material-symbols-outlined list-icon'>bed</span> Segunda recámara con baño y vestidor</li>
                    <li><span className='material-symbols-outlined list-icon'>bed</span> Tercera recámara con baño y closet</li>
                    <li><span className='material-symbols-outlined list-icon'>tv</span> Sala de T.V.</li>
                    <li><span className='material-symbols-outlined list-icon'>checkroom</span> Closet de blancos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <h3 className='light-300 text-center'>Roof Garden</h3>
              <button className='cta negative' onClick={roof}>{`${isRoof ? 'Ocultar Roof Garden' : 'Ver Roof Garden'}`}</button>
              <div id='roof-garden' className={`${isRoof ? 'showView' : 'display-none'}`}>
                <img src='./../blueprints/roof-garden.webp' className='img-fluid' />
                <ul className='align-items-center row'>
                  <li><span className='material-symbols-outlined list-icon'>bed</span> Cuarta recámara con baño y terraza</li>
                  <li><span className='material-symbols-outlined list-icon'>soap</span> Toilet</li>
                  <li><span className='material-symbols-outlined list-icon'>faucet</span> Barra con tarja</li>
                  <li><span className='material-symbols-outlined list-icon'>pergola</span> Área social techada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopViews
