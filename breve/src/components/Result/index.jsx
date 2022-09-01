import {React} from 'react'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import './index.css'

const Result = () => {
  const location = useLocation();
  const data = location.state;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(data.shortUrl);
  }


  return (
    <motion.div className='Result' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
      <h3 className='Result__headline'>Your link is ready!</h3>
      <form onSubmit={handleFormSubmit}>
          <input type="text" name="url" id="url" placeholder='No short url available' value={data.shortUrl} required autoComplete="off"/>
          <motion.input type='submit' id='copy' value='Copy to clipboard' whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
          <motion.input type='button' id='newLink' value="Short another link" whileHover={{scale: 1.02, cursor: 'pointer'}} whileTap={{scale: 0.98}}/>
      </form>
    </motion.div>
  )
}

export default Result