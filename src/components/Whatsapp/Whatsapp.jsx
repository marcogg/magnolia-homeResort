import { Link } from 'react-router-dom'

const Whatsapp = () => {
  return (
    <>
      <div style={{ backgroundColor: '#02a047', width: 70, height: 70, borderRadius: '50%', position: 'fixed', bottom: 50, right: 5, display: 'block' }}>
        <div style={{ margin: 'auto', display: 'block', position: 'relative', left: '18%', top: '13%', zindex: 50000 }}>
          <Link onClick={(e) => {
            e.preventDefault();
            window.location = 'https://api.whatsapp.com/send?phone=522221209242&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20desarrollo%20Magnolia'
          }}>
            <img src='../whatsapp-outline-01.png' alt='Whatsapp' style={{ width: '47px !important' }} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Whatsapp
