import './index.css'

import React from 'react'
import config from '../../config/app.config'

const Header = () => {
  return (
    <div className='Header'>
        <h1 id='heading'>{config.HEADING}</h1>
        <h2 id='subheading'>{config.SUBHEADING}</h2>
    </div>
  )
}

export default Header