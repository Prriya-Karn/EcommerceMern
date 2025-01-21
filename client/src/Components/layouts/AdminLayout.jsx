import { Fragment, useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../tokenStore/Auth";

const AdminLayout = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      {isAdmin === "true" ? (
        <Fragment>
          {/* Sidebar Layout */}
          <div className="flex h-full flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 
            w-full lg:w-1/4 p-6 flex flex-col gap-8 text-white shadow-lg">
              {/* Logo */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold uppercase tracking-wide">Admin Panel</h1>
              </div>

              {/* Navigation Links */}
              <NavLink
                to="/admin/usersdata"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <img
                  className="w-6 h-6 filter invert"
                  src="../../../public/image/group.png"
                  alt="Users"
                />
                <h2 className="capitalize font-semibold">Users</h2>
              </NavLink>

              <NavLink
                to="/admin/contactdata"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <img
                  className="w-6 h-6 filter invert"
                  src="../../../public/image/contact-us.png"
                  alt="Contact"
                />
                <h2 className="capitalize font-semibold">Contact</h2>
              </NavLink>

              <NavLink
                to="/admin/uploadimages"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <img
                  className="w-6 h-6 filter invert"
                  src="../../../public/image/cloud-computing.png"
                  alt="Upload"
                />
                <h2 className="capitalize font-semibold">Upload</h2>
              </NavLink>

              {/* Logout Option */}
              <button
                onClick={() => navigate("/")}
                className="mt-auto bg-red-600 hover:bg-red-700 p-3 rounded-lg text-center text-white font-semibold transition-all duration-300"
              >
                Logout
              </button>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 p-6">
              <Outlet />
            </div>
          </div>
        </Fragment>
      ) : (
        navigate("/")
      )}
    </Fragment>
  );
};

export default AdminLayout;
