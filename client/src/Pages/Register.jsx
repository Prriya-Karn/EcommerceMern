import { Fragment, useContext, useState} from "react";
import img from "../../public/images/login.jpg"
import Button from "../Components/UI/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../tokenStore/Auth";
const register = () => {

  const {API} = useContext(AuthContext);
  const {serverToken} = useContext(AuthContext)


    const [data,setData] = useState({
        fullName : "",
        Email : "",
        Phone : "",
        Password : ""
    });
    
  

    const regisInput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData((pre)=>{
            return{
                ...pre,
                [name] : value
            }
        })
    }


    const submitRegisData = async(e)=>{
        try{
            e.preventDefault()
            const submitData = await fetch(`${API}/api/registration`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })

            const res = await submitData.json();
            if(submitData.status==400){
                alert(res.msg);
            }else{
                alert("registration successfull")
                serverToken(res.token);
                console.log(res)
               } 
        }catch(error){
            console.log(error);
        }
    }






    return (
        <Fragment>
            <div className="lg:h-screen lg:flex lg:justify-center lg:items-center lg:gap-36">
                <div className="lg:w-1/3 lg:h-2/3">
                    <img src={img} className="lg:w-full lg:h-full" />
                </div>


                <div className="lg:w-1/3 lg:h-96 ">
                    <div className="lg:text-5xl font-semibold lg:mb-7">
                        <h1 className="underline underline-offset-8">Register Form</h1>
                    </div>

                    <div className="lg:w-96 lg:text-lg">
                        <label className="lg:mb-10 lg:w-96">Full Name</label>
                        <br></br>
                        <input type="text" onChange={regisInput} name="username"
                         className="lg:mt-1 lg:bg-bodyColor lg:w-5/6" />
                    </div>
                   
                    <div className="lg:w-96 lg:mt-1 lg:text-lg">
                    <label className="lg:mb-10 lg:w-96">Email</label>
                    <br></br>
                    <input type="email" onChange={regisInput} name = "email"
                     className="lg:mt-1 lg:bg-bodyColor lg:w-5/6" />
                </div>

                <div className="lg:w-96 lg:mt-1 lg:text-lg">
                <label className="lg:mb-10 lg:w-96">Phone</label>
                <br></br>
                <input type="number" onChange={regisInput} name = "phone"
                 className="lg:mt-1 lg:bg-bodyColor lg:w-5/6" />
            </div>
                <div className="lg:w-96 lg:mt-1 lg:text-lg">
                <label className="lg:mb-10 lg:w-96">Password</label>
                <br></br>
                <input type="password" onChange={regisInput} name = "password"
                
                className="lg:mt-1 lg:bg-bodyColor lg:w-5/6" />
            </div>

                    <div className="lg:mt-7">
                    <button onClick = {submitRegisData}>click</button>
                        <Button
                            buttName="CREATE ACCOUNT" />
                    </div>

                    <div className="lg:mt-5">
                        <h4>Already have an account?
                            <NavLink to="/login">
                                <span className="lg:ml-2 underline underline-offset-4 text-bg">
                                    Login</span>
                            </NavLink></h4>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default register;
