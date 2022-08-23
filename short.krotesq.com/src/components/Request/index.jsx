import {React, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import Loading from '../Loading'

const Request = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {url} = state;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   console.log(res.data);
    //   const shortUrl = res.data;
    //   
    // })
    sleep(2000).then(() => {
      navigate('/result', {state: {shortUrl: 'tesq.io/t3s65'}});
    })
  })

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
      <Loading/>
    </motion.div>
  )
}

export default Request