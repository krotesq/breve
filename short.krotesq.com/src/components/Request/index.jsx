import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'

const Request = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {url} = state;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
      <h2>Shortening {url}...</h2>
    </motion.div>
  )
}

export default Request