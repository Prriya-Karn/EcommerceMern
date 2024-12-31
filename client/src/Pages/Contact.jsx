import { Fragment, useContext, useState } from "react"
import { AuthContext } from "../tokenStore/Auth";

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
                alert(conRes.msg);
                console.log(conRes.msg)
            } else {
                alert(conRes.msg)
                console.log(conRes.msg)
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Fragment>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter your name"
                    name="username" value={contactData.username} onChange={handleInputChange} />
                <input type="email" placeholder="enter your email"
                    name="email" value={contactData.email} onChange={handleInputChange} />
                <input type="text" placeholder="enter your message"
                    name="message" value={contactData.message} 
                    onChange={handleInputChange} />


                <button type="submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default Contact;