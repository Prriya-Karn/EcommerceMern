import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useLocation } from "react-router-dom";

const Update = () => {
    const location = useLocation();
    const { API } = useContext(AuthContext);
    const ediRes = location.state;
  
    const { token } = useContext(AuthContext);

//  console.log(ediRes.imgData._id)

    const [userUp, setUserUp] = useState({
        username: ediRes.username,
        email: ediRes.email,
        phone: ediRes.phone,
        message : ediRes.message
    })
    const [upImg,setUpImg] = useState();

    const updateImg = (event)=>{
        setUpImg(event.target.files[0])
    }

    // console.log(upImg)
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
        
        try {
            if(ediRes.url == "updateimg"){
            const update = await fetch(`${API}/api/admin/updateimg/${ediRes.imgData._id}`, {
                method: "PATCH",
                
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                
                body : formData
            });
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
            <input type="file" onChange={updateImg}/>
            
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

