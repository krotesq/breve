import React from 'react'
import './index.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div className='Header' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <h1>BREVE</h1>
        <h2>LINKSIZE MATTERS!</h2>
        <ul>
          <li><a href="https://krotesq.com">BACK TO KROTESQ.COM</a></li>
        </ul>
    </motion.div>
  )
}

export default Header