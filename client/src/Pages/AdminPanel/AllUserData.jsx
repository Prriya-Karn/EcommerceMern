import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";

const AllUserData = () => {
    const { API } = useContext(AuthContext);
    const { isAdmin } = useContext(AuthContext);
    const { getData } = useContext(AuthContext);
    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const [getAllRegisData, setRegisData] = useState([]);
    const [showhideuser,setshowhideuser] = useState(false);

    const getAllUser = () => {
        setRegisData(getData)
        setshowhideuser(!showhideuser)
    }



    // update the user data (only for admin)

    const updateData = async (id) => {
        try {
            const update = await fetch(`${API}/api/admin/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },

            });

            console.log("update", update)

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
               (showhideuser)?getAllRegisData.map((e) => {
                    return (
                        <Fragment key={e._id}>
                            <br></br>
                            <h1>{e.username}</h1>
                            <p>Email:{e.email} phone:{e.phone} password:{e.password}</p>
                           <Delete
                           getAllData = {getAllRegisData}
                           setData = {setRegisData}
                           id = {e._id}
                           data = "regisData"
                           />

                            <button className="bg-bg" onClick={() => updateData(e._id)}>Update</button>
                            <br></br>
                        </Fragment>
                    )
                }):""
            }
        </Fragment>

    )
}
export default AllUserData;