import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <div className='bg-gray-300 min-h-120 w-screen flex flex-col justify-center items-center'>
        <div className='h-20 text-3xl lg:text-6xl md:text-4xl m-2'>
          Shop Now
        </div>
        <div className='h-20 text-xl lg:text-4xl md:text-2xl'>
          Visit the links below
        </div>
        <div className='px-5 md:m-1 lg:m3'>
          Shop variety of collections, shipment throughout the country
        </div>
      </div>
      <div className='bg-gray-300 min-h-30 w-screen flex gap-4 justify-center items-center'>
        <div className='m-1 h-8 w-20 bg-white p-4 rounded-2xl border-2 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white'>
          <Link to='/shop'>Shop</Link>
        </div>
        <div className='m-1 h-8 w-20 bg-white p-4 rounded-2xl border-2 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white'>
          <Link to='/cart'>Cart</Link>
        </div>
      </div>
    </>
  )
}
