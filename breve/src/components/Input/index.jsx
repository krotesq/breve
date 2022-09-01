import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { get, post } from '../../util/asyncfetch';
import isURL from 'validator/lib/isURL'
import './index.css'

const Input = () => {

  const [url, setUrl] = useState('');
  const [cid, setCid] = useState('');
  const [headline, setHeadline] = useState("Let's short your link");
  const navigate = useNavigate();

  const handlePasteClick = async () => {
    const clipboard = await navigator.clipboard.readText();
    setUrl(clipboard);
  }

  const handleChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const handleChangeId = (e) => {
    setCid(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isURL(url)) {
      setHeadline('Please put in a valid URL!');
      return;
    }

    if (cid.length > 0) {
      const success = await get(`https://api.breve.club/v1/short?code=${cid}`).success;
      if (success) {
        setHeadline('Custom ID already in use');
        return;
      }
    }

    const shortResponse = await post('https://api.breve.club/v1/short', {url, cid});
    if (!shortResponse.success) {
      setHeadline(shortResponse.msg);
      return;
    }
    navigate('/result', {state: {shortUrl: shortResponse.data.shortUrl}});
  }

  return (
    <div className='Input'>
      <h3 className='Input__headline'>{headline}</h3>
      <form onSubmit={handleFormSubmit}>
          <input type="text" name="url" id="url" placeholder='Enter a link..' value={url} onChange={handleChangeUrl} required autoComplete="off"/>
          <input type="text" name="cid" id="cid" placeholder='Enter a custom id... (optional)' value={cid} onChange={handleChangeId} autoComplete="off"/>
          <motion.input type='button' id='paste' value='Paste from clipboard' onClick={async () => {await handlePasteClick()}} whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
          <motion.input type='submit' id='submit' value="Submit" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
      </form>
    </div>
  )
}

export default Input