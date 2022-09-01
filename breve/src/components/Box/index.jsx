import React from 'react'
import { Outlet } from 'react-router-dom'

const Box = () => {
  return (
    <div>
        <h3>Box</h3>
        <Outlet/>
    </div>
  )
}

export default Box