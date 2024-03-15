import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

function Banner() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main px-12 md:pt-16 md:flex bg-gray-100 items-center">
        <div className="text flex justify-center md:justify-end w-full">
          <div className='md:w-3/5 '>
            <h3 className='text-3xl font-semibold'>Hi, I am</h3>
            <h1 className='my-2 text-5xl font-bold'>Mehul Pal</h1>
            <h2 className='text-3xl '>A <span ref={el}></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora fuga expedita aut sunt illum odit aliquam magnam. Adipisci, dolor exercitationem.</p>
            <br />
            <div className="icons flex">
              <CiLinkedin className='text-4xl cursor-pointer'/>
              <LuGithub className='text-3xl mt-1 mx-5 cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className="image mt-5 sm:mt-0 w-full flex sm:ms-36 justify-start">
          <img src='./src/components/photo.jpg' className='hero-img rounded-full w-full sm:w-1/2 md:w-1/2 bg-cover' alt="" />
        </div>
      </div>
        <div className="tech-stack  sm:flex text-center sm:ps-40 md:ps-72 sm:pt-32 bg-gray-100 py-10 pt-10">
          <div className="text-xl font-semibold mt-2 mx-10 text-gray-700">
            <h1>Tech-Stack ||</h1>
          </div>
          <div className="grid mt-5 sm:mt-0 ps-10 sm:ps-0 grid-cols-2 place-content-center sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div>
              <img src="https://skillicons.dev/icons?i=html,css" className='cursor-pointer' alt="" />
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=js,ts" className='cursor-pointer' alt="" />
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=react,next" className='cursor-pointer' alt="" />
            </div>
            <div>
              <img src="https://skillicons.dev/icons?i=tailwind,sass" className='cursor-pointer' alt="" />
            </div>
          </div>
        </div>
  
    </>
  )
}

export default Banner
