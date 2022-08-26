import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.css'
const Header = () => {
  return (
    <motion.div className='Header' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <h1><a href="/" id='home'>BREVE</a></h1>
        <h2>LINKSIZE MATTERS!</h2>
        <ul>
          <li><a href="https://krotesq.com" id='back'>BACK TO KROTESQ.COM</a></li>
        </ul>
    </motion.div>
  )
}

export default Header