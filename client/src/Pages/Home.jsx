import  { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";

const Home = ()=>{
    const {getUserData} = useContext(AuthContext);
    useEffect(() => {
        console.log("userdata", getUserData);
    }, [getUserData]);
    return(
        <Fragment>
        <nav className="main-nav">hi{getUserData}</nav>
        <GetAlImg/>
        </Fragment>
    )
}

export default Home;