import  { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";
import { UniqueClothe } from "./UniqueClothe";

// include("../../public/image/img14.webp")
const Home = ()=>{
    const {getUserData} = useContext(AuthContext);
    useEffect(() => {
        console.log("userdata", getUserData);
    }, [getUserData]);
    return(
        <Fragment>
       {/* <nav className="main-nav">hi{getUserData}</nav> */}
        { /* hero image */}
       <div className="-mt-10 lg:block hidden">
       <img src="../../public/image/img14.webp"/>
       </div>

       <div className="sm:-mt-14 md:-mt-14 lg:hidden block bg-orange-400">
       <img src="../../public/image/WhatsApp Image 2025-01-14 at 2.17.54 AM.jpeg"
       className="w-full"/>
       </div>
        <GetAlImg/>
        <UniqueClothe/>
        </Fragment>
    )
}

export default Home;