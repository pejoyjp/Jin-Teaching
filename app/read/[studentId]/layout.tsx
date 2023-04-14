import SideBar from '@/app/components/read/SideBar'

import React  from 'react'

type Props = {
    children:React.ReactNode
}

const layout:React.FC<Props> = ({children}) => {
  
  
  return (
    <div className='h-[600px] w-screen flex text-white p-4 gap-2 md:flex-row flex-col'>
        <SideBar/>
        {children}
    </div>
  )
}

export default layout