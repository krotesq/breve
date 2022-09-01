import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Main = () => {
  return (
    <div>
        <h1>Main</h1>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Main