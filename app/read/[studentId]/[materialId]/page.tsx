import Feed from '@/app/components/read/Feed'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='md:basis-4/5  flex justify-center h-full
                  gap-1 rounded-md w-full overflow-scroll'>
        <Feed/>
    </div>
  )
}

export default page