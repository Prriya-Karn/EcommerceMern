import { Fragment, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../tokenStore/Auth';
import CategoryImages from './CategoryImages';

export const GetAlImg = () => {
    const { API } = useContext(AuthContext);
    const [imgData, setImgData] = useState([]);


    const getallimg = async () => {
        try {
            const getimg = await fetch(`${API}/api/getallimg`, {
                method: "GET"
            })
            const resImg = await getimg.json();
            setImgData(resImg.msg)
        } catch (error) {
            console.log(error)
        }
    }

   
 
    useEffect(() => {
        getallimg()
    }, [])
    return (
        <Fragment>
           


           <CategoryImages
           headCatName = "HEAVY WEIGHT JACKETS"
           subHeadCatName = "270 GSM | ACID DISTRESSED"
           imgData = {imgData}
           catName = "heavy weight jackets"
           />

            {/*------------------ carousel effect end ----------------------- */}

         <CategoryImages
         headCatName="new in"
         imgData={imgData}
         catName="new in"
         />
        </Fragment>
    )
}
