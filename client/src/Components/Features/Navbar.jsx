import { Fragment } from "react"
import "../../style/navbar.css";
import Button from "../UI/Button";
import {NavLink} from 'react-router-dom';

const buttName = [
    "login","register"
]
export const Navbar = () => {
    return (
        <Fragment>
            <div className="main-navbar flex bg-slate-800
        lg:h-16 lg:bg-bodyColor lg:place-items-center text-lg cursor-pointer
        ">
                <div className="logo  lg:ml-8">
                    <h1 className = "font-roboto">Priya Store</h1>
                </div>
                <ul className="flex lg:gap-7 
                   lg:ml-auto lg:mr-16 font-roboto">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                <div className="lg:flex lg:mr-5">
            
                <NavLink to="/login">
                <Button
                buttName = {buttName[0]}
                />
                </NavLink>
                
                <h1 className="ml-5 mr-8">cart</h1>
                </div>
                
            </div>
        </Fragment>
    )
}

