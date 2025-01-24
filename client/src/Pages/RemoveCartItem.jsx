import { Fragment, useContext } from "react";
import { AuthContext } from "../tokenStore/Auth";
import { CartTotal } from "./CartProvider";

const RemoveCartItem = ({id}) => {
    const {API,token} = useContext(AuthContext);
    const {cartData,setCartData} = useContext(CartTotal);

    const removeItems = async()=>{
        try{
            const deleteItem = await fetch(`${API}/api/delcartbyid/${id}`,{
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })
            
            const delRes = await deleteItem.json();
            if(delRes.msg.deletedCount>0){
                alert("deleted successfully")
            }

            const newData = cartData.filter((e)=>{
                return e._id!=id
            })
            setCartData(newData)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <Fragment>
    <button onClick={removeItems}>
    <p className="underline text-xs">Remove</p>
    </button>
    </Fragment>
  )
}

export default RemoveCartItem;
