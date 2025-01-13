import { Fragment, useContext } from "react"
import "../../style/navbar.css";
import Button from "../UI/Button";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../tokenStore/Auth";
import Logout from "../../Pages/Logout";

const buttName = ["Login", "register", "Logout"];

export const Navbar = ({totalItems}) => {
   
    const {isAdmin} = useContext(AuthContext);
  
    const { getUserData } = useContext(AuthContext)
    console.log(getUserData);

    return (
        <Fragment>
            <div className="main-navbar flex bg-slate-800
        lg:h-16 lg:bg-bodyColor lg:place-items-center text-lg cursor-pointer">
                <div className="font-sans text-base gap-5 lg:ml-8 flex">
                    <h1 className="">Shop by category</h1>
                    <h1>Shop by collection</h1>
                    <h1>Our Story</h1>
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
                   
                    <NavLink to="/cart/:fileName/:price/:productName/:id">
                    <li className="ml-5 mr-8">cart : {totalItems}</li>
                    </NavLink>


                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

