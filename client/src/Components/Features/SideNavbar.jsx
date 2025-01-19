import { Fragment, useState } from "react";
import '../../style/navbar.css';
import { NavLink } from "react-router-dom";

const SideNavbar = ({ sideNav, crossNav, setSideNav }) => {
    const [moreItems, setMoreItems] = useState(false);
    const [moreInner, setMoreInner] = useState(false);


    const moreLinksItems = () => {
        setMoreItems(!moreItems)
    }

    const moreInnerItems = () => {
        setMoreInner(!moreInner)
    }

    const clickLogin = ()=>{
        setSideNav(false)
    }

    if(sideNav==true){
        document.body.style.overflow = 'hidden';
        document.body.style.background = "rgba(0, 0, 0, 0.2)"
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.background = "initial"
    }


    return (
        <Fragment>
            {
                sideNav == true ?
                    <Fragment>
                        <div className="side-navbar">
                            <div className="side-nav-head">
                                <img src="../../../public/image/close.png" className="nav-cross" onClick={crossNav} />
                            </div>
                            <div className="side-nav-menus">

                                <div className={moreItems ? " side-plus-nav nav-bottom-hidden" : "side-plus-nav nav-bottom"}>
                                    <h2 className="side-nav-links">Shop by category</h2>
                                    <div className="nav-plus">
                                        <img src={moreItems ? "../../../public/image/minus.png" : "../../../public/image/plus.png"} onClick={moreLinksItems} />
                                    </div>
                                </div>

                                {
                                    moreItems ? <Fragment>
                                        <div className="more-side-items side-plus-nav">

                                            <h2 className="side-nav-links inner-navlink">t-shirts</h2>
                                            <div className="nav-plus">
                                                <img src={moreInner ? "../../../public/image/minus.png" : "../../../public/image/plus.png"}
                                                    onClick={moreInnerItems} />
                                            </div>
                                        </div>

                                        {
                                            moreInner ?
                                                <Fragment>
                                                    <div className="nav-inner-all-items">

                                                        <h2 className="side-inner-items">tshirt items</h2>
                                                        <h2 className="side-inner-items">tshirt items</h2>
                                                        <h2 className="side-inner-items">tshirt items</h2>
                                                        <h2 className="side-inner-items">tshirt items</h2>
                                                        <h2 className="side-inner-items">tshirt items</h2>

                                                    </div>
                                                </Fragment> : ""
                                        }


                                        <div className="side-plus-nav more-side-items">

                                            <h2 className="side-nav-links inner-navlink">t-shirts</h2>
                                            <div className="nav-plus">
                                                <img src="../../../public/image/plus.png" />
                                            </div>
                                        </div>

                                        <div className="side-plus-nav more-side-items">

                                            <h2 className="side-nav-links inner-navlink">t-shirts</h2>
                                            <div className="nav-plus">
                                                <img src="../../../public/image/plus.png" />
                                            </div>
                                        </div>

                                        <div className="side-plus-nav more-side-items">

                                            <h2 className="side-nav-links inner-navlink">t-shirts</h2>
                                            <div className="nav-plus">
                                                <img src="../../../public/image/plus.png" />
                                            </div>
                                        </div>

                                        <div className="side-plus-nav more-side-items">

                                            <h2 className="side-nav-links inner-navlink">t-shirts</h2>
                                            <div className="nav-plus">
                                                <img src="../../../public/image/plus.png" />
                                            </div>
                                        </div>

                                    </Fragment> : ""
                                }

                                <div className="side-plus-nav nav-bottom">
                                    <h2 className="side-nav-links">Shop by category</h2>
                                    <div className="nav-plus">
                                        <img src="../../../public/image/plus.png" />
                                    </div>

                                </div>
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

                    </Fragment>


                    : ""
            }
        </Fragment>
    )
}

export default SideNavbar;
