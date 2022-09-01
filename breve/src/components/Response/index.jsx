import './index.css'

import React from 'react'

const Response = () => {
  return (
    <div className='Response'>
        <form className='Response__form'>
            <input type="text" id='txtShortUrl' placeholder='No short URL available' readOnly />
            <input type="submit" id='btnCopy' value='Copy URL to clipboard'/>
            <input type="button" id='btnNew' value='Short another link' />
        </form>
        
    </div>
  )
}

export default Response