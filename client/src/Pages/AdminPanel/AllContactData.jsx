import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import Delete from "./Delete";
import Edit from "./Edit";

const AllContactData = () => {
    const { API } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const [con, setCon] = useState([]);
    const [showhide, setShowHide] = useState(false);

    const allConData = async () => {
        try {
            const conData = await fetch(`${API}/api/admin/allcontactdata`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const conres = await conData.json();
            console.log(conres);
            setCon(conres.msg);
            setShowHide(!showhide);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <div className="p-6 max-w-3xl mx-auto">
                <button
                    onClick={allConData}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                >
                    {showhide ? "Hide All Contact Data" : "Show All Contact Data"}
                </button>

                {showhide && (
                    <div className="mt-6 space-y-4">
                        {con.map((e) => (
                            <div
                                key={e._id}
                                className="border border-gray-300 rounded-lg p-4 shadow-sm">
                               
                                <p className="text-gray-600">
                                    <strong>Username:</strong> {e.username}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> {e.email}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Message:</strong> {e.message}
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <Delete
                                        data="conData"
                                        setData={setCon}
                                        getAllData={con}
                                        id={e._id}
                                    />
                                    <Edit id={e._id} route="conbyid" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default AllContactData;
