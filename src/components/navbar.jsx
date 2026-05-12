import { Link } from 'react-router'

export default function NavBar() {
  return (
    <>
      <nav className='flex justify-center items-center '>
        <div className='h-25 w-80 md:w-180 lg:w-200 bg-white/90 backdrop-blur-3xl flex gap-5 items-center justify-between rounded-b-2xl'>
          <div className='m-5 flex justify-center items-center h-12 w-80 lg:h-15 lg:w-50 md:h-15 md:w-40  border-2 rounded-2xl transition duration-500 ease-in-out hover:bg-black hover:text-white  hover:scale-105 '>
            <Link to='/'>Home</Link>
          </div>
          <div className='m-5  h-12 w-80 lg:h-15 lg:w-50 md:h-15 md:w-40 flex justify-center items-center border-2 rounded-2xl transition duration-500 ease-in-out hover:bg-black hover:text-white  hover:scale-105 '>
            <Link to='/shop'>Shop</Link>
          </div>
          <div className='m-5  h-12 w-80 lg:h-15 lg:w-50 md:h-15 md:w-40 flex justify-center items-center  border-2 rounded-2xl transition duration-500 ease-in-out hover:bg-black hover:text-white  hover:scale-105 '>
            <Link to='/cart'>Cart</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
