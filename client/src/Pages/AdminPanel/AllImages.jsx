import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import Delimage from "./Delimage";
import { useNavigate } from "react-router-dom";

const AllImages = ({ NewImgData }) => {
    const { token, API } = useContext(AuthContext);
    const [allImg, setAllImg] = useState([]);
    const navigate = useNavigate();

    // Fetch images from the server
    const getImage = async () => {
        try {
            const getAllImages = await fetch(`${API}/api/admin/getimage`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            const img = await getAllImages.json();
            setAllImg(img);
        } catch (error) {
            console.log(error);
        }
    };
    


    // Add newly uploaded image to the list
    useEffect(() => {
        if (NewImgData) {
            setAllImg((prevImages) => [...prevImages, NewImgData]);
            getImage();
        }
    }, [NewImgData]);

    useEffect(() => {
        getImage();
    }, []);

    // Edit image handler
    const editImg = async (id) => {
        try {
            const getImgById = await fetch(`${API}/api/admin/getimgbyid/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            const getImg = await getImgById.json();
            const imgData = getImg[0];
            navigate("/admin/usersdata/updatedata", {
                state: {
                    url: "updateimg",
                    productName: imgData.productName,
                    price: imgData.price,
                    filename: imgData.filename,
                    id: imgData._id,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Images</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allImg.map((e) => {
                    return (
                        <Fragment key={e._id}>
                            <div className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition duration-300">
                                <img
                                    src={`https://ecommercemern-1-bj94.onrender.com/images/${e.filename}`}
                                    alt={e.productName}
                                    className="w-full h-48  rounded-md mb-4"
                                />
                                <h2 className=" font-semibold text-gray-800 mb-2">{e.productName}</h2>
                                <p className="text-sm text-gray-600 mb-4">Price: ₹{e.price}</p>

                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => editImg(e._id)}
                                        className="text-blue-500 hover:text-blue-600 font-medium"
                                    >
                                       <img className="w-4 h-4" src="../../../public/image/edit.png"/>
                                    </button>
                                    <Delimage setAllImg={setAllImg} allImg={allImg} id={e._id} />
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default AllImages;
