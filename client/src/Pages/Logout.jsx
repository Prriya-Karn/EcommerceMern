import { Fragment, useContext} from 'react';

import { AuthContext } from '../tokenStore/Auth';
import { NavLink } from 'react-router-dom';
import Login from './Login';

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
        <button onClick={logout}><img src='../../public/image/logout.png'
        className="lg:w-6 lg:h-6 
        md:w-7 md:h-7 md:block
        hidden"/></button>
    }
        
        </Fragment>
    )
}

export default Logout;