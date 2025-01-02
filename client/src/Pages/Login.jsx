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
            <div className="lg:h-screen lg:flex lg:justify-center lg:items-center lg:gap-36">
                <div className="lg:w-1/3 lg:h-2/3">
                    <img src={img} className="lg:w-full lg:h-full" />
                </div>


                <div className="lg:w-1/3 lg:h-96">
                    <div className="lg:text-5xl font-semibold lg:mb-7">
                        <h1 className="underline underline-offset-8">Login Form</h1>
                    </div>

                    <Input
                        logData={logData}
                        type="email"
                        name="email"
                        value={log.Email}
                        placeholder="email"/>

                    <Input logData={logData}
                        type={(hidePass == true) ? "Password" : "text"}
                        name="password"
                        value={log.Password}
                        placeholder="password"/>

                    <Button
                        buttName="👁️"
                        onClickFun={showHidePass}
                        className="bg-none" />

                    <div className="mt-6">
                        <Button
                            onClickFun={subLog}
                            buttName="click"
                            className="bg-bg" />
                    </div>

                    <div className="lg:mt-5">
                        <h4>New Customer?
                            <NavLink to="/register">
                                <span className="lg:ml-2 underline underline-offset-4 text-bg">
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
