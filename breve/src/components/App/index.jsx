import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'

// component imports
import Main from '../Main'
import Box from '../Box'
import Request from '../Request'
import Response from '../Response'


import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Main (/)*/}
          <Route path='' element={<Main/>}>
            <Route path='' element={<Box/>}>
              <Route path='' element={<Request/>}/>
              <Route path='response' element={<Response/>}/>
            </Route>
          </Route>

          {/* Dashboard */}
          <Route path='dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
