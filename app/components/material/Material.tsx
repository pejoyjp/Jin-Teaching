'use client'
import React from 'react'
import Motion from '../Motion'
import FindMaterial from './FindMaterial'
import AddMaterial from './AddMaterial'
type Props = {}

const Material = (props: Props) => {
  return (
    <Motion>
      <div className='w-full flex flex-col gap-10 md:w-[600px] justify-center items-center'>
        <FindMaterial/>
        <AddMaterial/>
      </div>
      
    </Motion>
     
  )
}

export default Material