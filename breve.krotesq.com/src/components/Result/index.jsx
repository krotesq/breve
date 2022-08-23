import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { useLocation, useNavigate} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [shortUrl, setShortUrl] = useState('');

  useEffect(() => {
    if (data == null) {
      navigate('/');
      return;
    }
    setShortUrl(data.url);
  })

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {shortUrl}</h2>
    </motion.div>
  )
}

export default Result