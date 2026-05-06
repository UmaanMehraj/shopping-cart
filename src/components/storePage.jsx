import { useEffect, useState } from 'react'
import AnimatedContent from './AnimatedContent'
import NavBar from './navbar'

function Card(props) {
  return (
    <div className='h-80 w-80 bg-white/10 backdrop-blur-3xl rounded-xl text-black border transition duration-600 ease-in-ot hover:-translate-y-1'>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>{props.title}</div>
    </div>
  )
}

export default function Store() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
  })

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
          <div className='p-12 grid grid-cols-3 grid-rows-2 justify-items-center content-center gap-10'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </AnimatedContent>
      </>
    )
  )
}
