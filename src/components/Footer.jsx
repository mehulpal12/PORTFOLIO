import React from 'react'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className="main h-[10rem] text-white text-xl font-semibold flex flex-col sm:flex-row justify-around sm:justify-between items-center  bg-gray-800 sm:px-52 px-12 text-center">
       <div className="">
       <h2>Copyright © 2024. All rights are reserved</h2>
       </div>
       <div className=" flex">
       <CiLinkedin className='text-3xl cursor-pointer'/>
              <LuGithub className='text-2xl mt-1 mx-5 cursor-pointer'/>
       </div>
      </div>
    </div>
  )
}

export default Footer
