import { Fragment, useContext, useState } from "react"
import { AuthContext } from "../../tokenStore/Auth";
import AllImages from "./AllImages";


const UploadClothingImage = ()=>{
    const {token,API} = useContext(AuthContext);
    const [img,setImg] = useState();
    const [newImage,setNewImage] = useState(false);
    const selectImg = (event)=>{
        setImg(event.target.files[0])
        
    }
    // console.log(img.type)
    
    const submitImage = async()=>{
        try{
            const formData = new FormData();
            formData.append("image",img);
       
            const imgSave = await fetch(`${API}/api/admin/upload`,{
                method : "POST",
                headers : {
                    // You explicitly set the Content-Type header to "multipart/form-data".
                    //  However, when using FormData, the browser automatically sets the Content-Type header
                    //  (with the appropriate boundary). Setting it manually overrides this and breaks the 
                    // request.

                    // "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${token}`
                },
                body: formData
            })
            const imageData = await imgSave.json();
            console.log("imgSave",imageData)
            setNewImage(imageData)
            if(imgSave.status == 400) return alert("your file is not image file")
                else return alert("successfully uploaded image")
        }catch(error){
            console.log(error)
        }

        
    }
    return(
        <Fragment>
        <h1>All images</h1>
        <input className="mt-5" onChange={selectImg} type="file"/>
        <button onClick={submitImage} className="bg-bg">upload</button>

        <AllImages
        NewImgData = {newImage}/>
        </Fragment>
    )
}
export default UploadClothingImage;
