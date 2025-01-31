import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../tokenStore/Auth";
import Testimonial from "../../Pages/Testimonial";
import { toast } from "react-toastify";

const Reviews = () => {
    const { API } = useContext(AuthContext);

    const [review, setReview] = useState(false);
    const [newreview, setNewReview] = useState([]);

    const [reviewdata, setReviewData] = useState({
        reviewMessage: "",
        name: "",
        email: ""
    })

    const reviewData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setReviewData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }


    const cancelReview = () => {
        setReviewData({
            reviewMessage: "",
            name: "",
            email: ""
        })
    }


    const writeReview = () => {
        setReview(!review)
    }


    useEffect(() => {

    })


    const submitReview = useCallback(async () => {
        try {
            const saveData = await fetch(`${API}/api/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviewdata)
            })

            const resReview = await saveData.json();
            console.log(resReview);
            setNewReview(resReview);


            if (saveData.status == 200) {
                toast.success("data save success")
            } else{
                toast.error("not save");
            }

        } catch (error) {
            console.log(error)
        }
    }, [API, reviewdata])


    return (
        <Fragment>
            <div className="mt-16 xl:ml-96 xl:mr-96">
                <h1 className="font-bold text-center text-2xl">Customer Reviews</h1>
                <div className="flex justify-between ml-5 mr-5 md:mr-0 md:w-2/3 md:ml-52 lg:w-1/2 lg:ml-72 xl:ml-0  xl:w-full lg:justify-center mt-10">
                    <div className="flex w-64 justify-center items-center">
                        <img className="w-5 h-5" src="/image/rating.png" />
                        <img className="w-5 h-5" src="/image/rating.png" />
                        <img className="w-5 h-5" src="/image/rating.png" />
                        <img className="w-5 h-5" src="/image/rating.png" />
                        <img className="w-5 h-5" src="/image/rating.png" />
                    </div>
                    <div className="flex justify-start w-1/2 md:w-64">
                        <button onClick={writeReview}
                            className="bg-revbg hover:bg-gray-300 hover:text-black w-64  md:w-full md:px-16 rounded-sm text-white font-bold py-2">
                            {
                                review ? "Cancel review" : "Write a review"
                            }
                        </button>
                    </div>
                </div>

                {
                    review ? <Fragment>

                        <h1 className="font-bold text-center text-2xl mt-20">Write a review</h1>

                        <div className="flex justify-center">
                            <div className="mt-10 w-80 ml-2 mr-2 md:mr-0 md:ml-0 md:w-1/2 lg:w-1/2 xl:w-full">
                                <textarea value={reviewdata.reviewMessage} onChange={reviewData} name="reviewMessage"
                                    className="placeholder-slate-400 border-2
     border-revbg rounded w-full h-52 p-5 text-lg"
                                    placeholder="Write your reviews here" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-center">Name</h2>
                            <div className="flex justify-center">
                                <input value={reviewdata.name} onChange={reviewData} name="name"
                                    className="placeholder-slate-400 border-2
     border-revbg p-1 px-3 rounded mt-2 mb-2 w-64" type="text" placeholder="Enter your name (public)" />
                            </div>

                            <h2 className="text-center">Email</h2>
                            <div className="flex justify-center">
                                <input value={reviewdata.email} onChange={reviewData} name="email"
                                    className="placeholder-slate-400 border-2
     border-revbg p-1 px-3 rounded mt-2 mb-2 w-64" type="email" placeholder="Enter your email (private)" />
                            </div>
                        </div>

                        <div className="flex justify-center gap-10 mt-7">
                            <button onClick={cancelReview}
                                className="border-2 border-revbg hover:text-black text-xs py-2 px-2 md:text-base md:px-6 md:py-2 rounded-sm font-bold ">
                                Cancel Review
                            </button>

                            <button onClick={submitReview}
                                className="bg-revbg rounded-sm text-white text-xs px-2 py-2 md:text-base md:px-6 md:py-2 font-bold">
                                Submit Review
                            </button>

                        </div>

                    </Fragment> : ""
                }

                <Testimonial
                newreview = {newreview}/>

            </div>
        </Fragment>
    )
}

export default Reviews;