import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/HighlightText'
import CTAButton from '../components/Button';
import Banner from '../assets/Images/banner.mp4';
const Home = () => {
    return (
    <div>
<p>home</p>
       {/* Section 1*/}
       <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContentcodhe items-center' >
          <Link to={"/signup"}>
                <div className=' mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 '>
                <div className='flex flex-row mt-16 p-1 items-center gap-2 rounded-full py-[5px] px-10 transition-all duration-200 group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight />
                </div>

                </div>
          </Link>
           <div className='text-center text-4xl font-semibold mt-7 text-white'> 
              Empower Your Future with 
              <HighlightText text={"Coding Skills"}></HighlightText>
           </div>
           <div className='mt-4  nt text-center text-lg w-[90%] font-bold text-richblack-300'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </div>
           <div  className='flex flex-row gap-7 mt-8'>
           <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>;
           <CTAButton active={false} linkto={'/login'}>Book a  demo</CTAButton>
           </div>
           <div 
           className="relative mx-3 my-12 px-20 drop-shadow-[10px_10px_15px_rgba(255,255,225,0)]"
         >
           <video 
             muted 
             loop 
             autoPlay 
             aria-label="Promotional banner video" 
             className="border-r-8 border-b-8  border-white h-[300px]"
           >
             <source src={Banner} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </div>
         
            </div>
         {/* Section 1*/}
         {/* Section 1*/}
           {/* Section 1*/}
    </div>
  )
}

export default Home
