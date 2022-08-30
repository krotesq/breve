import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import isURL from 'validator/lib/isURL'
import './index.css'

const Input = () => {

  const [inputUrl, setInputUrl] = useState('');
  const [headline, setHeadline] = useState('Enter your link!');
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

    if (isURL(inputUrl)) {
      fetch(
        'https://api.breve.club/v1/short',
        {
          method: 'POST',
          body: JSON.stringify({
            url: inputUrl
          }),
          headers: {'Content-type': 'application/json; charset=UTF-8'}
        }
      )
      .then(res => res.json())
      .then(res => navigate('/result', {state: {shortUrl: res.data.shortUrl}}))
    }
    setHeadline('Please put in a valid URL!');
  }

  return (
    <div className='Input'>
      <h3 className='Input__headline'>{headline}</h3>
      <form onSubmit={handleFormSubmit}>
          <input type="text" name="url" id="url" placeholder='Enter a link..' value={inputUrl} onChange={handleInputChange} required autoComplete="off"/>
          <motion.input type='button' value='Paste from clipboard' onClick={async () => {await handlePasteClick()}} whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
          <motion.input type='submit' value="Submit" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
      </form>
    </div>
  )
}

export default Input