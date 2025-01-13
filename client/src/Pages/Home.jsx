import  { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";

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

        <GetAlImg/>
        </Fragment>
    )
}

export default Home;