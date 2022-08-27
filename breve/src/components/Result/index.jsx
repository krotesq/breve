import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const data = location.state;

  const endpoint = "http://localhost:3001/v1/short";
  const body = JSON.stringify({
    url: data.url
  });

  const [response, setResponse] = useState({});

  useEffect(() => {
  fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: 'POST',
      body,
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
  )
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