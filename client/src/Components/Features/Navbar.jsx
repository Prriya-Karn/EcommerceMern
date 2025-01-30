import { Fragment, useContext, useState } from "react"
import "../../style/navbar.css";
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from "../../tokenStore/Auth";
import Logout from "../../Pages/Logout";
import "../../style/navbar.css";

import Cart from "../../Pages/Cart";
import Menus from "./Menus";
import SideNavbar from "./SideNavbar";
import { CartTotal } from "../../Pages/CartProvider";


const menuData = [
  {
    id: 0,
    mainCategory: "Shop by Category",
    categories: [
      {
        categoryName: "t-shirts",
        items: [
          "relaxed fit",
          "oversized fit",
          "regular fit",
          "sleeveless t-shirt",
          "full sleeves t-shirt",
        ],
      },
      {
        categoryName: "shirts",
        items: ["half sleeves shirt", "shaket shirt"],
      },
      {
        categoryName: "polo",
        items: "",
      },
      {
        categoryName: "bottoms",
        items: ["joggers", "cargo pants", "shorts"],
      },
      {
        categoryName: "winter wear",
        items: ["jackets", "hoodies", "sweat shirt", "shaket shirt"],
      },
      {
        categoryName: "women",
        items: ["crop tops", "cargo pants"],
      },
    ],
  },

  {
    id: 1,
    mainCategory: "shop by Collection",
    categories: [
      {
        categoryName: "ember steel winter '24",
        items: ""
      },
      {
        categoryName: "majestic pre fall 2025",
        items: ""
      },
      {
        categoryName: "summer spring 2025",
        items: ""
      },
    ]
  },
];

export const Navbar = () => {
  const location = useLocation();

  const {totalItems} = useContext(CartTotal);

  const { isAdmin } = useContext(AuthContext);
  const [menus, setMenus] = useState(false);

  const { getUserData } = useContext(AuthContext)
  const [cartModal, setCartModal] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [sideNav, setSideNav] = useState(false);
  
  const handleSideNavBar = () => {
    setSideNav(!sideNav)
  }
  const crossNav = ()=>{
    setSideNav(false)
  }

  const handleMenuItem = (id) => {
    const filterItems = menuData.filter((e) => {
      return e.id == id;
    })
    setMenuItems(filterItems)
  }


  const sideCart = () => {
    setCartModal(!cartModal)
  }

  const closeButt = () => {
    setCartModal(false)
  }


  // sm (640px ya usse above): Small devices, such as phones in portrait mode. (hamburger)
  
  // md (768px): Tablets and small devices in landscape mode.  (hamburger)
  // lg (1024px): Laptops and medium-sized devices. 
  // xl (1280px): Desktops and larger screens. 
  // 2xl (1536px): Extra-large desktop screens or wide monitors. 

  // And if no prefix then they are  for mobile  (hamburger)

 return (
    <Fragment>
      <nav className="main-nav font-sans text-center h-24 
         sm:h-28 sm:mb-14 sm:w-full">

        <div className="upper-div h-10 pt-2 text-sm
        sm:h-12 sm:text-base bg-gray-100 sm:pt-1">
          <h1 className="font-medium sm:pt-2">Prepaid Orders dispatch within 48 hours</h1>
        </div>

        {/* Flex Container for Menus, Logo, and Cart */}
        <div onMouseLeave={() => setMenus(false)} className="sm:h-16 md:h-16 flex items-center justify-between
      
      lg:flex  lg:justify-between lg:items-center lg:h-20 bg-white border-b-2 border-gray-200">
          {/* Menus Section */}
          <div

            className="menus lg-block hidden lg:flex lg:justify-center lg:items-center lg:gap-11 font-normal lg:ml-10">
            <ul className="lg:flex lg:text-sm font-medium lg:gap-6">
              {
                menuData.map((e) => {
            
                  return (
                    <Fragment key={e.id}>
                      <NavLink onMouseEnter={() => setMenus(true)}>
                        <li onMouseEnter={() => handleMenuItem(e.id)}>{e.mainCategory}</li>
                      </NavLink>
                    </Fragment>
                  )
                })
              }
             {/* <NavLink><li>Our Story</li></NavLink>*/}
              <Menus
                menus={menus}
                menuItems={menuItems} />

            </ul>
          </div>

          <div className="searchHam 
        flex md:gap-6 md:ml-10 ml-5 gap-5
        sm:ml-10 sm:gap-4 
        lg:hidden">


            <div className="hamburger" onClick={handleSideNavBar}>
              <img src="/image/hamburger.png" className="w-5 h-5
        sm:w-7 sm:h-7
        md:w-7 md:h-7"/>
            </div>

            <SideNavbar sideNav = {sideNav} setSideNav = {setSideNav}
            crossNav = {crossNav}
            />

            <div className="search">
              <img
                src="/image/magnifying-glass.png"
                alt="Search"
                className="md:w-7 md:h-7 w-6 h-5 -ml-1
        sm:w-7 sm:h-7"/>
            </div>
          
          </div>


          {/* Logo Section */}
          <div className="logo  lg:-ml-52 lg:flex lg:justify-center">
            <NavLink to="/">
              <img
                src="/image/logo.png"
                alt="Logo"
                className="lg:w-20 lg:h-auto md:h-16 w-16 h-auto
            sm:w-16 sm:h-auto"
              />
            </NavLink>
          </div>

          {/*---------------- Cart Section------------------ */}
          <div className="cart flex lg:flex lg:gap-5 lg:items-center lg:mr-10">
            <img
              src="/image/magnifying-glass.png"
              alt="Search"
              className="search lg:w-7 lg:h-7 hidden lg:block w-7 h-7"
            />

            <div className="userCart flex md:gap-6 mr-10">
              {
                getUserData == undefined ?
                  <NavLink to="/login">
                    <img
                      src="/image/people.png"
                      alt="User"
                      className="lg:w-7 lg:h-7 md:w-7 md:h-7 md:block hidden"
                    />
                  </NavLink> :
                  <Logout />
              }
              {
                isAdmin == "true" ?
                  <Fragment>
                    <ul className="ml-5"><NavLink to="/admin">
                      <img className="lg:w-7 lg:h-7 md:w-7 md:h-7 md:block
          hidden"
                        src="/image/administrator.png" />
                    </NavLink></ul>
                  </Fragment> : ""

              }

              <NavLink to={location.pathname}>
                <button onClick={sideCart}>
                  <div className="flex">
                    <img
                      src="/image/shopping-bag.png"
                      alt="Cart"
                      className="lg:w-7 lg:h-7 md:w-7 md:h-7  w-6 h-6 sm:w-7 sm:h-7"/>

                    <div className="circle bg-black 
     text-white rounded-full border-2 
     h-7 w-7 -ml-3 -mt-2">
                      <h1 className = "text-xs font-bold text-center mt-1">{totalItems}</h1>
                    </div>
                  </div>
                </button>
              </NavLink>


              <Cart
                cartModal={cartModal}
                closeButt={closeButt}
              />


              

            </div>

          </div>

         

         


        </div>

       
        

      </nav>


      
     

    </Fragment>
  )
}

export {menuData};