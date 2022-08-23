import React from 'react'
import { motion } from 'framer-motion'
import './index.css'

const Loading = () => {

    const variantsLoading = {
        start: {
            transition: {
                staggerChildren: 0.1
            }
        },
        end: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const variantsLoadingCircle = {
        start: {
            y: '0%'
        },
        end: {
            y: '100%'
        }
    };

    const transitionLoadingCircle = {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
    }
    
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <motion.div className='Loading' variants={variantsLoading} initial='start' animate='end'>
            <motion.span className='circle' variants={variantsLoadingCircle} transition={transitionLoadingCircle}/>
            <motion.span className='circle' variants={variantsLoadingCircle} transition={transitionLoadingCircle}/>
            <motion.span className='circle' variants={variantsLoadingCircle} transition={transitionLoadingCircle}/>
        </motion.div>
    </motion.div>
  )
}

export default Loading