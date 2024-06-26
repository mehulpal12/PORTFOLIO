import React, { useState } from 'react'
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";


function Header() {
    let [menulinks,setMenulinks] = useState([
        { name: "Home", link: "#home" },
        { name: "Skill", link: "#skill" },
        { name: "About", link: "#about" },
        { name: "Contact", link: "#contact" },
    ]);
  const [nav, setnav] = useState(false);

  return (
    <>
     <div className="h-16 sticky top-0 z-50 bg-white pt-5 sm:pt-0 px-16  items-center shadow-lg main sm:flex sm:justify-between">
        <div className="left">
            <h1 className='text-2xl font-bold hover:text-blue-400 cursor-pointer'>Mehul Pal</h1>
        </div>
        <div onClick={()=> setnav(!nav)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
        {
            nav ? <XMarkIcon/> : <Bars3BottomRightIcon/>
        }
        </div>
        <div className="center">
        <ul className={` md:flex md:gap-5 text-center pe-8  md:items-center md:pb-0 pb-6 absolute md:static text-xl font-semibold text-gray-900 bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${nav ? 'top-20' : 'top-[-490px]'}`}>
                {menulinks.map((link)=>(
                    <li key={link.name}>
                        <a href={link.link} className='hover:text-blue-400 '>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
     </div>
    </>
  )
}

export default Header
