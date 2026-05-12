import { useEffect, useState } from 'react'
import AnimatedContent from './AnimatedContent'
import NavBar from './navbar'

function CartCard(props) {
  return (
    <div className='h-80 w-80 md:h-100 md:w-100 bg-white/20 m-4 md:m-0 lg:m-0 backdrop-blur-3xl rounded-xl flex-col justify-center items-center text-black border transition duration-600 ease-in-ot hover:-translate-y-1'>
      <div className='flex justify-center items-center'>
        <img
          src={props.src}
          alt={props.alt}
          className='h-30 w-30 md:h-50 md:w-50 object-contain p-4'
        />
      </div>
      <div className='flex flex-col justify-center items-center p-4 gap-2 text-white'>
        <div>{props.title.slice(0, 20) + '...'}</div>
        <div>Price: ${props.price}</div>{' '}
      </div>
      <div className='flex flex-col justify-center items-center p-4 gap-2 text-white'>
        <div>
          <button className='border h-10 w-30 md:w-40 flex justify-center items-center rounded-3xl transition duration-500 ease-in-out hover:bg-violet-500 hover:text-white hover:-translate-y-1 hover:scale-105'>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('storedIds') || '[]')

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => storedIds.includes(item.id))
        setCartItems(filtered)
      })
  }, [])

  return (
    <>
      <NavBar />
      <AnimatedContent
        distance={60}
        direction='vertical'
        reverse={true}
        duration={1.2}
        ease='power3.out'
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.6}
        delay={0}
      >
        <div className='h-full w-full p-20 text-2xl text-white flex flex-col gap-8 justify-center items-center'>
          {cartItems.length === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <CartCard
                key={item.id}
                src={item.image}
                alt={item.title}
                title={item.title}
                price={item.price}
              />
            ))
          )}
        </div>
      </AnimatedContent>
    </>
  )
}
