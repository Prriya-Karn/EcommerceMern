import { Fragment, useContext } from "react";
import { AuthContext } from "../../tokenStore/Auth";

const Delete = ({ getAllData, setData, id, data }) => {
    const { API } = useContext(AuthContext);
    const { isAdmin } = useContext(AuthContext);
    const { token } = useContext(AuthContext)
    //----------------------- delete the user data for(admin only)-------------------------

    const delUser = async (id) => {
        console.log("click")
        if (!isAdmin) return;
        try {
            const del = await fetch(`${API}/api/admin/${data == "conData" ? "delcondata" : "delete"}/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });


            if (del.ok == true) {
                const newData = getAllData.filter((e) => {
                    return e._id != id
                })
                console.log(newData)
                setData(newData)
            }
            console.log(del.ok)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
            <button onClick={() => delUser(id)}>Delete</button>

        </Fragment>
    )
}

export default Delete;