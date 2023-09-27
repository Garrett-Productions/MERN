import React from 'react'
import Typed from 'react-typed'
import garrett_edit from '../assets/garrett_edit.jpg'
import garrett_main from '../assets/garrett_main.jpg'
// import dive_maui_photo from '../assets/dive_maui_photo.jpg'
// import charisma from '../assets/charisma.jpeg'

const Main = () => {
  return (
    <div className='text-white fit-image '>
        <div style={{background: `url(${garrett_edit})`, backgroundSize:'cover', backgroundPosition:'center'}} className='mt-[-15px] h-screen mx-auto text-center flex flex-col justify-center' >
        
            <p className='text-white font-bold p-2'>
                Dive With Kaanapali Divers
                </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>
                Discover the World Below
                </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-5'>
                    If you want to..
                    </p>
                <Typed 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
                    strings={['Free Dive', 'Get Certified', 'Scuba Dive', 'Push limits', 'Experience Vast Ocean Life.']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-200'>Learn all the nuances and go from 0 skills to a Professional Diver here in Kaanapali</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Local Weather</button>
        </div>
    </div>
  )
}

export default Main
