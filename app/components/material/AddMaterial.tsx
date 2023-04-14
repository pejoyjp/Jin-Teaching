import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Modal from '../Modal'

type Props = {}

const AddMaterial = (props: Props) => {
    
    const router = useRouter()
    const [pass,setPass] = useState('')

    const [isOpen,setIsOpen] = useState(false)
    const [img,setImg] = useState("/AliRec.jpeg") 

    const handleClick = useCallback(()=>{
        setImg('/WechatRec.jpeg')
        setIsOpen(!isOpen)
        
    },[pass])
  return (
    <div className='w-10/12 flex justify-between'>
            <Modal isOpen={isOpen} showInfo={true} showImg={false} img=''
                    onClose={()=>setIsOpen(!isOpen)}
                     />
            <button onClick={handleClick}
                    className='font-semibold bg-sky-500 px-3 py-2 rounded-3xl'>添加新的资料</button>
               
            <Image src='/bear.png' width={35} height={10} alt='cat' className=' cursor-pointer'/>
    </div>
  )
}

export default AddMaterial