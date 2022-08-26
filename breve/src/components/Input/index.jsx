import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import './index.css'

const Input = () => {

  const [inputUrl, setInputUrl] = useState('');
  const navigate = useNavigate();

  const handlePasteClick = async () => {
    const clipboard = await navigator.clipboard.readText();
    setInputUrl(clipboard);
  }

  const handleInputChange = (e) => {
    setInputUrl(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/result', {state: {url: inputUrl}})
  }

  return (
    <motion.div className='Input' initial={{opacity: 0}} animate={{opacity: 1}}>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="url" id="url" placeholder='Enter a link..' value={inputUrl} onChange={handleInputChange} required autoComplete="off"/>
            <motion.input type='button' value='Paste from clipboard' onClick={async () => {await handlePasteClick()}} whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
            <motion.input type='submit' value="Submit" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
        </form>
    </motion.div>
  )
}

export default Input