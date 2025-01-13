import { Fragment, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../tokenStore/Auth';


 const Cart = ({setTotalItem,totalItems}) => {
    
    const {API} = useContext(AuthContext);
    
    const [cartData,setCartData] = useState([]);
   
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

    useEffect(()=>{
        const res = cartData.reduce((acc,e)=>{
            return acc+=e.quantity
        },0)
        
        setTotalItem(res)
   
    },[cartData])
   
    // console.log(totalItems);


    return(
        <Fragment>
       <h1>cart section</h1>
       <h1 className='font-bold'>total Items :{totalItems}</h1>
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
