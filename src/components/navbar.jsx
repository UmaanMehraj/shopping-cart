import { Link } from 'react-router'

export default function NavBar() {
  return (
    <div className='max-h-50 w-screen bg-black/90 backdrop-blur-3xl flex justify-center items-center gap-2 text-white p-2'>
      <div className='m-1 h-8 w-16 bg-black p-4 rounded-lg border-2 flex justify-center items-center transition duration-300 ease-in-out hover:scale-105'>
        <Link className='' to='/'>
          Home
        </Link>
      </div>
      <div className='m-1 h-8 w-16 bg-black border-2 p-4 rounded-lg flex justify-center items-center  transition duration-300 ease-in-out hover:scale-105'>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className='m-1 h-8 w-16 bg-black border-2 p-4 rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:scale-105'>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}
