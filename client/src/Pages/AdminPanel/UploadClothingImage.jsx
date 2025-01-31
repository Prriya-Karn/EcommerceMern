import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import AllImages from "./AllImages";
import Category from "../Category";
import { toast } from "react-toastify";

const UploadClothingImage = () => {
    const { token, API } = useContext(AuthContext);
    const [img, setImg] = useState();
    const [productInfo, setProInfo] = useState({
        productName: "",
        price: "",
        categoryImage: ""
    });

    const [newImage, setNewImage] = useState(false);


    const selectImg = (event) => {
        setImg(event.target.files[0]);
    };

    const pro = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const submitImage = async () => {
        try {
            const formData = new FormData();
            formData.append("image", img);
            formData.append("proname", productInfo.productName);
            formData.append("price", productInfo.price);

            const imgSave = await fetch(`${API}/api/admin/upload/${productInfo.categoryImage}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });

            const imageData = await imgSave.json();


            setNewImage(imageData);
            if (imgSave.status === 400) return toast.error("Your file is not an image file");
            else return toast.success("Successfully uploaded image");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Fragment>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Upload Clothing Image</h1>

                {/* Product Image Input */}
                <div className="mb-4">
                    <label htmlFor="file-upload" className="block text-lg font-medium text-gray-700">
                        Choose Image
                    </label>
                    <input
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        type="file"
                        onChange={selectImg}
                        id="file-upload"
                    />
                </div>

                {/* Product Name Input */}
                <div className="mb-4">
                    <label htmlFor="product-name" className="block text-lg font-medium text-gray-700">
                        Product Name
                    </label>
                    <input
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        type="text"
                        name="productName"
                        onChange={pro}
                        id="product-name"
                        placeholder="Enter product name"
                    />
                </div>

                {/* Price Input */}
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        type="number"
                        name="price"
                        onChange={pro}
                        id="price"
                        placeholder="Enter product price"
                    />
                </div>

                {/* Category Input */}
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Category Name
                    </label>



                    <select
                        value={productInfo.categoryImage}
                        name="categoryImage"
                        onChange={pro}>

                        <option value="">Select category</option>
                        {
                            Category.map((e) => {
                                return (
                                    <Fragment key={e.id}>
                                        <option value={e}>{e}</option>
                                    </Fragment>

                                )
                            })
                        }
                    </select>

                </div>

                {/* Upload Button */}
                <button
                    onClick={submitImage}
                    className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition duration-300 mb-6">
                    Upload Image
                </button>


                <AllImages
                    NewImgData={newImage}
                />
            </div>

        </Fragment>
    );
};

export default UploadClothingImage;

