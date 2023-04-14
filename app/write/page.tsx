import React from 'react'
import Write from '../components/write/Write'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full flex w-screen p-5'>
        <Write/>
    </div>
  )
}

export default page