import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

function Banner() {
  const el = useRef(null)

  useEffect(( ) =>{
const typed = new Typed(el.current, {
strings: ["FrontEnd Developer"], // Strings to display
// Speed settings, try diffrent values untill you get good results
startDelay: 300,
typeSpeed: 100,
backSpeed: 100,
backDelay: 100,
});
// Destropying
return() => {
typed.destroy();
};
}, []);

  return (
    <>
      <div className="main px-12 md:flex items-center">
        <div className="text flex justify-center w-full">
            <div className='w-2/3'>
            <h3 className='text-3xl font-semibold'>Hi, I am</h3>
            <h1 className='my-2 text-5xl font-bold'>Mehul Pal</h1>
            <h2 className='text-3xl '>A <span ref={el}></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora fuga expedita aut sunt illum odit aliquam magnam. Adipisci, dolor exercitationem.</p>
            <br />
            <a href="/contact" className='px-3 py-2 bg-orange-500 rounded-full shadow-lg'>Contact Me</a>
            </div>
        </div>
        <div className="image mt-5 sm:mt-0 w-full flex justify-center">
            <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" className='shadow w-fit' alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
