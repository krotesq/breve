import React from 'react'
import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom'
import './index.css'

const Result = () => {
  const { state } = useLocation();
  const { shortUrl } = state;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {shortUrl}</h2>
    </motion.div>
  )
}

export default Result