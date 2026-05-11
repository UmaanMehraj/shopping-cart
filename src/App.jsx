import { useState } from 'react'
import Footer from './components/footer'
import Home from './components/homepage'
import NavBar from './components/navbar'

const App = () => {
  const [cart, setCart] = useState([])
  function addToCart(item) {
    setCart(...item)
  }
  return (
    <>
      <NavBar />
      <Home cart={cart} addToCart={addToCart} />
      <Footer />
    </>
  )
}

export default App
