import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {

  const [nav, setNav ] =useState(false)

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white  '>
        <h1 className='w-full text-3xl font-bold m-4'>Dive Kannapali</h1>
        <ul className='hidden md:flex'>
          <li className='p-3'>Home </li>
          <li className='p-3'>Local Weather</li>
          <li className='p-3'>Products</li>
          <li className='p-3'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-400 ease-in-out duration-300 rgb(59 130 246 / 0.5)': 'fixed left-[-100%]  '}>
          <ul className='pt-4 uppercase'>
            <li className='p-4 border-b border-gray-400'>Home</li>
            <li className='p-4 border-b border-gray-400'>Local Weather</li>
            <li className='p-4 border-b border-gray-400'>Products</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar;