import  { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";
import { UniqueClothe } from "./UniqueClothe";
import 'flowbite';

const Home = ()=>{
    const {getUserData} = useContext(AuthContext);
    useEffect(() => {
        console.log("userdata", getUserData);
    }, [getUserData]);
    return(
        <Fragment>
       {/* <nav className="main-nav">hi{getUserData}</nav> */}
        { /* hero image */}
        
      { /*<div className="-mt-10 lg:block hidden">
       <img src="../../public/image/img14.webp"/>
       </div>*/}

       <div className="sm:-mt-14 md:-mt-14 lg:hidden block bg-orange-400">
       <img src="../../public/image/WhatsApp Image 2025-01-14 at 2.17.54 AM.jpeg"
       className="w-full"/>
       </div>

       <div className="relative lg:block hidden w-full -mt-10" data-carousel="slide">
      <div className="relative h-[900px] overflow-hidden rounded-lg">
        
        <div className="hidden duration-700 -mt-36 ease-in-out" data-carousel-item>
          <img
            src="../../public/image/Feel_the_Luxury_of_Rabari_Desktop.webp"
            className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
          />
        </div>
        <div className="hidden duration-700 -mt-36 ease-in-out" data-carousel-item>
          <img
            src="../../public/image/The_Urban_Fade_Desktop_Banner__2.webp"
            className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </div>
        <div className="hidden duration-700 -mt-36 ease-in-out" data-carousel-item>
          <img
            src="../../public/image/Feel_the_Luxury_of_Rabari_Desktop.webp"
            className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
          />
        </div>
        <div className="hidden duration-700 -mt-36 ease-in-out" data-carousel-item>
          <img
            src="../../public/image/img14.webp"
            className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
          />
        </div>
        <div className="hidden duration-700 -mt-36 ease-in-out" data-carousel-item>
          <img
            src="../../public/image/The_Urban_Fade_Desktop_Banner__2.webp"
            className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
          />
        </div>
      </div>
     
    </div>



        <GetAlImg/>
        <UniqueClothe/>
        </Fragment>
    )
}

export default Home;