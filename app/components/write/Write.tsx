'use client'
import React, { useEffect, useState } from 'react'
import Motion from '../Motion'
import ShowWrite from './ShowWrite';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useCurrent from '@/hooks/useCurrent';
import Loading from 'react-loading';


type Props = {

}

const Write:React.FC<Props> =() => {
    const {data,isLoading} = useCurrent()
    console.log(data?.materialId);
    const [markdownSource, setMarkdownSource] = useState(`
        日期:
        课程:
    `);
    const handleClick = async()=>{
      try{
        await axios.post(`/api/write/${data?.studentId}`,{content:markdownSource,
                                                          studentId:data?.studentId,
                                                          materialId:data?.materialId
                                                        })

        toast.success("笔记上传成功🚀")
      }
      catch(e:any){
        toast.error(e)
      }
    }


  return (
    <Motion>
      <div className='w-full flex flex-col  items-end'>
        {
          isLoading?(
            <Loading type='balls' color='#fff'/> 
          ):(
            <>
              <div className='flex flex-col md:flex-row w-full gap-4 h-[600px]'>
                <textarea
                    onChange={(e)=>setMarkdownSource(e.target.value)}
                    value={markdownSource}
                    className="
                          basis-1/2
                          p-2
                          h-full
                          overflow-auto
                          whitespace-pre
                          bg-neutral-700
                          rounded-lg
                          text-white
                          outline-none
                        overflow-x-auto
                    "
                />
                <div className='basis-1/2 h-full'>
                  <ShowWrite markdownSource={markdownSource}/>
                </div>
                
                </div> 
                <button onClick={handleClick}
                        className='bg-sky-500 py-1 rounded-lg w-40 mt-2 text-white'>提交🚀
                </button> 
            </>
          )
          
        }
        
      </div>
        
         
    </Motion>
  )
}

export default Write