import axios from 'axios'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'


import React from 'react'


type Props = {
    item:Record<string,any>

}

const CourseTitle:React.FC<Props> = ({item}) => {
  const router = useRouter()
  const handleClick =async()=>{
    // console.log(item.content);
    // console.log(item.studentId);
    // try{
    //   await axios.post(`/api/read/${item.studentId}/${item.materialId}`,{
    //     studentId:item.studentId,
    //     materialId:item.materialId
    //   })
    //   router.push(`/read/${item.studentId}/${item.materialId}`)
    // }catch(e){
    //   console.log(e);
      
    // }
    router.push(`/read/${item.studentId}/${item.materialId}`)
    
  }
  return (
    <div onClick={handleClick}
          className='hover:bg-sky-500 w-full pl-4 h-[50px] items-center
                      flex cursor-pointer text-xl'>
          {item.course}
   
    </div>
  )
}

export default CourseTitle