import  { Fragment, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../tokenStore/Auth'

export const GetAlImg = () => {
    const {API} = useContext(AuthContext);
    const [imgData,setImgData] = useState([]);

    const getallimg = async()=>{
        try{
            const getimg = await fetch(`${API}/api/getallimg`,{
                method : "GET"
            })
            const resImg = await getimg.json();
            setImgData(resImg.msg)
            console.log(resImg)
        }catch(error){
            console.log(error)
        }
    }
    // console.log(imgData)
    useEffect(()=>{
        getallimg()
    },[])
  return (
    <Fragment>
    {
        
        imgData.map((e)=>{
            return(
                <Fragment key={e._id}>
                <img src={`../../public/images/${e.filename}`}/>
                <h1>{e.productName}</h1>
                <h2>{e.price}</h2>
                </Fragment>
            )
        })
    }
    </Fragment>
  )
}
