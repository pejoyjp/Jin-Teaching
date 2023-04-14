'use client'
import React, { useEffect }  from 'react'
import CourseTitle from './CourseTitle'
import useMaterials from '@/hooks/useMaterials';
import ReactLoading from "react-loading";


type Props = {
  
}

const SideBar:React.FC<Props> = () => {
  const { data, isLoading } = useMaterials();
  return (
    <div className='md:basis-1/5 border-[1px] flex justify-center h-full
                    border-white gap-1 rounded-md w-full overflow-scroll'>
            {
              isLoading?(
                <ReactLoading type='balls' color='#fff'/>
              ):(<div className='flex flex-col gap-3 w-full text-white'>
                
                  {data?.map((item:Record<string,any>)=>(
                      <CourseTitle key={item.materialId} item={item}  />
                  ))}
              </div>)
            }
    </div>
  )
}

export default SideBar