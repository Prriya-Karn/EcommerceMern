import { Fragment, useContext } from "react"
import "../../style/navbar.css";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../tokenStore/Auth";
import Logout from "../../Pages/Logout";

export const Navbar = ({totalItems}) => {
   
    const {isAdmin} = useContext(AuthContext);
  
    const { getUserData } = useContext(AuthContext)
    console.log(getUserData);


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
      <div className="sm:h-16 md:h-16 flex items-center justify-between
      
      lg:flex  lg:justify-between lg:items-center lg:h-20 bg-white">
        {/* Menus Section */}
        <div className="menus lg-block hidden lg:flex lg:justify-center lg:items-center lg:gap-11 font-normal lg:ml-10">
          <ul className="lg:flex lg:text-sm font-medium lg:gap-6">
            <li>Shop by category</li>
            <li>Shop by collection</li>
            <li>Our Story</li>
          </ul>
        </div>

        <div className="searchHam 
        flex md:gap-6 md:ml-10 ml-5 gap-5
        sm:ml-10 sm:gap-4 
        lg:hidden">
        <div className="hamburger">
        <img src="../../../public/image/hamburger.png" className="w-5 h-5
        sm:w-7 sm:h-7
        md:w-7 md:h-7"/>
        </div>

        <div className="search">
        <img
        src="../../../public/image/magnifying-glass.png"
        alt="Search"
        className="md:w-7 md:h-7 w-6 h-5 -ml-1
        sm:w-7 sm:h-7"/>
        </div>
        </div>

    
        {/* Logo Section */}
        <div className="logo  lg:-ml-52 lg:flex lg:justify-center">
        <NavLink to="/">
          <img
            src="../../../public/image/logo.png"
            alt="Logo"
            className="lg:w-20 lg:h-auto md:h-16 w-16 h-auto
            sm:w-16 sm:h-auto" 
          />
          </NavLink>
        </div>
    
        {/* Cart Section */}
        <div className="cart flex lg:flex lg:gap-5 lg:items-center lg:mr-10">
          <img
            src="../../../public/image/magnifying-glass.png"
            alt="Search"
            className="search lg:w-7 lg:h-7 hidden lg:block w-7 h-7"
          />

          <div className="userCart flex md:gap-6 mr-10">
          {
            getUserData == undefined ? 
            <NavLink to="/login">
            <img
            src="../../../public/image/people.png"
            alt="User"
            className="lg:w-7 lg:h-7 md:w-7 md:h-7 md:block
            hidden"
          />
            </NavLink> :
                <Logout />
        }
        {
          isAdmin=="true"?
          <Fragment>
          <ul className="ml-5"><NavLink to="/admin">
          <img className="lg:w-7 lg:h-7 md:w-7 md:h-7 md:block
          hidden"
           src="../../../public/image/administrator.png"/>
          </NavLink></ul>
          </Fragment>:""
          
      }

      
      <NavLink to="/cart/:fileName/:price/:productName/:id">
      <div className="flex">
      <img
      src="../../../public/image/shopping-bag.png"
      alt="Cart"
      className="lg:w-7 lg:h-7 md:w-7 md:h-7  w-6 h-6 
      sm:w-7 sm:h-7"
    />
    <div className="circle bg-black 
     text-white rounded-full border-2 
     h-7 w-7 -ml-3 -mt-2">
      <h1 className="text-xs font-bold text-center mt-1">{totalItems}</h1>
      </div>
      </div>
      
      </NavLink>

         
          </div>

        </div>
      </div>
    </nav>
    
        </Fragment>
    )
}
















// <div className="main-navbar flex bg-slate-800
//         lg:h-16 lg:bg-bodyColor lg:place-items-center text-lg cursor-pointer">
//                 <div className="font-sans text-base gap-5 lg:ml-8 flex">
//                     <h1 className="">Shop by category</h1>
//                     <h1>Shop by collection</h1>
//                     <h1>Our Story</h1>
//                 </div>
//                 <ul className="flex lg:gap-7 
//                    lg:ml-auto lg:mr-16 font-roboto">    
//                    <NavLink to="/">
//                    <li>Home</li>
//                    </NavLink>
                    
//                     <li>About</li>
//                     <NavLink to="/contact">
//                     <li>Contact</li>
//                     </NavLink>
//                     <li>Services</li>

//                 </ul>
//                 <div className="lg:flex lg:mr-5">

                    // {
                    //     getUserData == undefined ? <NavLink to="/login">
                    //         <Button 
                    //         buttName={buttName[0]}
                    //         className="bg-bg lg:p-2"/>
                    //     </NavLink> :
                    //         <Logout />
                    // }
                    // {
                    //     isAdmin=="true"?
                    //     <Fragment>
                    //     <ul className="ml-5"><NavLink to="/admin"><li>Admin</li></NavLink></ul>
                    //     </Fragment>:""
                        
                    // }
//                     <ul>
                   
                    // <NavLink to="/cart/:fileName/:price/:productName/:id">
                    // <li className="ml-5 mr-8">cart : {totalItems}</li>
                    // </NavLink>


//                     </ul>
//                 </div>
//             </div>