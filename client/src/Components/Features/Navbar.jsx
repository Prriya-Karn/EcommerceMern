import { Fragment, useContext } from "react"
import "../../style/navbar.css";
import Button from "../UI/Button";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../tokenStore/Auth";
import Logout from "../../Pages/Logout";

const buttName = ["Login", "register", "Logout"];

export const Navbar = () => {
    const {isAdmin} = useContext(AuthContext);

    const { getUserData } = useContext(AuthContext)
    console.log(getUserData)

    return (
        <Fragment>
            <div className="main-navbar flex bg-slate-800
        lg:h-16 lg:bg-bodyColor lg:place-items-center text-lg cursor-pointer">
                <div className="logo  lg:ml-8">
                    <h1 className="font-roboto">Priya Store</h1>
                </div>
                <ul className="flex lg:gap-7 
                   lg:ml-auto lg:mr-16 font-roboto">
                   <NavLink to="/">
                   <li>Home</li>
                   </NavLink>
                    
                    <li>About</li>
                    <NavLink to="/contact">
                    <li>Contact</li>
                    </NavLink>
                    <li>Services</li>

                </ul>
                <div className="lg:flex lg:mr-5">

                    {
                        getUserData == undefined ? <NavLink to="/login">
                            <Button 
                            buttName={buttName[0]}
                            className="bg-bg lg:p-2"/>
                        </NavLink> :
                            <Logout />
                    }
                    {
                        isAdmin=="true"?
                        <Fragment>
                        <ul className="ml-5"><NavLink to="/admin"><li>Admin</li></NavLink></ul>
                        </Fragment>:""
                        
                    }
                    <ul>
                   
                    <li className="ml-5 mr-8">cart</li>
                    </ul>
                </div>

            </div>
        </Fragment>
    )
}

