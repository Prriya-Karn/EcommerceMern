import { createContext, Fragment } from "react"

const AuthContext = createContext();
const Auth = ({children})=>{
   const API = import.meta.env.VITE_APP_URI_API
    return(
        <Fragment>
        <AuthContext.Provider value={{API}}>
        {children}
        </AuthContext.Provider>
        </Fragment>
    )
}

export default Auth;
export {AuthContext}