import React from 'react'
import './index.css'

const Input = () => {
  return (
    <div className='Input'>
        <form action="">
            <input type="text" name="url" id="url" placeholder='Enter a link..' />
            <button>Paste from clipboard</button>
            <input type="button" value="GO!" />
        </form>
    </div>
  )
}

export default Input