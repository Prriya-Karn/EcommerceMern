import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";

const AllUserData = () => {
    const { API } = useContext(AuthContext);
    const { isAdmin } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [getData, setGetData] = useState([]);
    const [showhideuser, setShowHideUser] = useState(false);

    const getAllUser = async () => {
        try {
            const data = await fetch(`${API}/api/admin/alluserdata`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const dataJson = await data.json();
            setGetData(dataJson);
            setShowHideUser(!showhideuser);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <div className="p-6 max-w-3xl mx-auto">
                {isAdmin === "false" ? (
                    navigate("/")
                ) : (
                    <Fragment>
                        <button
                            onClick={getAllUser}
                            className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 transition duration-300 mb-6"
                        >
                            {showhideuser ? "Hide Users" : "Show Users"}
                        </button>
                    </Fragment>
                )}

                {showhideuser && (
                    <div className="mt-6 space-y-4">
                        {getData.map((e) => (
                            <div
                                key={e._id}
                                className="border border-gray-300 rounded-lg p-4 shadow-sm"
                            >
                                <h1 className="sm:text-lg font-semibold text-gray-800">
                                    Name: {e.username}
                                </h1>
                                <p className="text-gray-600 text-base">
                                    <strong>Email:</strong> {e.email}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> {e.phone}
                                </p>
                                <p className="text-sm text-red-600 truncate">
                                    <strong>Password:</strong> {e.password}
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <Delete
                                        data="regisData"
                                        setData={setGetData}
                                        getAllData={getData}
                                        id={e._id}
                                    />
                                    <Edit id={e._id} route="getuserbyid" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default AllUserData;
