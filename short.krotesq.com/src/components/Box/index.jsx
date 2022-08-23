import React from 'react'
import './index.css'
import Input from '../Input'
import { motion } from 'framer-motion'

const Box = () => {
  return (
    <motion.div className='Box' initial={{y: '+100vh'}} animate={{y: 0}} transition={{duration: .8}}>

      <Input/>

      <a href="#" id='report'>Report a problem</a>
    </motion.div>
  )
}

export default Box