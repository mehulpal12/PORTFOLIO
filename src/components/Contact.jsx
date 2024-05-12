import React from 'react'
import { TbMapSearch } from "react-icons/tb";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <div>
      <div className="main sm:my-32 text-center sm:text-left sm:px-72" id="contact">
        <h2 className='text-blue-600 sm:text-xl font-bold'>CONTACT</h2>
        <h1 className='sm:text-xl font-bold'>Don't be shy! Hit me up!👇</h1>
        <div className="icons mt-4 sm:flex">
            <div className="location cursor-pointer flex flex-col sm:flex-row  my-5 justify-center items-center">
                <span className='border-2 border-gray-400 p-3 shadow-2xl rounded-full'><TbMapSearch className='text-3xl text-blue-600'/></span>
                <div className="flex flex-col mx-5 sm:text-xl font-semibold">
                <h1>Location <br /> </h1>
                <p>Delhi,India</p>
                </div>
            </div>
            <div className="location mx-16 cursor-pointer flex flex-col sm:flex-row justify-center my-5 items-center">
                <span className='border-2 border-gray-400 p-3  shadow-2xl rounded-full'><CiMail className='text-3xl text-blue-600'/></span>
                <div className="flex flex-col mx-5 sm:text-xl font-semibold">
                <h1>Mail <br /> </h1>
                <p>Mehulpal7428@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
