import React from 'react'
import './index.css'
import { motion } from 'framer-motion'

const Input = () => {
  return (
    <div className='Input'>
        <form action="">
            <input type="text" name="url" id="url" placeholder='Enter a link..' />
            <motion.button whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}>Paste from clipboard</motion.button>
            <motion.input type="button" value="GO!" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
        </form>
    </div>
  )
}

export default Input