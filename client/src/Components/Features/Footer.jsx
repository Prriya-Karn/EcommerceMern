import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <Fragment>
            <div className='bg-footerBg w-full lg:mt-10 lg:h-full md:mt-32 sm:mt-36 h-30 mt-20'>
            <div className='flex justify-center'>
            
            <div className='sm:mt-5 mb-2 mt-5 md:h-80 h-36  sm:w-1/2 w-56 p-3'>
            <h1 className='lg:text-4xl md:text-3xl sm:text-3xl text-2xl
             font-sans sm:mb-2 mb-1 md:ml-10 sm:ml-10'>Support 24/7</h1>
            <NavLink to="/contact" className='rounded-lg md:ml-10 sm:ml-10'>
              Contact Us
            </NavLink>
           
            <div className='mt-3'>
            <img className='lg:w-3/4 md:w-2/3 md:ml-10 sm:w-2/3 sm:ml-10 w-44
             rounded-lg md:mb-8 mb-2'
            src='/image/box1.png'/>
            </div>

            <div>
            <img className='lg:w-3/4 lg:ml-20 md:w-2/3 md:ml-20 sm:w-2/3 sm:ml-20 w-44
              rounded-lg'
            src='/image/box2.png'/>
            </div>
            </div>

            <div className=' lg:-mt-20 lg:-ml-24 lg:h-1/2
             md:-mt-20 md:-ml-24 md:h-full
             sm:-mt-10  sm:h-56
             h-40'>
            <img  className='h-full'
            src='/image/image-removebg-preview.png'/>
            </div>
            </div>
            </div>
        </Fragment>

    )
}

