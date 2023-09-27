import React from 'react'
import { useState, useEffect } from 'react'

const DisplayAll = () => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('snorkel')

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsLoading(false);
        })
        .catch(err => console.log(data))
    }, [])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-60 ">
        <img src='https://source.unsplash.com/random' alt='' className='w-half'/>
        <div className="px-6 py-4">
            <div className="font-bold text-gray-200 text-xl mb-2">
                Scuba Mask
            </div>
            <ul>
                <li className='text-gray-200'>
                    <strong>Purchase: </strong>
                    $39.99
                </li>
                <li className='text-gray-200'>
                    <strong>Buyers of This product: </strong>
                    96
                </li>
                <li className='text-gray-200'>
                    <strong># of Reviews </strong>
                    32
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DisplayAll