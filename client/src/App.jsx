import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './pages/Home';
import Navbar from './components/Common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup'
const App = () => {
  return (
    <div className='bg-richblack-900 w-screen min-h-screen flex flex-col font-inter' >
    <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       </Routes>
    </div>
  )
}

export default App
