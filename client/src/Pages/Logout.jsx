import { Fragment, useContext, useEffect } from 'react';
import Button from '../Components/UI/Button';
import { AuthContext } from '../tokenStore/Auth';
import { NavLink } from 'react-router-dom';
import Login from './Login';
const buttName = ["logout"]
const Logout = ()=>{

    const rem = useContext(AuthContext);
    const {getUserData} = useContext(AuthContext)
    const logout = ()=>{
       return rem.removeToken()   
    }

    console.log(getUserData)
    return(
        <Fragment>
    {
        getUserData==undefined?<NavLink to="login"><Login/></NavLink>:
        <button onClick={logout}>Logout</button>
    }
        
        </Fragment>
    )
}

export default Logout;