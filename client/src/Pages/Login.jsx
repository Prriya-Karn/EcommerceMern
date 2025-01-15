import { Fragment, useContext, useState } from "react";
import img from "../../public/images/login.jpg"

import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../tokenStore/Auth";
import Input from "../Components/UI/Input";
import Button from "../Components/UI/Button";


const Login = () => {
    const navigate = useNavigate();
    const { API } = useContext(AuthContext);
    const { serverToken } = useContext(AuthContext)
    const [log, setLog] = useState({
        Email: "",
        Password: ""
    });
    const [hidePass, setHide] = useState(true)

    const logData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLog((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const subLog = async (e) => {
        try {
            e.preventDefault()
            const login = await fetch(`${API}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(log)
            })
            const resLogin = await login.json();
            console.log(resLogin)
            if (login.status == 200) {
                alert("login successfull");
                serverToken(resLogin.token);
                navigate("/");
            } else {
                alert("login not successfull")
            }


        } catch (error) {
            console.log(error);
        }
    }

    const showHidePass = () => {
        setHide(!hidePass)
    }


    return (
        <Fragment>
            <div className="flex justify-center items-center">



                <div className="md:w-full w-full lg:w-3/4 xl:w-1/2  rounded-lg p-8">
                    <div className="mb-10">
                        <h1 className="text-center font-semibold text-black
                        md:text-5xl lg:text-5xl sm:text-3xl text-3xl
                        ">Login</h1>
                        <p className="text-center sm:text-sm md:text-xl lg:text-xl md:mt-5 sm:mt-2 mt-2 text-black">
                        Please enter your e-mail and password:</p>
                    </div>

                    <form className="flex flex-col items-center">

                    <div className="w-80 sm:w-80   justify-center   flex items-center 
                     md:w-2/3
                     lg:w-2/3">
                    <Input
                        logData={logData}
                        type="email"
                        name="email" 
                        value={log.Email}
                        placeholder="E-mail" />
                        </div>


                       
                    <div className="flex  items-center justify-center w-80 sm:w-80 md:w-2/3 lg:w-2/3 mb-5">
                        <Input logData={logData}
                            type={(hidePass == true) ? "Password" : "text"}
                            name="password"
                            value={log.Password}
                            placeholder="Password" />

                            <Button
                            buttName=<img className="lg:w-7 lg:h-7 md:w-7 md:h-7
                            w-7 h-7
                             sm:w-7 sm:h-7" src={hidePass == true ? "../../public/image/eye.png" : "../../public/image/hidden.png"} />
                            onClickFun={showHidePass}
                            className="bg-bg"/>
                            </div>


                    <Button
                        onClickFun={subLog}
                        buttName="Login"
                        className="loginButt" />

                        </form>

                    <div className="text-center text-sm md:text-base lg:text-base">
                        <h4>New Customer?
                            <NavLink to="/register">
                                <span className="lg:ml-2 ml-1 underline underline-offset-4 text-bg">
                                    Create an account
                                </span>
                            </NavLink></h4>
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default Login;



// <Input
// logData={logData}
// type="email"
// name="email"
// value={log.Email}
// placeholder="email"/>

// <Input logData={logData}
// type={(hidePass == true) ? "Password" : "text"}
// name="password"
// value={log.Password}
// placeholder="password"/>

// <Button
// buttName="👁️"
// onClickFun={showHidePass}
// className="bg-none" />

// <div className="mt-6">
// <Button
//     onClickFun={subLog}
//     buttName="click"
//     className="bg-bg" />
// </div>

// <div className="lg:mt-5">
// <h4>New Customer?
//     <NavLink to="/register">
//         <span className="lg:ml-2 underline underline-offset-4 text-bg">
//             Create an account
//         </span>
//     </NavLink></h4>
// </div>
