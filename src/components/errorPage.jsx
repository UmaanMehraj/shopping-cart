import '.././index.css'
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <div className='errorPage w-screen h-screen flex justify-center items-center'>
      <div className='text flex flex-col justify-center items-center gap-5'>
        <h2 className='text-2xl'>This page doesn't exist :(</h2>
        <Link className='text-blue-300 underline' to='/'>
          Click to back to homepage
        </Link>
      </div>
    </div>
  )
}
