import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../tokenStore/Auth";
import '../style/navbar.css';
import { useParams } from "react-router-dom";


const Cart = ({ cartModal, closeButt }) => {
    const {name} = useParams()
    console.log(name);

    const [isClosing, setIsClosing] = useState(false);

    const { API } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const [totalItems, setTotalItem] = useState(0);


    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
             closeButt()
          setIsClosing(false);
        }, 500);
      };


    // Fetch cart data logic here
    const getAllCartData = async () => {
        try {
            const response = await fetch(`${API}/api/allcartdata`, {
                method: "GET",
            });

            const data = await response.json();
            if (response.ok) {
                setCartData(data.msg);
            } else{
                console.error("Error fetching cart data:", data.message);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    // Fetch data when modal opens
    useEffect(() => {
        if (cartModal) {
            // Change background color and disable scroll
            document.body.style.overflow = "hidden";
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Dark transparent background

            getAllCartData();
        } else {
            // Revert to original body style when modal is closed
            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "initial";
        }

        return () => {
            // Clean up when the component unmounts
            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "initial";
        };
    }, [cartModal]);

    // Update totalItems whenever cartData changes
    useEffect(() => {
        if (cartData.length > 0) {
            const total = cartData.reduce((acc, item) => acc + item.quantity, 0);
            setTotalItem(total); // Update totalItems
        }
    }, [cartData]);

    return (
        <Fragment>
            {cartModal && (
                <Fragment>
                    {/* Overlay Background */}
                    <div className="overlay"></div>

                    {/* Modal Structure */}
                    <div className={`side-modal bg-white h-full overflow-y-scroll overflow-x-hidden p-5
                     xl:-right-10
                     lg:-right-2
                     md:-right-14
                     sm:-right-2
                     -right-0  ${cartModal ? "open" : ""} ${isClosing ? "close" : ""}`}>

                        {/**------------------- close button start------------------- */}
                        <div className="flex justify-between md:w-5/6 lg:w-[42vw] xl:w-[34vw]  sm:w-72 w-72 lg:ml-5">
                            <div className="flex justify-between items-center sm:w-28 w-24">
                                <img
                                    src="/image/shopping-bag.png"
                                    className="sm:h-6 sm:w-6 h-5 w-5"
                                    alt="Shopping Bag"/>

                                <h2 className="sm:text-lg text-sm">{totalItems} Items</h2>
                            </div>

                            <button
                                className="close-btn sm:h-12 sm:w-6 h-10 w-5 items-center"
                                onClick={handleClose}>
                                <img src="/image/close.png" alt="Close" />
                            </button>
                        </div>
                        {/**------------------- close button (end)------------------- */}

                        <div className="mt-4 mb-4">
                            <hr className="border-gray-400 md:w-[47vw] lg:w-[45vw] xl:w-[37vw]" />
                        </div>

                        {/**----------Alll images and their price with quantity (start)--------------------- */}
                        <div className="cart-items  mt-8  xl:w-[37vw]">
                            {cartData.length > 0 ? (
                                cartData.map((item) => (        
                                    <div key={item._id} className="cart-item lg:gap-8 md:gap-5 flex lg:mb-8
                                     md:mb-4 mb-7">
                                        <img
                                            src={`/images/${item.productImage}`}
                                            alt={item.productName}
                                            className="md:h-36 md:w-36 w-20 rounded-lg border-2"
                                        />
                                        <div className="item-details lg:w-full md:w-full w-full sm:px-4 px-2
                                         capitalize">
                                            <div className="flex sm:text-base text-xs lg:gap-20 md:gap-14 gap-8">
                                                <h3>{item.productName}</h3>
                                                <p>₹ {item.price}</p>
                                            </div>


                                            <div className="flex mt-5 w-40 justify-between items-center ">
                                            <div className="flex sm:w-24 w-20 justify-center items-center
                                            border-gray-400  border-2 h-8 rounded-lg">
                                            <button className="w-full h-full">-</button>
                                            <p className="text-xs sm:text-base">{item.quantity}</p>
                                            <button className="w-full h-full">+</button>
                                            </div>
                                            <p className="underline text-xs">Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No items in the cart.</p>
                            )}
                        </div>
                        {/**----------Alll images and their price with quantity (end)--------------------- */}

                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Cart;
