import './index.css'

import React from 'react'
import config from '../../config/app.config'

const Header = () => {
  return (
    <div className='Header'>
        <h1 id='heading'>{config.HEADING}</h1>
        <h2 id='subheading'>{config.SUBHEADING}</h2>
        <p>Made with ♥ by <a href="#">aaronlyy</a>, <a href="#">6senit</a> and <a href="#">noahszh</a></p>
        <a href="#">Report a problem</a>
        <a href="#">Impressum</a>
    </div>
  )
}

export default Header