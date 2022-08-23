import {React, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import Loading from '../Loading'

const Request = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (data == null) {
      navigate('/');
      return;
    }
    sleep(2000).then(() => {
      navigate('/result', {state: {url: data.url}})
    })
  })

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
      <Loading/>
    </motion.div>
  )
}

export default Request