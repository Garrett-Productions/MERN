import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-5'src={Laptop} alt="computer"  />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data analytics centrally</h1>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente in aliquid dolorem explicabo recusandae fuga molestiae sit pariatur cumque, 
                    ducimus ratione officia, eaque officiis vitae rerum voluptatibus. 
                    Non, molestiae temporibus.
                </p>
                <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics