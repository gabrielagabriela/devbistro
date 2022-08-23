import './App.css'

import { Footer } from './assets/components/Footer'
import { Header } from './assets/components/Header'
import { Secoes } from './assets/components/Secoes'

function App() {
 

  return (
  <div className='app'>
   <Header />
   <Secoes titulo={"Pratos Principais"} />
   <Footer />
  </div>
  )
}

export default App