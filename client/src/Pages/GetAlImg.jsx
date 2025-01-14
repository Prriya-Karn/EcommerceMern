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
            <div className='text-center mt-12'>
                <h1 className='md:text-5xl sm:text-4xl 
                       text-3xl mb-5  font-medium'>
                    HEAVY WEIGHT JACKETS</h1>
                <p>270 GSM | ACID DISTRESSED</p>
            </div>


            {/*------------------ carousel effect start from here ----------------------- */}
            <div className="carousel flex mb-36 mt-2 h-auto p-5">

            {

                imgData.map((e) => {
                    return (
                        <Fragment key={e._id}>
                           
                        <div className="rounded-lg 
            ml-2 h-72
            md:ml-2 md:h-96 
            lg:ml-5 lg:h-1/2">

              <div className="card
              w-44
              md:w-56
              lg:w-72">
                <figure 
                className="h-60
                md:h-80
                lg:h-96">

                <NavLink to={`/products/${e.filename}/${e.price}/${e.productName}`}>
                <img className="h-full w-full" src={`../../public/images/${e.filename}`} />
            </NavLink>
                </figure>
                {/* Added background color and padding to card-body */}
                <div className="bg-white rounded-b-lg 
                p-1
                lg:p-4
                 md:p-2">
                  <h2 className="text-center md:text-base text-sm font-medium">{e.productName}</h2>
                  <p className='text-center mt-1'>{e.price}</p>
                
                </div>
              </div>
            </div>

                            
                        </Fragment>
                    )
                })
            }


            

        
          </div>
          

            {/*------------------ carousel effect end ----------------------- */}



           
        </Fragment>
    )
}
