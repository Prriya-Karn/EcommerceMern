import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
    const location = useLocation();
    const { API } = useContext(AuthContext);
    const ediRes = location.state;
    console.log(ediRes)

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
        productName : ediRes.productName,
        price : ediRes.price
    })
console.log(ediRes);


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

    console.log(userUp);
    

    // update the user data (only for admin)

    const updateData = async () => {
       
        const formData = new FormData();
        
            formData.append('image',upImg);
        
        
        formData.append('productName',productInfo.productName);
        formData.append('price',productInfo.price);

      console.log(formData)
        
        try {
            if(ediRes.url == "updateimg"){
            const update = await fetch(`${API}/api/admin/updateimg/${ediRes.id}`, {
                method: "PATCH",
                
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                
                body : formData
            });
            const upres = await update.json();
            console.log(upres)
            if(update.status==200){
               toast.success("update successfull")
            }else{
                toast.error("not update")
            }

            
        }else if(ediRes.url=="updatecondata"){
            const update = await fetch(`${API}/api/admin/updatecondata/${ediRes.id}`, {
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
                toast.error("not change anything")
            } else if (upRes.msg.modifiedCount > 0) {
                toast.success("updated Successfull")
            }
        }else if(ediRes.url == "update"){
            const updateUser = await fetch(`${API}/api/admin/update/${ediRes.id}`,{
                method : "PATCH",
                headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(userUp)
            })

            const updateUserRes = updateUser.json();
           if(updateUserRes.modifiedCount == 0){
            toast.error("not updated")
           }else{
            toast.success("updated")
           }
        }


        } catch (error) {
            console.log(error)
        }
    }




    return (
        <Fragment>
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {ediRes.url === "updateimg" ? "Update Product": ediRes.url === "updatecondata" ? "Update contact data" : "Update User data"}
      </h2>
        {
            (ediRes.url == "updateimg")?
            <Fragment>
            <label className="block text-gray-700 font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            onChange={updateImg}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <label className="block text-gray-700 font-medium mt-4 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={productInfo.productName}
            onChange={products}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <label className="block text-gray-700 font-medium mt-4 mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productInfo.price}
            onChange={products}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
            </Fragment>
            :
            
                <Fragment>
                  <label className="block text-gray-700 font-medium mb-2">
                    Username
                  </label>
                  <input
                    onChange={upUserInp}
                    type="text"
                    name="username"
                    value={userUp.username}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Username"
                  />
                  <label className="block text-gray-700 font-medium mt-4 mb-2">
                    Email
                  </label>
                  <input
                    onChange={upUserInp}
                    type="email"
                    name="email"
                    value={userUp.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                  {ediRes.url === "update" ? (
                    <Fragment>
                      <label className="block text-gray-700 font-medium mt-4 mb-2">
                        Phone
                      </label>
                      <input
                        onChange={upUserInp}
                        type="number"
                        name="phone"
                        value={userUp.phone}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Phone"
                      />
                    </Fragment>
                  ) :
                    <Fragment>
                    <label className="block text-gray-700 font-medium mt-4 mb-2">
                    Message
                  </label>
                  <input
                    onChange={upUserInp}
                    type="text"
                    name="message"
                    value={userUp.message}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Message"
                  />
                    </Fragment>
            }
            </Fragment>
        }
        <button
        onClick={updateData}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
</div>
        </Fragment>
    )
}

export default Update;

