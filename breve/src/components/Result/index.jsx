import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const data = location.state;

  const endpoint = "http://127.0.0.1:3001/v1/short";
  const body = JSON.stringify({
    url: data.url
  });

  const [shortUrl, setShortUrl] = useState('n/a');

  useEffect(() => {
  fetch(
    endpoint,
    {
      method: 'POST',
      body,
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
  )
  .then(res => res.json())
  .then(res => {
    console.log(res)
    setShortUrl(res.data.shortUrl);
  })
}, [])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {shortUrl}</h2>
    </motion.div>
  )
}

export default Result