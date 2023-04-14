
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
type Props = {
    isOpen:boolean
    onClose?:()=>void
    showImg:boolean
    img:string | ''
    showInfo?:boolean
}

const Modal:React.FC<Props> = ({isOpen,onClose,img,showInfo,showImg}) => {
    const router = useRouter()
    const [studentId,setStudentId] = useState('')
    const [course,setCourse] = useState('')


    const handleClick = async()=>{
      
        if(studentId === '' || course === ''){
          return toast.error('提交失败')
        }else{
            try{
              await axios.post('/api/write',{
                studentId:studentId,
                course:course,
                content:"",
              })
              router.push(`/write`)
            }catch(e){
              console.log(e);
            }
        }
    }

    return (
        <div
          className={`fixed z-10 inset-0 overflow-y-auto 
         ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-900 opacity-75"
                onClick={onClose}
              ></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
                {
                    showImg &&  <Image src={img} alt='pay' height={250} width={250} />
                }
               
                {
                    showInfo && (
                        <div className='text-black w-[300px] h-[200px] flex justify-center flex-col gap-3 p-3'>
                            <input type='text' placeholder='学生编号' className='py-2 px-1' value={studentId}
                                    onChange={(e)=>setStudentId(e.target.value)}
                            />

                            <input type='text' placeholder='课程名称' className='py-2 px-1' value={course}
                                    onChange={(e)=>setCourse(e.target.value)}
                            />
                            
                            <button onClick={handleClick}
                                    className=' bg-sky-500 py-2 rounded-lg'>添加</button>
                        </div>
                    )
                }
                
            </div>
          </div>
        </div>
    );
}

export default Modal