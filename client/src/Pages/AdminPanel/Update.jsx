import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useLocation } from "react-router-dom";

const Update = () => {
    const location = useLocation();
    const { API } = useContext(AuthContext);
    const ediRes = location.state;

    const { token } = useContext(AuthContext);

//  console.log(ediRes.imgData.filename)

    const [userUp, setUserUp] = useState({
        username: ediRes.username,
        email: ediRes.email,
        phone: ediRes.phone,
        message : ediRes.message
    })
    const [upImg,setUpImg] = useState(null);
 
    const [productInfo,setProInfo] = useState({
        productName : ediRes.imgData.productName,
        price : ediRes.imgData.price
    })

    const updateImg = (event)=>{
        setUpImg(event.target.files[0])  
    }

    const products = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setProInfo((pre)=>{
            return{
                ...pre,
                [name] : value
            }
        })
    }



    const upUserInp = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserUp((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    // update the user data (only for admin)

    const updateData = async () => {
       
        const formData = new FormData();
        
            formData.append('image',upImg);
        
        
        formData.append('productName',productInfo.productName);
        formData.append('price',productInfo.price);

      console.log(formData)
        
        try {
            if(ediRes.url == "updateimg"){
            const update = await fetch(`${API}/api/admin/updateimg/${ediRes.imgData._id}`, {
                method: "PATCH",
                
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                
                body : formData
            });
            const upres = await update.json();
            console.log(upres)
            if(update.status==200){
                alert("update successfull")
            }else{
                alert("not update")
            }

            
        }else{
            const update = await fetch(`${API}/api/admin/updateimg/${ediRes.id}`, {
                method: "PATCH",
                
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type" : "application/json"
                },
                
                body : JSON.stringify(userUp)
            });
            console.log(update)

            const upRes = await update.json()

            if (upRes.msg.modifiedCount == 0) {
                alert("not change anything")
            } else if (upRes.msg.modifiedCount > 0) {
                alert("updated Successfull")
            }
        }


        } catch (error) {
            console.log(error)
        }
    }




    return (
        <Fragment>
        {
            (ediRes.url == "updateimg")?
            <Fragment>
            <input
             type="file" 
           
             onChange={updateImg}
             name = "file"/>
             <br></br><br></br>
            <input type="text"
            value = {productInfo.productName}
            name = "productName"
             onChange={products}
              placeholder="product name"/>
              <br></br><br></br>

            <input type="number"
            value={productInfo.price}
            name = "price"
             onChange={products} 
             placeholder="price"/>
            </Fragment>:
            <Fragment>
            <input onChange={upUserInp}
                type="text"
                name="username"
                value={userUp.username}
                placeholder="username"
            />
            <br></br><br></br>
            <input onChange={upUserInp}
                type="email"
                name="email"
                value={userUp.email}
                placeholder="email"
            />
            <br></br><br></br>

            {
                ediRes.url == "update" ? <Fragment>
                    <input onChange={upUserInp}
                        type="number"
                        name="phone"
                        value={userUp.phone}
                        placeholder="phone"
                    />
                </Fragment> :
                    <Fragment>
                        <input onChange={upUserInp}
                            type="text"
                            name="message"
                            value={userUp.message}
                            placeholder="message"
                        />
                    </Fragment>
            }
            </Fragment>
        }
            <br></br><br></br>

            <button onClick={updateData}>Submit</button>

        </Fragment>
    )
}

export default Update;

