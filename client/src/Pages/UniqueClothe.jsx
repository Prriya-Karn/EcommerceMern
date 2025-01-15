import { Fragment } from 'react'
import Button from '../Components/UI/Button'

export const UniqueClothe = () => {
    return (
        <Fragment>
            <div className='mb-96 w-full'>
                <p className='text-center uppercase font-medium'>350 GSM Heavy Weight Fleece Hoodie</p>

                <div className='flex mt-7 flex-col lg:flex-row'>

                    {/*------images--------*/}
                    <div className='
                    lg:h-3/4 lg:w-4/5 lg:ml-20 md:ml-32 md:mr-ml-32 md:w-2/3 sm:ml-20 sm:mr-20 ml-8 mr-8'>
                        <img src='../../public/image/1L9A7667.webp' className='rounded-xl 
                              lg:h-full md:h-full'/>
                    </div>

                    {/*------------Add to cart------------*/}
                    <div className=' 
                    lg:w-4/5 lg:-ml-10 lg:mt-0
                    md:ml-32 md:mr-ml-32
                    md:w-2/3
                     md:mt-4 mt-5 sm:ml-20 sm:mr-20 ml-8 mr-8'>
                        <p className='uppercase sm:text-base text-xs font-medium'>Overlays Clothing</p>
                        <h1 className='lg:text-4xl md:text-2xl sm:text-3xl  sm:mt-5  text-xl mt-2'>Artic Lime Sherpa Sweatshirt</h1>
                        <h1 className='md:text-2xl sm:text-xl text-lg mt-2 sm:mt-5 text-orange-700'>₹ 2,399.00 <span className='md:text-lg sm:text-base text-sm text-gray-500'>M.R.P</span>
                            <span className='md:text-lg sm:text-base text-sm text-gray-500 lg:ml-5 md:ml-4'><s>₹ 2,899.00M.R.P</s></span></h1>

                        <div className='lg:w-4/5 md:w-4/5 sm:mt-7 mt-5 mb-5'><hr></hr></div>
                        {/**--------------- Quantity and add to cart section--------------------- */}

                        <p>Quantity:</p>

                        <div className='mt-4 flex rounded-md border-gray-400 border-2 
                        lg:w-44 md:w-44 sm:w-32 w-28'>
                            <button className='rounded-l-md  items-center justify-center flex
                            w-full
                            lg:h-14 md:h-14 sm:h-12 h-10'>
                                <img src='../../public/image/minus.png'
                                    className='w-5 h-full' />
                            </button>
                            <span className='w-full flex justify-center items-center text-xl font-medium'>1</span>
                            <button className='rounded-r-md items-center justify-center flex
                             w-full 
                             lg:h-14 md:h-14'>
                                <img src='../../public/image/plus.png'
                                    className='w-5 h-10' />
                            </button>
                        </div>

                        <Button
                            buttName="Add to cart"
                            className="addtocart"
                        />

                        {/** ------------ social media --------------- */}
                        <div className='flex justify-between items-center sm:w-56 w-60'>
                            <h1>Share</h1>

                          
                                <img src='../../public/image/whatsapp.png'
                                    className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                                <img src='../../public/image/instagram.png'
                                    className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                                <img src='../../public/image/twitter.png'
                                    className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                                <img src='../../public/image/pinterest.png'
                                    className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                           


                        </div>

                    </div>
                </div>
            </div>
        </Fragment>

    )
}
