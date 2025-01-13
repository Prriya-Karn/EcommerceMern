import { Fragment, useContext, useEffect, useState } from 'react'
// import {  useParams } from 'react-router-dom'
import { AuthContext } from '../tokenStore/Auth';


 const Cart = () => {
    
    const {API} = useContext(AuthContext);
    // const {fileName,price,productName,id} = useParams();
    const [cartData,setCartData] = useState([]);

// console.log("id",id)
    // now have to do update
    const getAllCartData = async()=>{
        try{
            const getdata = await fetch(`${API}/api/allcartdata`,{
                method : "GET"
            })
            const getres = await getdata.json();
            console.log(getres.msg)
            setCartData(getres.msg)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllCartData();
    },[])

    console.log(cartData)

    return(
        <Fragment>
       <h1>cart section</h1>

      
     {
        cartData.map((e)=>{
            return(
                <Fragment key={e._id}>
                <img src={`/images/${e.productImage}`}/>
                <h1>{e.price}</h1>
                <h1>{e.quantity}</h1>
                <h1>{e.productName}</h1>
                
                <br></br>
                </Fragment>
            )
        })
     }
        </Fragment>
    )
}

export default Cart;
