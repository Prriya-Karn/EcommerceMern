import { Fragment, useContext, useState } from "react";

import Button from "../Components/UI/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../tokenStore/Auth";
import { Heading } from "../Components/UI/Heading";
import Input from "../Components/UI/Input";

const Register = () => {
  const { API, serverToken } = useContext(AuthContext);

  const [data, setData] = useState({
    fullName: "",
    Email: "",
    Phone: "",
    Password: ""
  });

  const [hidePassRegis, setHideRegis] = useState(true);

  const showHidePassRegis = () => {
    setHideRegis(!hidePassRegis);
  };

  const regisInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitRegisData = async (e) => {
    try {
      e.preventDefault();
      const submitData = await fetch(`${API}/api/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const res = await submitData.json();
      if (submitData.status === 400) {
        alert(res.msg);
      } else {
        alert("Registration successful");
        serverToken(res.token);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center">
        <div className="md:w-full w-full lg:w-3/4 xl:w-1/2 rounded-lg p-8">
          <Heading head="Register" subHead="Please fill in the fields below:" />

          <div className="flex flex-col items-center">
            <div className="w-80 sm:w-80 justify-center flex items-center md:w-2/3 lg:w-2/3">
              <Input
                logData={regisInput}
                type="text"
                name="username"
                value={data.fullName}
                placeholder="Full Name"
              />
            </div>

            <div className="w-80 sm:w-80 justify-center flex items-center md:w-2/3 lg:w-2/3">
              <Input
                logData={regisInput}
                type="email"
                name="email"
                value={data.Email}
                placeholder="Email"
              />
            </div>

            <div className="w-80 sm:w-80 justify-center flex items-center md:w-2/3 lg:w-2/3">
              <Input
                logData={regisInput}
                type="number"
                name="phone"
                value={data.Phone}
                placeholder="Phone Number"
              />
            </div>

            <div className="flex items-center justify-center w-80 sm:w-80 md:w-2/3 lg:w-2/3 mb-5">
              <Input
                logData={regisInput}
                type={hidePassRegis ? "password" : "text"}
                name="password"
                value={data.Password}
                placeholder="Password"
              />

              <Button
                buttName={
                  <img
                    className="lg:w-7 lg:h-7 md:w-7 md:h-7 w-7 h-7 sm:w-7 sm:h-7"
                    src={hidePassRegis ? "../../public/image/eye.png" : "../../public/image/hidden.png"}
                    alt="toggle visibility"
                  />
                }
                onClickFun={showHidePassRegis}
                className="bg-bg"
              />
            </div>
            </div>

            <div className="flex flex-col items-center">
            <Button onClickFun={submitRegisData}
             buttName="CREATE ACCOUNT" 
             className="loginButt" />
             </div>

          <div className="lg:mt-5">
            <h4 className="text-center">
              Already have an account?{" "}
              <NavLink to="/login">
                <span className="lg:ml-2 underline underline-offset-4 text-bg">Login</span>
              </NavLink>
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;

