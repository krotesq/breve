import './index.css'

import React from 'react'

const Request = () => {
  return (
    <div className='Request'>
        <form className='Request__form'>
            <input type="text" id='txtLongUrl' name='longUrl'/>
            <input type="button" id='btnPaste' value='Paste URL from clipboard'/>
            <input type="submit" id='btnSubmit' value='Submit'/>
        </form>
    </div>
  )
}

export default Request