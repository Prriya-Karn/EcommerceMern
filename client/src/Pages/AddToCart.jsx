import { Fragment, useContext, useEffect, useState } from 'react'
import { NavLink,   useParams } from 'react-router-dom';
import { AuthContext } from '../tokenStore/Auth';



const AddToCart = ({ setCartQuant, cartQuants }) => {
    const {API} = useContext(AuthContext);

    const { fileName, price, productName } = useParams();
    const numericPrice = Number(price);


    const [quantity, setQuantity] = useState(1);
    const [getId,setGetId] = useState();

    const quantInc = () => {
        setQuantity((pre)=>{
            return pre+1
        })
    }

    const quantDec = () => {
        setQuantity((pre)=>{
            return pre-1
        });
    }

// console.log("price", typeof(Number(price*3)));

    const addtocart = async() => {
        console.log(productName)   
        try{
            const cartData = await fetch(`${API}/api/addtocart`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    quantity,     
                    price : numericPrice,
                    productName,
                    productImage : fileName
                    
                })
            })
            
            const resCartData = await cartData.json();
            console.log("resCartData",resCartData)

            setGetId(resCartData.msg._id)

            setCartQuant(cartQuants + quantity)
        

        }catch(error){
            console.log(error)
        }  
    }

useEffect(()=>{
    addtocart()
},[])





    return (

        <Fragment>
            <img src={`/images/${fileName}`} />
            <h1>price: {price}</h1>
            <h1>{productName}</h1>
            <br></br><br></br>

            <button onClick={quantDec} className='bg-bg p-4'>-</button>
            <span>item : {quantity}</span>
            <button onClick={quantInc} className='bg-bg p-4'>+</button>



            <br></br><br></br>
        

                    <button onClick={addtocart} className="bg-bg p-4 mb-5">
                    Add To Cart
                  </button>
                  <NavLink
                    to={`/cart/${fileName}/${price}/${productName}/${getId}`}
                    className="bg-bg p-4 mb-5"
                  >
                    Go to Cart
                  </NavLink>
                  

        </Fragment>

    )
}


export default AddToCart;

