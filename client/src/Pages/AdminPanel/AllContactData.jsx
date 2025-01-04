import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import Delete from "./Delete";
// import Delete from "./Delete";

const AllContactData = () => {
    const { API } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    // const { isAdmin } = useContext(AuthContext);
    const [con, setCon] = useState([]);
    const [showhide, setShowHide] = useState(false);
    
    const allConData = async () => {
        try {
            const conData = await fetch(`${API}/api/admin/allcontactdata`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const conres = await conData.json();
            console.log(conres)
            setCon(conres.msg)
            setShowHide(!showhide)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>

            <button onClick={allConData} className="bg-bg">
                {
                    (showhide) ? "hideAllConData" : "showAllConData"
                }
            </button>
            {
                (showhide) ? con.map((e) => {
                    return (
                        <Fragment key={e._id}>
                            <h1 className="mt-5">username:{e.username} email:{e.email} message:{e.message}</h1>
                        
                                <Delete
                                data = "conData"
                                setData = {setCon}
                                getAllData = {con}
                                id = {e._id}/>

                                <button className="bg-bg ml-5">Update</button>
                        </Fragment>
                    )
                }) : ""
            }
        </Fragment>

    )
}
export default AllContactData;