import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useLocation } from "react-router-dom";

const Update = ()=>{
   const location = useLocation();
    const {API} = useContext(AuthContext);
    const ediRes = location.state;
   
    const {token} = useContext(AuthContext);

  
    const [userUp,setUserUp] = useState({
        username : ediRes.username,
        email : ediRes.email,
        phone : ediRes.phone
    })
    
    // console.log(ediRes)
    const upUserInp = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setUserUp((preVal)=>{
            return{
                ...preVal,
                [name] : value
            }
        })
    }

    // update the user data (only for admin)

    const updateData = async (e) => {
        e.preventDefault()
        try {
            const update = await fetch(`${API}/api/admin/update/${ediRes.id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userUp)
            });

            const upRes = await update.json()

            if(upRes.msg.modifiedCount==0){
                alert("not change anything")
            }else if(upRes.msg.modifiedCount>0){
                alert("updated Successfull")
            }

        
      

        } catch (error) {
            console.log(error)
        }
    }

 


    return(
        <Fragment>
      
        <input onChange = {upUserInp}
        type="text"
        name = "username"
        value={userUp.username}
        placeholder="username"
        />
        <br></br><br></br>
        <input onChange = {upUserInp}
        type="email"
        name = "email"
        value={userUp.email}
        placeholder="email"
        />
        <br></br><br></br>
        <input onChange = {upUserInp}
        type="number"
        name = "phone"
        value={userUp.phone}
        placeholder="phone"
        />
        <br></br><br></br>

        <button onClick={updateData}>Submit</button>
      
        </Fragment>
    )
}

export default Update;