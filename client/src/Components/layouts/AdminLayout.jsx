import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../tokenStore/Auth";
const AdminLayout = ()=>{
    const { isAdmin } = useContext(AuthContext)
    const navigate = useNavigate();

    return(
        <Fragment>
        {
            (isAdmin=="false")?navigate("/"):
            <h1>hi this is admin page</h1>
        }
        
        </Fragment>
    )
}

export default AdminLayout;