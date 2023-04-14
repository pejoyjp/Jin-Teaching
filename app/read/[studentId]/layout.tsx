import SideBar from '@/app/components/read/SideBar'
import useCurrent from '@/hooks/useCurrent'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
    children:React.ReactNode
}

const layout:React.FC<Props> = ({children}) => {
  
  
  return (
    <div className='h-[600px] w-screen flex text-white'>
        <SideBar/>
        {children}
    </div>
  )
}

export default layout