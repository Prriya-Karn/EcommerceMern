import { createContext, Fragment, useEffect, useState } from "react";

const AuthContext = createContext();
const Auth = ({ children }) => {
    const API = import.meta.env.VITE_APP_URI_API
    const [token, setToken] = useState(localStorage.getItem("authToken"))
    const [getUserData, setUserData] = useState();
    const [isAdmin, setIsAdmin] = useState();
    // getuserData show on contact page:-
    const [con, setCon] = useState();
   

    const serverToken = (userToken) => {
        setToken(userToken);
        return localStorage.setItem("authToken", userToken);
    }
    

    // you can add a useEffect that listens to changes in the token state:
    useEffect(() => {
        // console.log("Updated token:", token);
    }, [token]);


    // verify the token by server and get the data of loginned user:- 
    const verifyToken = async () => {
        try {
            const tokenVerify = await fetch(`${API}/api/user`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const resToken = await tokenVerify.json();
        

            setUserData(resToken.msg.username)
            setCon(resToken.msg);
            setIsAdmin(resToken.msg.isAdmin)
           
            
        } catch (error) {
            console.log(error)
        }
    }


    const removeToken = () => {
        setToken(null);
        return localStorage.removeItem("authToken", token)
    }


    useEffect(() => {
        verifyToken();
    }, [token])     // Run whenever the token changes


     // useEffect to fetch all user data when `isAdmin` is true
    // useEffect(()=>{
    //     getAllUser();
    // },[isAdmin])          // getAllUser call when isAdmin change



  
    

    return (
        <Fragment>
            <AuthContext.Provider value={{ API, serverToken, token, getUserData, removeToken, con, isAdmin}}>
                {children}
            </AuthContext.Provider>
        </Fragment>
    )
}

export default Auth;
export { AuthContext }