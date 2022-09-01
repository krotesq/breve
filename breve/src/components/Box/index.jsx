import './index.css'

import React from 'react'
import { Outlet } from 'react-router-dom'

const Box = () => {
  return (
    <div className='Box'>
        <Outlet/>
    </div>
  )
}

export default Box