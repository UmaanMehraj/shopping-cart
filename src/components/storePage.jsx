import { useEffect, useState } from 'react'
import AnimatedContent from './AnimatedContent'
import NavBar from './navbar'
import { FallingLines } from 'react-loader-spinner'
import ErrorPage from './errorPage'

export function Card(props) {
  const [quantity, setQuantity] = useState(1)
  function increaseQuantity() {
    setQuantity((prev) => prev + 1)
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const[itemIds, setItemIds] = useState(()=>{
  const saved = localStorage.getItem('storedIds')
    return (saved ? JSON.parse(saved) : [])
  })
   useEffect(()=>{
    localStorage.setItem('storedIds', JSON.stringify(itemIds))
   }, [itemIds])

   function addItem(id){
    if(!itemIds.includes(id)){
      setItemIds([...itemIds, id])
    }
   }
  return (
    <div className='h-90 w-90 bg-white/20 backdrop-blur-3xl rounded-xl flex-col justify-center items-center text-black border transition duration-600 ease-in-ot hover:-translate-y-1'>
      <div className='flex justify-center items-center'>
        <img
          src={props.src}
          alt={props.alt}
          className='h-50 w-50 object-contain p-4'
        />
      </div>
      <div className='flex flex-col justify-center items-center p-4 gap-2 text-white'>
        <div>{props.title.slice(0, 20) + '...'}</div>
        <div>Price: ${props.price}</div>
        <div className='bg-white/40 text-black flex justify-center items-center rounded-2xl'>
          <button
            className='h-5 w-5 flex justify-center items-center gap-2'
            onClick={decreaseQuantity}
          >
            -
          </button>
          <div className='w-10 flex justify-center items-center'>
            {quantity}
          </div>
          <button
            className='h-5 w-5 flex justify-center items-center'
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={()=>addItem(props.id)}
            className='border h-10 w-40 flex justify-center items-center rounded-3xl transition duration-500 ease-in-out hover:bg-violet-500 hover:text-white  hover:-translate-y-1 hover:scale-105 '
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Store(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])
  if (loading) {
    return (
      <div className=' h-full flex justify-center align-center'>
        <FallingLines
          color='##8b5cf6'
          width='100'
          visible={true}
          ariaLabel='falling-circles-loading'
        />
      </div>
    )
  }
  if (error) {
    return (
      <>
        <ErrorPage />
        <p>Error: {error}</p>
      </>
    )
  }
  return (
    data && (
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
          <div className='p-12 lg:grid lg:grid-cols-3 lg:grid-rows-2 sm:flex sm:flex-col justify-items-center content-center gap-10'>
            {data.map((elem) => {
              return (
                <Card
                  key = {elem.id}
                  id = {elem.id}
                  src={elem.image}
                  title={elem.title}
                  alt={elem.title.split(5) + '...'}
                  price={elem.price}
                />
              )
            })}
          </div>
        </AnimatedContent>
      </>
    )
  )
}
