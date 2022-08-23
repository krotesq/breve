import {React, useState} from 'react'
import './index.css'
import { motion } from 'framer-motion'

const Input = () => {

  const [inputValue, setInputValue] = useState('');

  const handlePasteClick = async () => {
    const clipboard = await navigator.clipboard.readText();
    setInputValue(clipboard);
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value)
  }

  return (
    <div className='Input'>
        <form>
            <input type="text" name="url" id="url" placeholder='Enter a link..' value={inputValue} onChange={handleInputChange}/>
            <motion.input type='button' value='Paste from clipboard' onClick={async () => {await handlePasteClick()}} whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
            <motion.input type='submit' value="GO!" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
        </form>
    </div>
  )
}

export default Input