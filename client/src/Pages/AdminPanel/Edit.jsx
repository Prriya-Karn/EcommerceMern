import { Fragment, useContext } from "react"
import { AuthContext } from "../../tokenStore/Auth";
import { useNavigate } from "react-router-dom";

const Edit = ({id,route})=>{
    const { API } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate()
    // -----------------------------------------edit data 
    const editData = async()=>{
        console.log(id)
        try{
            const getUserById = await fetch(`${API}/api/${route=="getuserbyid"?"getuserbyid":"admin/conbyid"}/${id}`,{
        
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            
            const ediRes = await getUserById.json();
           console.log(ediRes)
            
            if(route == "conbyid"){
                // console.log(ediRes.msg[0]._id)
                navigate("/admin/usersdata/updatedata",{state:{
                    url : "updatecondata",
                    id : ediRes.msg[0]._id,
                    username : ediRes.msg[0].username,
                    email : ediRes.msg[0].email,
                    message : ediRes.msg[0].message
                }})
            }else{
                navigate("/admin/usersdata/updatedata", { state: {
                    url : "update",
                    id:ediRes.msg._id,
                    username:ediRes.msg.username,
                    email : ediRes.msg.email, 
                    phone : ediRes.msg.phone
                }}); 
            }
            
           
            
        }catch(error){
            console.log(error)
        }
    }
    return(
        <Fragment>
        <button className="" onClick={editData}>
        <img className="w-5 h-5" src="../../../public/image/edit.png"/>
        </button>
        </Fragment>
    )
}

export default Edit;