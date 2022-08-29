import {React} from 'react'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const Result = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h2>Short URL: {data.shortUrl}</h2>
    </motion.div>
  )
}

export default Result