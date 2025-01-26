import { Fragment, useContext,} from "react";
import { AuthContext } from "../tokenStore/Auth";
import { CartTotal } from "./CartProvider";

const RemoveCartItem = ({ id }) => {
  const { API, token } = useContext(AuthContext);
  const { cartData, setCartData, setTotalItem} = useContext(CartTotal); // Added setTotalItems
 
  const removeItems = async () => {
    try {
      const deleteItem = await fetch(`${API}/api/delcartbyid/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const delRes = await deleteItem.json();
      if (delRes.msg.deletedCount > 0) {
        alert("Deleted successfully");
      }

      // Remove item from cartData state
      const newData = cartData.filter((e) => e._id !== id);
      setCartData(newData);

      // Fetch updated cart data (including totalItems) from the backend
      const response = await fetch(`${API}/api/allcartdata`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        // Update cart data with new items
        setCartData(data.msg);
        // Update totalItems with the value received from the backend
        setTotalItem(data.totalItem);  // Ensure this is being correctly set after deletion
      } else {
        console.error("Error fetching updated cart data:", data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <button onClick={removeItems}>
        <p className="underline text-xs">Remove</p>
      </button>
    </Fragment>
  );
};

export default RemoveCartItem;
