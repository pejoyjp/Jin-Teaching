import axios from 'axios'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'


import React from 'react'


type Props = {
    item:Record<string,any>

}

const CourseTitle:React.FC<Props> = ({item}) => {
  const router = useRouter()
  const handleClick =()=>{
    router.push(`/read/${item.studentId}/${item.materialId}`)
  }
  return (
    <div onClick={handleClick}
          className='hover:bg-sky-600 w-full pl-4 h-[50px] items-center
                      flex cursor-pointer text-xl'>
          {item.course}
   
    </div>
  )
}

export default CourseTitle