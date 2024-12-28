import { Fragment } from "react";
import img from "../../public/images/login.jpg"
import Button from "../Components/UI/Button";
const Login = () => {
    
    return (
        <Fragment>
            <div className="lg:h-screen lg:flex lg:justify-center lg:items-center lg:gap-36">
            <div className="lg:w-1/3 lg:h-2/3">
            <img src={img} className="lg:w-full lg:h-full"/>
            </div>


            <div className="lg:w-1/3 lg:h-96 ">
            <div className="lg:text-5xl font-semibold lg:mb-7">
            <h1 className="underline underline-offset-8">Login Form</h1> 
            </div>
           
            <div className="lg:w-96 lg:text-lg">
            <label className="lg:mb-10 lg:w-96">Email</label>
            <br></br>
            <input type="text" className="lg:mt-1 lg:bg-bodyColor lg:w-5/6"/>
            </div>
            <div className="lg:w-96 lg:mt-1 lg:text-lg">
            <label className="lg:mb-10 lg:w-96">Password</label>
            <br></br>
            <input type="text" className="lg:mt-1 lg:bg-bodyColor lg:w-5/6"/>
            </div>
            
            <div className="lg:mt-7">
            <Button
            buttName= "Login"
            />
            </div>
            
            
            </div>
            </div>
        </Fragment>
    )
}

export default Login;
