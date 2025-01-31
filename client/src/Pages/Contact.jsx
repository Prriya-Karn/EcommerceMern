import { Fragment, useContext, useState } from "react"
import { AuthContext } from "../tokenStore/Auth";
import { Heading } from "../Components/UI/Heading";
import Input from "../Components/UI/Input";
import Button from "../Components/UI/Button";
import { Textarea } from "../Components/UI/Textarea";
import { toast } from "react-toastify";

const Contact = () => {
    const { API, con } = useContext(AuthContext);
    const [contactData, setConData] = useState({
        username: "",
        email: "",
        message: ""
    });
    const [sub, setSub] = useState(true);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setConData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    if (sub && con) {
        setConData({
            username: con.username,
            email: con.email
        })
        setSub(false)
    }


    const handleSubmit = async(event) => {
        event.preventDefault()  // prevent from refreshing the page
        try {
            const response = await fetch(`${API}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            })
            const conRes = await response.json();
            if (response.status == 400) {
                toast.error(conRes.msg);
                console.log(conRes.msg)
            } else {
                toast.success(conRes.msg)
                console.log(conRes.msg)
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Fragment>
<div className="flex justify-center items-center">
                <div className="md:w-full w-full lg:w-3/4 xl:w-1/2  rounded-lg p-8">

                    <Heading
                    head = "CONTACT US"/>

            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            
            <div className="w-80 sm:w-80  justify-center   flex items-center 
                     md:w-2/3
                     lg:w-2/3">
                     
                    <Input
                        logData={handleInputChange}
                        type="text"
                        name="username" 
                        value={contactData.username}
                        placeholder="enter your name" />
                        </div>

                        <div className="w-80 sm:w-80   justify-center   flex items-center 
                        md:w-2/3
                        lg:w-2/3">
                        
                       <Input
                           logData={handleInputChange}
                           type="email"
                           name="email" 
                           value={contactData.email}
                           placeholder="enter your email" />
                           </div>


                           <div className="w-80 sm:w-80  justify-center   flex items-center 
                        md:w-2/3
                        lg:w-2/3">
                        
                       <Textarea
                           logData={handleInputChange}
                           type="text"
                           name="message" 
                           value={contactData.message}
                           placeholder="enter your message" />
                           </div>

                           <Button
                           onClickFun={handleSubmit}
                           buttName="Submit"
                           className="loginButt" />
            </form>
            </div>
            </div>
        </Fragment>
    )
}

export default Contact;