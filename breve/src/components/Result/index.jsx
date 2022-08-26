import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { useLocation, useNavigate} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const data = location.state;

  const [response, setResponse] = useState({});

  useEffect(() => {

    // check if data from input is passed

    if (data == null) {
      setResponse('n/a')
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify({
        url: data.url
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(res => {
      setResponse(res);
    })
  })

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {response.url}</h2>
    </motion.div>
  )
}

export default Result