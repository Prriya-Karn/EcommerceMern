import { Fragment, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../tokenStore/Auth"


const AllImages = ({NewImgData}) => {
    const { token, API } = useContext(AuthContext)
    const [allImg, setAllImg] = useState([]);

    const getImage = async () => {
        try {
            const getAllImages = await fetch(`${API}/api/admin/getimage`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            
            const img = await getAllImages.json();
            setAllImg(img);
            console.log("img",img)
        } catch (error) {
            console.log(error)
        }

    }
    
    useEffect(() => {
        if (NewImgData) {
            // Assuming NewImgData is an object with filename and other properties
            setAllImg((prevImages) => [...prevImages, NewImgData]);
        }
    }, [NewImgData]); // Update the image list when newImage prop changes



console.log("allImg",allImg)

    useEffect(() => {
        getImage()
    }, [])
    return (
        <Fragment>
            <h1>all images</h1>
            {
                allImg.map((e) => {
                    return (
                        
                        <Fragment key={e._id}>
                        <img src={`../../../public/images/${e.filename}`} alt="Image" />
                        <button className="bg-bg">Edit</button>
                        <button className="ml-5 bg-bg">Delete</button>
                        </Fragment>
                    )
                })
            }

        </Fragment>
    )
}

export default AllImages;