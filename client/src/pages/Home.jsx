import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/HomePage/HighlightText'
import CTAButton from '../components/Button';
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/HomePage/CodeBlocks';
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
          <div>
          <CodeBlocks 
          position={"flex-row"}
          heading={
            <div className='text-4xl text-white font-semibold'>
            Start   
            <HighlightText text={"coding in seconds"}></HighlightText>
            <br></br> 

            </div>
          }
          subheading={
            <div className='text-pure-greys-500'>
            Unlock your coding potential with our online courses.
             </div>
          }
          ctabutton1 ={
            {
              btnText:"continue Lesson",
              linkto:"/signup",
              active:true,

            }
          }
          ctabutton2={
            {
              btnText:"learn more",
              linkto:"/login",
              active:false,

            }
          }
          codeblock={
             `<html>
    <head>
        <title>HTML Template Example</title>
    </head>
    <body>
        <header>
            <h1>Welcome to My Website</h1>
        </header>
        <nav>
            <a href="#home">Home</a> | 
            <a href="#about">About</a> | 
            <a href="#contact">Contact</a>
        </nav>
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This is the about section.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>This is the contact section.</p>
        </section>
        <footer>
            <p>Copyright © 2024. All Rights Reserved.</p>
        </footer>
    </body>
</html>`
          }
          bgGradient={"blue-200"}
          codeColor={"white"}
           />
          </div>
          <div>
          <CodeBlocks 
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-4xl text-white font-semibold'>
            Unlock your  
            <HighlightText text={"coding potential"}></HighlightText>
            <br></br> with our online courses

            </div>
          }
          subheading={
            <div className='text-pure-greys-500'>
            Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
            </div>
          }
          ctabutton1 ={
            {
              btnText:"try it yourself",
              linkto:"/signup",
              active:true,

            }
          }
          ctabutton2={
            {
              btnText:"learn more",
              linkto:"/login",
              active:false,

            }
          }
          codeblock={
             `<html>
    <head>
        <title>HTML Template Example</title>
    </head>
    <body>
        <header>
            <h1>Welcome to My Website</h1>
        </header>
        <nav>
            <a href="#home">Home</a> | 
            <a href="#about">About</a> | 
            <a href="#contact">Contact</a>
        </nav>
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This is the about section.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>This is the contact section.</p>
        </section>
        <footer>
            <p>Copyright © 2024. All Rights Reserved.</p>
        </footer>
    </body>
</html>`
          }
          bgGradient={"blue-200"}
          codeColor={"white"}
           />
          </div>
         {/* Section 2*/}

         {/* Section 3*/}
           {/* Section 4*/}
    </div>
  )
}

export default Home
