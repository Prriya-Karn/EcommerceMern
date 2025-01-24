import { createContext, Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../tokenStore/Auth";

const CartTotal = createContext();
const CartProvider = ({children}) => {
    const { API } = useContext(AuthContext);
   
    const [cartData, setCartData] = useState([]);
    const [totalItems, setTotalItem] = useState(0);

    console.log(totalItems)
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

   
    useEffect(() => {
        if (cartData.length > 0) {
            const total = cartData.reduce((acc, item) => acc + item.quantity, 0);
            setTotalItem(total); // Update totalItems
        }
    }, [cartData]);
  return (
    <Fragment>
    <CartTotal.Provider value={{totalItems,getAllCartData,cartData}}>
    {children}
    </CartTotal.Provider>
    </Fragment>
  )
}
export default CartProvider;
export {CartTotal};
