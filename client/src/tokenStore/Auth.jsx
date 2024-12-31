import { createContext, Fragment, useEffect, useState } from "react";

const AuthContext = createContext();
const Auth = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken"))
   const [getUserData,setUserData] = useState();

   // getuserData show on contact page:-
   const [con,setCon] = useState();


    const API = import.meta.env.VITE_APP_URI_API
    const serverToken = (userToken) => {
        setToken(userToken);
        return localStorage.setItem("authToken", userToken);
    }

    // you can add a useEffect that listens to changes in the token state:
    useEffect(() => {
        console.log("Updated token:", token);
    }, [token]);


    // verify the token by server and get the data of loginned user:- 
    const verifyToken = async()=>{
        try{
            const tokenVerify = await fetch(`${API}/api/user`,{
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            const resToken = await tokenVerify.json();
            setUserData(resToken.msg.username)
            setCon(resToken.msg)
            console.log(resToken.msg.username)
         
        }catch(error){
            console.log(error)
        }
    }

    const removeToken = ()=>{
       setToken(null);
       return localStorage.removeItem("authToken",token)
    }


useEffect(()=>{
verifyToken()
},[token])     // Run whenever the token changes

// useEffect(()=>{
//     console.log(getUserData)
// },[getUserData])







    return (
        <Fragment>
            <AuthContext.Provider value={{API,serverToken,getUserData,removeToken,con}}>
                {children}
            </AuthContext.Provider>
        </Fragment>
    )
}

export default Auth;
export { AuthContext }

