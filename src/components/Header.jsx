import React, { useState } from 'react'
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";


function Header() {
    let [menulinks,setMenulinks] = useState([
        { name: "Home", link: "/home" },
        { name: "Skill", link: "/skill" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Portfolio", link: "/porfolio" },
    ]);
  const [nav, setnav] = useState(false);

  return (
    <>
     <div className="h-20 pt-5 sm:pt-0 px-20 bg-gray-100 items-center border main sm:flex sm:justify-between">
        <div className="left">
            <h1 className='text-2xl font-bold'>Mehul Pal</h1>
        </div>
        <div onClick={()=> setnav(!nav)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
        {
            nav ? <XMarkIcon/> : <Bars3BottomRightIcon/>
        }
        </div>
        <div className="center">
        <ul className={` md:flex md:gap-5 text-center pe-8  md:items-center md:pb-0 pb-6 absolute md:static sm:bg-gray-100 bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${nav ? 'top-20' : 'top-[-490px]'}`}>
                {menulinks.map((link)=>(
                    <li key={link.name}>
                        <a href={link.link} className='hover:text-orange-600 '>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="right hidden sm:block">
            <button className='px-3 py-2 bg-orange-600 rounded-full shadow text-xl'>Hire Me</button>
        </div>
     </div>
    </>
  )
}

export default Header
