import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    children:React.ReactNode
}

const Motion:React.FC<Props> = ({children}) => {
  return (
    <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1, scale: 1 }}
          className='w-full flex justify-center'
          transition={{
              duration: 0.8,
              delay: 0.5,
              ease: 'linear'
          }}
    >
        
          {children}
    </motion.div>
  )
}

export default Motion