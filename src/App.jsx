import './App.css'
import { Card } from './assets/components/Card'
import { Footer } from './assets/components/Footer'
import { Header } from './assets/components/Header'
import foto1 from './assets/prato_salmao.jpg'
function App() {
 

  return (
  <div className='app'>
   <Header />
   <Card imagem={foto1} nomePrato="Salmão a moda da casa" descricao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur purus vitae dapibus ullamcorper. Nam quam eros, pharetra sit amet sem eget, aliquam eleifend nisi."} valor= {90} tempo={30} />
   <Footer />
  </div>
  )
}

export default App
