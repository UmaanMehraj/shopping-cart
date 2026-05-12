import AnimatedContent from './AnimatedContent'
import NavBar from './navbar'

function CartCard(props) {
  return (
    <div className='h-100 w-100 bg-white/20 backdrop-blur-3xl rounded-xl flex-col justify-center items-center text-black border transition duration-600 ease-in-ot hover:-translate-y-1'>
      <div className='flex justify-center items-center'>
        <img
          src={props.src}
          alt={props.alt}
          className='h-50 w-50 object-contain p-4'
        />
      </div>
      <div className='flex flex-col justify-center items-center p-4 gap-2 text-white'>
        <div>
          <button className='border h-10 w-40 flex justify-center items-center rounded-3xl transition duration-500 ease-in-out hover:bg-violet-500 hover:text-white  hover:-translate-y-1 hover:scale-105 '>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Cart() {
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
        <div className='h-full w-full p-20 text-2xl text-white flex flex-col gap-2 justify-center items-center'>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </AnimatedContent>
    </>
  )
}
