import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { motion } from 'framer-motion'

// routes
import Input from '../Input'
import Result from '../Result'
import Redirect from '../Redirect'

// style
import './index.css'


const Box = () => {
  return (
    <motion.div className='Box' initial={{y: '+100vh'}} animate={{y:0}} transition={{duration: .6, delay: .2}}>
        <Router>
          <Routes>
            <Route path='/' element={<Input/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/:id' element={<Redirect/>}/>
          </Routes>
        </Router>
      <a href="#" id='report'>Report a problem</a>
      <p>Made with ♥ by <a href="https://github.com/aaronlyy" className='inlineHref'>aaronlyy</a>, <a href="https://github.com/6senit" className='inlineHref'>6senit</a> &amp; <a href="https://github.com/noashz" className='inlineHref'>noahshz</a></p>
    </motion.div>
  )
}

export default Box