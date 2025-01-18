import { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../tokenStore/Auth';
import Button from '../Components/UI/Button';
import '../style/home.css';

const AddToCart = ({ setCartQuant, cartQuants }) => {

    const { API } = useContext(AuthContext);

    const { fileName, price, productName } = useParams();
    const numericPrice = Number(price);


    const [quantity, setQuantity] = useState(1);
    // const [getId, setGetId] = useState();

    const quantInc = () => {
        setQuantity((pre) => {
            return pre + 1
        })
    }

    const quantDec = () => {
        setQuantity((pre) => {
            return pre - 1
        });
    }

    // console.log("price", typeof(Number(price*3)));

    const addtocart = async () => {
        console.log(productName)
        try {
            const cartData = await fetch(`${API}/api/addtocart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    quantity,
                    price: numericPrice,
                    productName,
                    productImage: fileName

                })
            })

            const resCartData = await cartData.json();
            console.log("resCartData", resCartData)

            // setGetId(resCartData.msg._id)

            setCartQuant(cartQuants + quantity)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        addtocart()
    }, [])





    return (

        <Fragment>
            <div className='mb-96 w-full'>
                <div className='flex mt-7 lg:mt-10 flex-col lg:flex-row'>


                    {/*------images--------*/}
                    <div className='lg:h-1/2 lg:w-[60vw] xl:w-[50vw] 2xl:w-[50vw] xl:ml-56 lg:ml-20 lg:mr-10
                            md:ml-32 md:mr-32 md:w-2/3
                             sm:ml-20 sm:w-3/4 sm:mr-20 
                             w-full
                             sm:flex block'>


                        <div className="mt-0 mr-3 hidden sm:flex sm:flex-col h-[100vh]
                             sm:h-[105vh] md:h-[118vh] lg:h-[90vh] gap-2 overflow-x-auto no-scrollbar">

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>
                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>


                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>


                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>
                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div> <div className="cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7447.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>


                        </div>

                        <img src={`/images/${fileName}`} className='rounded-xl sm:p-0  p-5 w-full h-full block' />

                        <div className="sm:hidden carousel mt-0 mb-8 ml-5 flex gap-2">

                            <div className="carousel-item cursor-pointer rounded-md border-2 border-black">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>


                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                            <div className="carousel-item cursor-pointer rounded-md">
                                <img
                                    src="/image/1L9A7450.webp" className='h-24 w-20 rounded-md'
                                    alt="" />
                            </div>

                        


                    </div>

                </div>



                {/*------------Add to cart------------*/}
                <div className='
                    lg:w-1/2 lg:mt-0 lg:mr-0
                    lg:ml-2
                    md:ml-52 md:mr-32
                    md:w-2/3
                     md:mt-4 -mt-5 sm:mt-5
                     sm:ml-40 sm:mr-20 sm:p-0
                      p-5'>
                    <p className='uppercase sm:text-base text-xs font-medium'>Overlays Clothing</p>
                    <h1 className='lg:text-4xl md:text-2xl sm:text-3xl  sm:mt-5  text-xl mt-2'>{productName}</h1>
                    <h1 className='md:text-2xl sm:text-xl text-lg mt-2 sm:mt-5 text-orange-700'>₹ {price}
                        <span className='md:text-lg ml-1 sm:text-base text-sm text-gray-500'>M.R.P</span>
                        <span className='md:text-lg sm:text-base text-sm text-gray-500 lg:ml-5 md:ml-4'><s>₹ 2,899.00M.R.P</s></span></h1>

                    <div className='lg:w-4/5 md:w-4/5 sm:mt-7 mt-5 mb-5'><hr></hr></div>


                    {/**--------------- Quantity and add to cart section--------------------- */}

                    <p>Quantity:</p>

                    <div className='mt-4 flex rounded-md border-gray-400 border-2 
                        lg:w-44 md:w-44 sm:w-32 w-28'>
                        <button onClick={quantDec} className='rounded-l-md  items-center justify-center flex
                            w-full
                            lg:h-14 md:h-14 sm:h-12 h-10'>
                            <img src='/image/minus.png'
                                className='w-5 h-full' />
                        </button>
                        <span className='w-full flex justify-center items-center text-xl font-medium'>{quantity}</span>
                        <button onClick={quantInc} className='rounded-r-md items-center justify-center flex
                             w-full 
                             lg:h-14 md:h-14'>
                            <img src='/image/plus.png'
                                className='w-5 h-10' />
                        </button>
                    </div>

                    <Button
                        onClickFun={addtocart}
                        buttName="Add to cart"
                        className="addtocart"
                    />

                    {/** ------------ social media --------------- */}
                    <div className='flex justify-between items-center lg:w-40 md:w-40 sm:w-40 w-40'>
                        <h1>Share</h1>


                        <img src='/image/instagram.png'
                            className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                        <img src='/image/instagram.png'
                            className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                        <img src='/image/twitter.png'
                            className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />
                        <img src='/image/pinterest.png'
                            className='lg:w-4 lg:h-4 md:w-4 md:h-4 w-4 h-4' />



                    </div>
                </div>


            </div>
        </div>
        </Fragment >

    )
}


export default AddToCart;

