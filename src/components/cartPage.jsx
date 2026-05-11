import AnimatedContent from './AnimatedContent'
import NavBar from './navbar'

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
        <div className='h-full w-full p-20 text-2xl text-white flex justify-center items-baseline'>
          hello
        </div>
      </AnimatedContent>
    </>
  )
}
