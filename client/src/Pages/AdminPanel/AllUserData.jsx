import {Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";


const AllUserData = () => {
    const { API } = useContext(AuthContext);
    const { isAdmin } = useContext(AuthContext);
    // const { getData } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [getData, setGetData] = useState([]);
   
    
    // const [getAllRegisData, setRegisData] = useState([]);
    const [showhideuser,setshowhideuser] = useState(false);
    
    // console.log("getdata",getData)

    // console.log(getAllRegisData)
    // const getAllUser = () => {
    //     setRegisData(getData)
    //     setshowhideuser(!showhideuser)
    // }

    
  //-------------------------------- get all user data (for admin only) :-
  const getAllUser = async () => {
    try {
        const data = await fetch(`${API}/api/admin/alluserdata`, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });

        const dataJson = await data.json()
        
        setGetData(dataJson);
       
        setshowhideuser(!showhideuser)
    } catch (error) {
        console.log(error)
    }
}




    return (
        <Fragment>
            {
                (isAdmin == "false") ? navigate("/") :
                    <Fragment>
                        <button className="bg-bg" onClick={getAllUser}>
                        {(showhideuser)?"hide user":"show user"}
                        </button>
                    </Fragment>
            }

            {
               (showhideuser)?getData.map((e) => {
                    return (
                        <Fragment key={e._id}>
                            <br></br>
                            <h1>{e.username}</h1>
                            <p>Email:{e.email} phone:{e.phone} password:{e.password}</p>

                           <Delete
                           getAllData = {getData}
                           setData = {setGetData}
                           id = {e._id}
                           data = "regisData"/>
 
                            <Edit
                            id = {e._id}
                            route = "getuserbyid"
                            />
                            <br></br>
                        </Fragment>
                    )
                }):""
            }

          

            
            
        </Fragment>

    )
}
export default AllUserData;