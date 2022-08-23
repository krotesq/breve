import React from 'react'
import './index.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div className='Header' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <h1>KROTESQ URL ShORTENER</h1>
        <ul>
            <li><a href="#">BACK TO KROTESQ</a></li>
        </ul>
    </motion.div>
  )
}

export default Header