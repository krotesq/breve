import React from 'react'
import {motion} from 'framer-motion'
import './index.css'

const Result = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h1>Short URL: tesq.io/1sdc3</h1>
    </motion.div>
  )
}

export default Result