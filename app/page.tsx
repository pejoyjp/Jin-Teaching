'use client'


import HomePage from './components/HomePage'
import Motion from './components/Motion'

export default function Home() {
  return (
      <div className='text-white w-screen md:w-[700px] '>
        <Motion>
         <HomePage/>
        </Motion>
          
       
      </div>
  )
}
