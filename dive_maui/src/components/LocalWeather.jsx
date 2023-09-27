import React from 'react'
import Laptop from '../assets/laptop.jpg'
import weather from '../assets/weather_api_holder.jpg'

const LocalWeather = () => {
  return (
    <div className='w-full bg-white py-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] my-5' src={weather} alt="computer"  />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold'>Kaanapali Sunshine Forecast</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Catch a Tan </h1>
                <p className=''>
                    Plan your best time to dive with our 7 day Kaanapali weather forecast! This Section will bring in the up to date Kaanapali weather conditons and surf conditons, clicking the button below will refresh the page
                </p>
                <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3'>Current Weather</button>
            </div>
        </div>
    </div>
  )
}

export default LocalWeather;