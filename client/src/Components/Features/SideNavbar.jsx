import { Fragment, useState } from "react";
import "../../style/navbar.css";
import { NavLink } from "react-router-dom";
import { menuData } from "./Navbar";

const SideNavbar = ({ sideNav, crossNav, setSideNav }) => {
    const [moreItems, setMoreItems] = useState({});
    const [moreInner, setMoreInner] = useState({});

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

    // Prevent scrolling when the side navigation is open
    if (sideNav) {
        document.body.style.overflow = "hidden";
        document.body.style.background = "rgba(0, 0, 0, 0.2)";
    } else {
        document.body.style.overflow = "auto";
        document.body.style.background = "initial";
    }

    return (
        <Fragment>
            {sideNav && (
                <div className="side-navbar">
                    <div className="side-nav-head">
                        <img
                            src="../../../public/image/close.png"
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
                                        onClick={() => toggleMoreLinks(menu.id)}
                                    >
                                        <img
                                            src={
                                                moreItems[menu.id]
                                                    ? "../../../public/image/minus.png"
                                                    : "../../../public/image/plus.png"
                                            }
                                        />
                                    </div>
                                </div>
                                {moreItems[menu.id] && (
                                    <div>
                                        {menu.categories.map((category) => (
                                            <Fragment key={category.id}>
                                                <div className="more-side-items side-plus-nav">
                                                    <h2 className="side-nav-links inner-navlink">
                                                        {category.categoryName}
                                                    </h2>
                                                    {
                                                        menu.id == 0?<div
                                                        className="nav-plus"
                                                        onClick={() =>
                                                            toggleMoreInnerLinks(category.categoryName)
                                                        }>
                                                        
                                                        <img
                                                            src={
                                                                moreInner[category.categoryName]
                                                                    ? "../../../public/image/minus.png"
                                                                    : "../../../public/image/plus.png"
                                                            }
                                                        />
                                                    </div>:""
                                                    }
                                                    


                                                </div>
                                                {moreInner[category.categoryName] && (
                                                    <div className="nav-inner-all-items">
                                                        {category.items.map((item, index) => (
                                                            <h2
                                                                key={index}
                                                                className="side-inner-items"
                                                            >
                                                                {item}
                                                            </h2>
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
                    <NavLink to="/login" onClick={clickLogin}>
                        <div className="side-nav-footer">
                            <div className="nav-plus nav-acc">
                                <img src="../../../public/image/people.png" />
                            </div>
                            <h2>Account</h2>
                        </div>
                    </NavLink>
                </div>
            )}
        </Fragment>
    );
};

export default SideNavbar;
