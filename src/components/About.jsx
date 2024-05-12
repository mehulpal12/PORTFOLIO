import React from 'react'

function About() {
  return (
    <>
      <div className="main sm:flex text-center sm:text-left sm:m-40 md:m-20 md:mx-40" id="about">
        <div className="left  w-full flex  sm:justify-around">
            <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" className='sm:w-[80%] md:w-72 md:h-72 md:mt-10 px-5 rounded h-[110%] ' alt="" />
               <div className="images hidden 2xl:block">
               <img src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png" className='work-img w-24 h-32 rounded' alt="" />
                <div className='img-span '>
                    <img src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="" className='' />
                </div>
               </div>
        </div>
        <div className="right w-full sm:mt-5">
            <p className='text-blue-600 font-bold text-md'>ABOUT ME</p>
            <h1 className='text-2xl font-semibold'>Front-end Developer <br />
            based on delhi,India📍</h1>
            <p className='py-5 text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsa voluptates architecto corrupti consequuntur itaque sapiente similique maiores perferendis</p>
            <p className='text-gray-500 text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsa voluptates architecto corrupti consequuntur itaque sapiente similique maiores perferendis </p>
        </div>
      </div>
    </>
  )
}

export default About
