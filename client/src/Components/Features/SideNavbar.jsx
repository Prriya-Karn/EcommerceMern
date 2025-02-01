import { Fragment, useContext, useEffect, useState } from "react";
import "../../style/navbar.css";
import { NavLink } from "react-router-dom";
import { menuData } from "./Navbar";
import { AuthContext } from "../../tokenStore/Auth";

import { toast } from "react-toastify";

const SideNavbar = ({ sideNav, crossNav, setSideNav }) => {
    const [moreItems, setMoreItems] = useState({});
    const [moreInner, setMoreInner] = useState({});
    const [islogout,setIslogout] = useState(false);
    const {token,removeToken} = useContext(AuthContext)

    const logout = () => {
      
        setTimeout(() => {
            setSideNav(false);
            setIslogout(true);
            toast.success("Logout Successful 😀");
            removeToken();
        }, 100); 
    };


    useEffect(() => {
        if (islogout) {
            toast.success("Logout Successful 😀");
        }
    }, []);



    const toggleMoreLinks = (id) => {
        setMoreItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleMoreInnerLinks = (categoryName) => {
        setMoreInner((prev) => ({
            ...prev,
            [categoryName]: !prev[categoryName],
        }));
    };

    const clickLogin = () => {
        setSideNav(false);
    };

    const hideSide = ()=>{
        setSideNav(false);
    }


    if (sideNav) {
        document.body.style.overflow = 'hidden';
        document.body.style.background = "rgba(0, 0, 0, 0.2)"
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.background = "initial"
    }
    return (
        <Fragment>
            { sideNav?
                <div className="side-navbar">
                    <div className="side-nav-head">
                        <img
                            src="/image/close.png"
                            className="nav-cross"
                            onClick={crossNav}
                        />
                    </div>
                    <div className="side-nav-menus">
                        {menuData.map((menu) => (
                            
                            <Fragment key={menu.id}>
                           
                                <div
                                    className={
                                        moreItems[menu.id]
                                            ? "side-plus-nav nav-bottom-hidden"
                                            : "side-plus-nav nav-bottom"
                                    }
                                >
                                    <h2 className="side-nav-links">{menu.mainCategory}</h2>
                                    <div
                                        className="nav-plus"
                                        onClick={() => toggleMoreLinks(menu.id)}>
                                        <img
                                            src={
                                                moreItems[menu.id]
                                                    ? "/image/minus.png"
                                                    : "/image/plus.png"
                                            }
                                        />
                                    </div>
                                </div>
                                {moreItems[menu.id] && (
                                    <div>
                                        {menu.categories.map((category) => (
                                            <Fragment key={category.id}>
                                            
                                                <div className="more-side-items side-plus-nav">
                                                    <NavLink onClick={hideSide} to={`/${category.categoryName}`} className="side-nav-links inner-navlink">
                                                        {category.categoryName}
                                                    </NavLink>
                                                    {
                                                        menu.id == 0?<div
                                                        className="nav-plus"
                                                        onClick={() =>
                                                            toggleMoreInnerLinks(category.categoryName)
                                                        }>

                                                        <img
                                                            src={
                                                                moreInner[category.categoryName]
                                                                    ? "/image/minus.png"
                                                                    : "/image/plus.png"
                                                            }
                                                        />
                                                    </div>:""
                                                    }
                                                   
                                                </div>
                                                {moreInner[category.categoryName] && (
                                                    <div className="nav-inner-all-items">
                                                        {category.items.map((item, index) => (
                                                            <NavLink onClick={hideSide} to={`/${item}`}
                                                                key={index}
                                                                className="side-inner-items"
                                                            >
                                                            
                                                                {item}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                )}
                            </Fragment>
                        ))}
                        <h2 className="side-nav-links">our story</h2>
                    </div>
                    {
                        token?<NavLink onClick={logout}>
                        <div className="side-nav-footer">
                            <div className="nav-plus nav-acc">
                                <img src="/image/logout.png" />
                            </div>
                            <h2>Logout</h2>
                        </div>
                    </NavLink>:
                    <NavLink to="/login" onClick={clickLogin}>
                        <div className="side-nav-footer">
                            <div className="nav-plus nav-acc">
                                <img src="/image/people.png" />
                            </div>
                            <h2>Account</h2>
                        </div>
                    </NavLink>
                    }

                    
                    
                </div>
                :""
            }
        </Fragment>
    );
};

export default SideNavbar;
