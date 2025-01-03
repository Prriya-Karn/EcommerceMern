import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../tokenStore/Auth";
const AdminLayout = () => {
    const {API} = useContext(AuthContext);
    const { isAdmin } = useContext(AuthContext);
    const { getData } = useContext(AuthContext);
    const {token} = useContext(AuthContext)
    const navigate = useNavigate();

    const [getAllRegisData, setRegisData] = useState([]);

    const getAllUser = () => {
        setRegisData(getData)
    }

    
            //----------------------- delete the user data for(admin only)-------------------------
    
            const delUser = async(id)=>{
                if(!isAdmin) return;
                try{
                    const del = await fetch(`${API}/api/admin/delete/${id}`,{
                        method : "DELETE",
                        headers: {
                            "Authorization" : `Bearer ${token}`
                        }
                    });
    
                   
                    if(del.ok==true){
                        const newData = getAllRegisData.filter((e)=>{
                            return e._id != id
                        })
                         setRegisData(newData)
                    }
                   console.log(del.ok)
                }catch(error){
                    console.log(error)
                }
            }


    return (
        <Fragment>
            {
                (isAdmin == "false") ? navigate("/") :
                    <Fragment>
                        <button onClick={getAllUser}>Users</button><br></br>
                        <button>Contact</button><br></br>
                        <button>Services</button><br></br>
                    </Fragment>
            }

            {
                getAllRegisData.map((e) => {
                    return (
                        <Fragment key={e._id}>
                        <br></br>
                        <h1>{e.username}</h1>
                        <p>Email:{e.email} phone:{e.phone} password:{e.password}</p>
                        <button onClick={()=>delUser(e._id)}>Delete</button>
                        <br></br>
                        </Fragment>
                    )
                })
            }

        </Fragment>
    )
}

export default AdminLayout;