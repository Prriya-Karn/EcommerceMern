import { createContext, Fragment, useCallback, useContext,  useEffect,  useState } from "react";
import { AuthContext } from "../tokenStore/Auth";

const CartTotal = createContext();
const CartProvider = ({children}) => {
    const { API } = useContext(AuthContext);
   
    const [cartData, setCartData] = useState([]);
    const [totalItems, setTotalItem] = useState();
 
     // Fetch cart data logic here
     const getAllCartData = useCallback(async () => {
        try {
            const response = await fetch(`${API}/api/allcartdata`, {
                method: "GET",
            });

            const data = await response.json();
            setTotalItem(data.totalItem);
            console.log(data)
            if (response.ok) {
                setCartData(data.msg);
            } else{
                console.error("Error fetching cart data:", data.message);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    },[API])


    useEffect(() => {
        getAllCartData();
      }, []);


  return (
    <Fragment>
    <CartTotal.Provider value={{totalItems,getAllCartData,cartData,setCartData,setTotalItem}}>
    {children}
    </CartTotal.Provider>
    </Fragment>
  )
}
export default CartProvider;
export {CartTotal};
