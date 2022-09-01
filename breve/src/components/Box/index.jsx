import './index.css'

import { Outlet } from 'react-router-dom'

import Footer from '../Footer'

const Box = () => {
  return (
    <div className='Box'>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Box