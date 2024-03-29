import './app.scss'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import Whatsapp from './components/Whatsapp/Whatsapp'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App () {
  return (
    <>
      <Menu />
      <Hero />
      <Intro />
      <Whatsapp />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
