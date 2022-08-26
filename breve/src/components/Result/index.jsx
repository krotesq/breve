import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { useLocation, useNavigate} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [response, setResponse] = useState({shortUrl: 'test'});

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {response.shortUrl}</h2>
    </motion.div>
  )
}

export default Result