import { Link } from 'react-router'
import AnimatedContent from './AnimatedContent'

export default function Home() {
  return (
    <>
      <div className='w-screen h-full bg-black text-white p-10'>
        <AnimatedContent
          distance={60}
          direction='vertical'
          reverse={true}
          duration={1}
          ease='power3.out'
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.6}
          delay={0}
        >
          <div className='p-20 flex flex-col gap-4 justify-center items-center'>
            <div className='p-5 text-3xl'>
              <span className='text-4xl font-semibold'>Welcome,</span> to the
              one and only,
            </div>
            <div className='pb-10 text-2xl'>Shop & React!</div>
          </div>
          <div className='flex justify-center items-center gap-5 p-2'>
            <div className='border-1 h-10 w-20 flex justify-center items-center rounded-3xl transition duration-500 ease-in-out hover:bg-violet-500 hover:text-white  hover:-translate-y-1 hover:scale-105 '>
              <Link to='/shop'>Shop</Link>
            </div>
            <div className='border-1 h-10 w-20 flex justify-center items-center rounded-3xl transition duration-500 ease-in-out hover:bg-violet-500 hover:text-white  hover:-translate-y-1 hover:scale-105 '>
              <Link to='/cart'>Cart</Link>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </>
  )
}
