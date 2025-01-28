import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import { NavLink } from "react-router-dom";

const CommonGetAllImage = ({catName}) => {
     const { API } = useContext(AuthContext);
        const [imgDatas, setImgData] = useState([]);
    
    
        const getallimg = async () => {
            try {
                const getimg = await fetch(`${API}/api/getallimg`, {
                    method: "GET"
                })
                const resImg = await getimg.json();
                console.log(resImg)
                setImgData(resImg.msg)
    
                console.log(resImg.msg.length)
            } catch (error) {
                console.log(error)
            }
        }
    
       console.log(imgDatas)
     
        useEffect(() => {
            getallimg()
        }, [])
  return (
    <Fragment>
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 
    grid-cols-2 w-full xl:gap-y-2 md:gap-x-2 lg:gap-y-5 gap-y-10  mb-10 mt-2 h-auto p-5">
    {
        imgDatas.map((e,index)=>{
            console.log(e)
            return(
                <Fragment key={index}>
                {
                    e.categoryImage == catName ?
                    <div className="flex justify-center
                    sm:h-auto
                     md:h-auto lg:h-auto">
        
                <div className="card rounded-none
                      sm:w-full w-full
                      md:w-full lg:w-full" style={{border:"1px solid gray"}}>
                    <figure
                        className="sm:h-full
                        md:h-full lg:h-full">
        
                        <NavLink to={`/addtocart/${e._id}/${e.filename}/${e.price}/${e.productName}`}>
                            <img className="h-full w-full" src={`/images/${e.filename}`} />
                            <div className="flex justify-center">
                            <button className="capitalize bg-slate-300 text-black font-semibold w-full h-10">Add to cart</button>
                            </div>
                           
                        </NavLink>
                    </figure>
                    {/* Added background color and padding to card-body */}
                    <div className="
                    p-1
                    lg:p-4
                     md:p-2">
                    <h2 className="text-center md:text-base text-sm font-medium truncate">{e.productName}</h2>
                    <p className='text-center mt-1'>{e.price}</p>
                    
                    
                </div>
                </div>
        
            </div>:""
                }
                </Fragment>
            )
        })
    }

</div>
    </Fragment>
  )
}

export default CommonGetAllImage;
