import { Fragment, useContext } from "react";
import { Outlet, NavLink, useNavigate} from "react-router-dom";
import { AuthContext } from "../../tokenStore/Auth";

const AdminLayout = () => {
    const {isAdmin} = useContext(AuthContext);
    // console.log(typeof(isAdmin))
    const navigate = useNavigate();
    return (
        <Fragment>
        {
            isAdmin == "true"?
            <Fragment>
            <NavLink to="/admin/usersdata">AllUsersData</NavLink><br></br>
        <NavLink to="/admin/contactdata">AllContactData</NavLink><br></br>
        <NavLink to="/admin/servicedata">AllServiceData</NavLink><br></br>
        <NavLink to="/admin/uploadimages">UploadImages</NavLink>
            <Outlet />
            </Fragment>:
            navigate("/")
            
        }
        
        </Fragment>
    )
}

export default AdminLayout;