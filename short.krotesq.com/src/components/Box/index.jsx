import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { motion } from 'framer-motion'
import Input from '../Input'
import Request from '../Request'
import Result from '../Result'

import './index.css'

const Box = () => {
  return (
    <motion.div className='Box' initial={{y: '+100vh'}} animate={{y:0}} transition={{duration: .6, delay: .2}}>
        <Router>
          <Routes>
            <Route path='/' element={<Input/>}/>
            <Route path='/request' element={<Request/>}/>
            <Route path='/result' element={<Result/>}/>
          </Routes>
        </Router>
      <a href="#" id='report'>Report a problem</a>
    </motion.div>
  )
}

export default Box