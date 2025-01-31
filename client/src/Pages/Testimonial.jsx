import { Fragment, useContext, useEffect, useState } from "react"
import { AuthContext } from "../tokenStore/Auth"


const Testimonial = ({newreview}) => {
    const { API } = useContext(AuthContext);
    const [getReview, setGetReview] = useState([]);
    const [length, setLength] = useState(2);

    const getReviewData = async () => {
        try {
            const getdata = await fetch(`${API}/api/reviewgetdata`, {
                method: "GET"
            })
            const res = await getdata.json();
            setGetReview(res.msg);
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(newreview){
            getReviewData();
        }
    },[newreview])
    

    const viewmore = ()=>{
        if(length==2){
            setLength(getReview.length)
        }else{
            setLength(2)
        }
    }

const newgetReview = getReview.slice(0,length);

// console.log(newgetReview);

    useEffect(() => {
        getReviewData();
    }, [])

    return (
        <Fragment>
            <div className="mt-20">
                <h1 className="capitalize font-bold text-center text-2xl">Read what our customers say</h1>
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center  ml-10 mr-10 lg:ml-48 lg:mr-48 xl:ml-0 xl:mr-0 sm:h-auto  md:h-auto lg:h-auto">

                    {
                        newgetReview.map((e) => {

                            return (
                                <Fragment key={e._id}>
                              
                            <div className="card  mt-10 p-5
                                sm:w-full w-full
                                md:w-full lg:w-full" style={{ border: "1px solid gray" }}>
                                                <p className="text-sm">{e.reviewMessage}</p>
                                                <div className="flex gap-2 mt-5">
                                                    <img className="w-5 h-5" src="/image/user.png" />
                                                    <p className="capitalize text-base">{e.name}</p>
                                                </div>
                                                
                                            </div>
                                               

                                </Fragment>
                            )
                        })

                    }


                   
                </div>
                
                <div className="mt-5 flex justify-center uppercase">
                <button onClick={viewmore} className="text-center w-52 h-8 text-base-100 text-lg rounded-lg bg-revbg">
                {
                    length==2?"view more":"view less"
                }
                </button>
                </div>
            </div>
         
        </Fragment>
    )
}

export default Testimonial;
