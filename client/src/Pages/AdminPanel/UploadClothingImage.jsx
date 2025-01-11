import { Fragment, useContext, useState } from "react"
import { AuthContext } from "../../tokenStore/Auth";
import AllImages from "./AllImages";


const UploadClothingImage = ()=>{
    const {token,API} = useContext(AuthContext);
    const [img,setImg] = useState();
    const [productInfo,setProInfo] = useState({
        productName : "",
        price : ""
    })


    const [newImage,setNewImage] = useState(false);
    const selectImg = (event)=>{
        setImg(event.target.files[0])
        
    }
    const pro = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setProInfo((pre)=>{
            return{
                ...pre,
                [name] : value
            }
        })
    }
    
    const submitImage = async()=>{
        try{
            const formData = new FormData();
            formData.append("image",img);
            formData.append('proname',productInfo.productName);
            formData.append('price',productInfo.price);
            
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
        <br></br><br></br>

        <input type="text"
        onChange={pro}
         name = "productName" 
         placeholder="product name"/>
         <br></br><br></br>

         <input type="number"
         onChange={pro}
         name = "price" 
         placeholder="price"/>
         <br></br><br></br>

        <button onClick={submitImage} className="bg-bg">upload</button>

        <AllImages
        NewImgData = {newImage}/>
        </Fragment>
    )
}
export default UploadClothingImage;
