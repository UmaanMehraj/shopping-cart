import { Link } from 'react-router'

export default function NavBar() {
  return (
    <div className='max-h-30 w-screen bg-black/90 backdrop-blur-3xl flex justify-center items-center gap-2 text-white p-2'>
      <div className='m-1 h-10 w-20 bg-black p-4 rounded-2xl border-2 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>
        <Link className='' to='/'>
          Home
        </Link>
      </div>
      <div className='m-1 h-10 w-20 bg-black border-2 p-4 rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out hover:bg-white hover:text-black'>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='m-1 h-10 w-20 bg-black border-2 p-4 rounded-2xl flex justify-center items-center transition duration-300 ease-in-out  hover:bg-white hover:text-black'>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}
