import Hero from '@/components/main/Hero'
import Map from '@/components/main/Map'
import React from 'react'

const Main = () => {
    return (
        <div className='w-full h-screen bg-gray-100 flex'>
            <div className='w-full lg:w-1/2 bg-gray-100 border-r-2'>
                <Hero />
            </div>
            <div className='hidden lg:block w-1/2 bg-gray-100'>
                <Map />
            </div>
        </div>
    )
}

export default Main