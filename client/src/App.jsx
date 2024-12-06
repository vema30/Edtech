import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './pages/Home';
const App = () => {
  return (
    <div className='bg-richblack-900 w-screen min-h-screen flex flex-col font-inter' >
    <h1>hello app </h1>
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       </Routes>
    </div>
  )
}

export default App
