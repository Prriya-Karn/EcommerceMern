import { Fragment, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../tokenStore/Auth'
import { NavLink } from 'react-router-dom';

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
            console.log(resImg)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(imgData)
    useEffect(() => {
        getallimg()
    }, [])
    return (
        <Fragment>
        <div className='lg:text-center mt-12'>
        <h1 className='lg:text-5xl mb-5 font-medium'>HEAVY WEIGHT JACKETS</h1>
        <p>270 GSM | ACID DISTRESSED</p>
        </div>
        
            {

                imgData.map((e) => {
                    return (
                        <Fragment key={e._id}>
                            <NavLink to={`/products/${e.filename}/${e.price}/${e.productName}`}>
                                <img src={`../../public/images/${e.filename}`} />
                            </NavLink>
                            <h1>{e.productName}</h1>
                            <h2>{e.price}</h2>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
