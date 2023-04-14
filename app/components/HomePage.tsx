import React, { useCallback, useMemo, useState } from 'react'
import {MoonIcon,SunIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Modal from './Modal'
type Props = {}

const HomePage = (props: Props) => {
    const [isOpen,setIsOpen] = useState(false)
    const [img,setImg] = useState("/AliRec.jpeg") 

    const onClose = ()=>{
        setIsOpen(!isOpen)
    }

   
    const handleWechat = ()=>{
        setImg('/WechatRec.jpeg')
        setIsOpen(!isOpen)
    }
    

    const handleAli = ()=>{
        setImg('/AliRec.jpeg')
        setIsOpen(!isOpen)
    }

  return (
    <div className='w-10/12 flex justify-center flex-col items-center gap-4'>
        <Modal isOpen={isOpen} onClose={onClose} img={img} showImg={true}/>
        <p className='px-2 py-1 border-[1px] border-white rounded-lg w-full text-center hover:bg-rose-700'>
           Hey, I am your teacher 
        </p>

        <div className='flex w-full justify-between text-sm'>
            <p>
                性别
            </p>
            <p>
                男
            </p>
        </div>

        <div className='flex w-full justify-between'>
            <p>
                年龄
            </p>
            <p>
                25
            </p>
        </div>

        <div className='flex w-full justify-between'>
            <p>
                梦想
            </p>
            <p>
                攒够30万(进度3/100)
            </p>
        </div>
        
        <p className='px-2 py-1 border-[1px] border-white rounded-lg w-full text-center hover:bg-sky-700'>
           可以辅导的科目
        </p>

        <div className='flex w-full gap-2 justify-around'>
            <div className='flex items-center'>
                <SunIcon className='w-5'/>
                <p>
                    网页开发
                </p>
            </div>
            <div className='flex items-center'>
                <MoonIcon className='w-5'/>
                <p>
                    数据库
                </p>
            </div>
            <div className='flex items-center'>
                <SunIcon className='w-5'/>
                <p>
                    云计算
                </p>
            </div>
            <div className='flex items-center'>
                <MoonIcon className='w-5'/>
                <p>
                    算法题
                </p>
            </div>
        </div>

        <p className='px-2 py-1 border-[1px] border-white rounded-lg w-full text-center hover:bg-green-700'>
           资助我一杯☕️，如果我对你有帮助 :)
        </p>
        <div className='w-full flex justify-around'>
            <Image  onClick={handleWechat}
                    src='/wechat.png' alt='wecaht' height={50} width={50} className='cursor-pointer' />
            <Image  onClick={handleAli}
                    src='/alipay.png' alt='ali' height={50} width={50} className='cursor-pointer'/>
        </div>
        

    </div>
  )
}

export default HomePage