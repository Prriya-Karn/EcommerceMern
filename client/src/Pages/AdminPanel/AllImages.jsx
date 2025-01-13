import { Fragment, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../tokenStore/Auth"

import Delimage from "./Delimage";
import { useNavigate } from "react-router-dom";


const AllImages = ({NewImgData}) => {
    const { token, API } = useContext(AuthContext)
    const [allImg, setAllImg] = useState([]);
    const navigate = useNavigate()
    
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


    const editImg = async(id)=>{
        try{
            const getImgById = await fetch(`${API}/api/admin/getimgbyid/${id}`,{
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })

            const getImg = await getImgById.json();
            const imgData = getImg[0]
            // console.log(imgData)
            navigate('/admin/usersdata/updatedata',{
                state : {
                    imgData : imgData,
                    url : "updateimg",
                    productName : imgData.productName,
                    price : imgData.price,
                    filename : imgData.filename
                }
                
            })
            
        }catch(error){
            console.log(error)
        }
    }
  

    return (
        <Fragment>
            <h1>all images</h1>
            {
                allImg.map((e) => {
                    return (
                        
                        <Fragment key={e._id}>
                        <img src={`../../../public/images/${e.filename}`} alt="Image" />
                        <h1>product name: {e.productName}</h1>
                        <p>price : {e.price}</p>
                        <button onClick={()=>editImg(e._id)}>edit</button>
                       <Delimage
                       setAllImg = {setAllImg}
                       allImg = {allImg}
                       id = {e._id}
                       />
                        </Fragment>
                    )
                })
            }

        </Fragment>
    )
}

export default AllImages;