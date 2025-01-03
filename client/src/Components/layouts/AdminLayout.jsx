import { Fragment } from "react";
import { Outlet, NavLink} from "react-router-dom";

const AdminLayout = () => {
    return (
        <Fragment>
        <NavLink to="/admin/usersdata">AllUsersData</NavLink><br></br>
        <NavLink to="/admin/contactdata">AllContactData</NavLink><br></br>
        <NavLink to="/admin/servicedata">AllServiceData</NavLink><br></br>
            <Outlet />
        </Fragment>
    )
}

export default AdminLayout;