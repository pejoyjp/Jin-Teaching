import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import ReactLoading from "react-loading";

type Props = {}

const FindMaterial = (props: Props) => {

  const [studentId,setStudentId] = useState('')
  const router = useRouter()
  const [isLoading,setIsLoading] = useState(false)
  const handleClick = async()=>{
    
    try{
      setIsLoading(true)
      await axios.post('/api/read',{studentId:studentId})
      setIsLoading(false)
      router.push(`/read/${studentId}`)
      
    }catch{
      toast.error('学生ID有误,请确认后重新输入')
    }finally{
      setIsLoading(false)
    }
   
  }

  return (
    <div className='w-10/12 flex justify-between items-center'>
       {
        isLoading?<ReactLoading type='spokes' color='#fff' />
        :<>
            <p className='text-md font-semibold'>学生编号:</p>   
            <div className='flex items-center'>
                <input className='bg-transparent outline-none border-b-[1px]' value={studentId}
                      onChange={(e)=>setStudentId(e.target.value)}  placeholder='点击查看笔记' type='text'/>
                <Image onClick={handleClick}
                        src='/cat.png' width={30} height={10} alt='cat' className=' cursor-pointer'/>
            </div>
        </>
       }
            
    </div>
  )
}

export default FindMaterial