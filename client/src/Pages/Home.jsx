import  { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";

const Home = ()=>{
    const {getUserData} = useContext(AuthContext);
    useEffect(() => {
        console.log("Updated token:", getUserData);
    }, [getUserData]);
    return(
        <Fragment>
        <nav className="main-nav">hi{getUserData}</nav>
        </Fragment>
    )
}

export default Home;