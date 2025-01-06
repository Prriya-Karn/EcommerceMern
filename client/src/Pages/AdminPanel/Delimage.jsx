import { Fragment, useContext } from "react"
import { AuthContext } from "../../tokenStore/Auth"

const Delimage = ({id,setAllImg,allImg})=>{
    const {token,API} = useContext(AuthContext);
    
    const delImage = async()=>{
        try{
            const delImg = await fetch(`${API}/api/admin/delimg/${id}`,{
                method : "DELETE",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            });

            const resDel = await delImg.json();
            console.log(resDel) 
            
            const getImgAfterDel = allImg.filter((e)=>{
                return e._id != id
            })

            setAllImg(getImgAfterDel)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <Fragment>
        <button onClick={delImage}>delete</button>
        </Fragment>
    )
}

export default Delimage;