import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import NavBar from '../components/navbar'


const AppRoutes = () => {
  return (
    <div className='relative flex'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teste" element={<NavBar />} />
        </Routes>    
      </BrowserRouter>
    </div>

  )
}

export default AppRoutes