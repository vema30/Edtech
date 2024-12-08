import React from 'react'

const Signup = () => {
  return (
    <div className='flex  flex-col justify-center h-screen w-screen items-center'>
        <div>
        <p className='text-3xl text-white'>Welcome Back</p>
        <p className='text-1xl text-white'>Discover your passions ,</p>
        <p className='text-blue-200 italic'>Be Unstoppable</p>
        </div>
        <div className='m-4  flex flex-row '>

              <div className='flex flex-row'>
              <label className='text-white'>Instructor
              <input className='m-3' type='radio'></input>
              </label>
              </div>
              <div>
              <label className='text-white'>Student
              <input className='m-3' type='radio'></input>
              </label>
              </div>
              

        </div>
        <div className='text-white p-3'>
        <div>
        <label className>
        Email address
        <input type='email' placeholder='enter email address'></input>
        
        </label>
        </div>
        <br></br>
        <div className='flex flex-col m-4 gap-4'>
        <label>
       create password 
        <input type='password' placeholder='enter password'></input>
        
        </label>
        <label>
       confirm password 
        <input type='password' placeholder='enter password'></input>
        
        </label>
        <label>
        Phone Number 
        <input type='text' placeholder='123456789'></input>
        </label>
        </div>
        </div>
       <div> <button className='bg-yellow-5 px-6 py-2'>Create account</button></div>

    </div>
    
  )
}

export default Signup;
