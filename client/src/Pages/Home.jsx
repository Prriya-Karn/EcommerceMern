import { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";
import { UniqueClothe } from "./UniqueClothe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/home.css";
import { Heading } from "../Components/UI/Heading";
import { NavLink } from "react-router-dom";
import Video from "../Components/UI/Video";


const Home = () => {
    const { getUserData } = useContext(AuthContext);
    useEffect(() => {
        console.log("userdata", getUserData);
    }, [getUserData]);

    // React Slick settings
    const settings = {
        dots: true, // Display dots for navigation
        infinite: true, // Infinite scrolling
        speed: 200, // Transition speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Time between slides in autoplay
        arrows: true, // Show navigation arrows
        pauseOnHover: false,
        dotsClass: "slick-dots slick-dots-numbered",
    };


    return (
        <Fragment>


            {/**-----------image for below or equal tablet--------------------- */}
            <div className="sm:-mt-14 md:-mt-14 lg:hidden block bg-orange-400">
                <img src="../../public/image/WhatsApp Image 2025-01-14 at 2.17.54 AM.jpeg"
                    className="w-full" />
            </div>

            {/* React Slick Carousel */}
            <div className="-mt-10 overflow-hidden lg:block hidden hero-carousel">
                <Slider {...settings}>
                    <div className="">
                        <img
                            src="../../public/image/Feel_the_Luxury_of_Rabari_Desktop.webp"
                            className="w-full h-auto object-cover"
                            alt="Slide 1"
                        />
                    </div>
                    <div>
                        <img
                            src="../../public/image/The_Urban_Fade_Desktop_Banner__2.webp"
                            className="w-full h-auto object-cover"
                            alt="Slide 2"
                        />
                    </div>
                    <div>
                        <img
                            src="../../public/image/Feel_the_Luxury_of_Rabari_Desktop.webp"
                            className="w-full h-auto object-cover"
                            alt="Slide 3"
                        />
                    </div>
                    <div>
                        <img
                            src="../../public/image/img14.webp"
                            className="w-full h-auto object-cover"
                            alt="Slide 4"
                        />
                    </div>
                    <div>
                        <img
                            src="../../public/image/The_Urban_Fade_Desktop_Banner__2.webp"
                            className="w-full h-auto object-cover"
                            alt="Slide 5"
                        />
                    </div>
                </Slider>
            </div>




            <GetAlImg />
            <UniqueClothe/>

            <div className="w-full md:h-full sm:h-96 h-64 -mt-80 md:-mt-72 mb-20 rounded-lg">
            <img className="h-full w-full" src="../../public/image/img13.jpg"/>
            </div>

            <div className="h-auto mb-72">
            <Heading
            head = "Featured In"
            />

            <div className="flex justify-center">
            <div className="companies grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-7 sm:gap-x-10 sm:gap-y-10 sm:mt-5 md:mt-9
            lg:grid-cols-6 lg:gap-x-8 lg:gap-y-10
             xl:gap-x-16 xl:gap-y-12 ">
            <NavLink to="https://www.news18.com/lifestyle/diwali-gifts-eco-friendly-deepavali-gift-ideas-in-india-9089769.html"><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company1.avif"/></NavLink>
            <NavLink to="https://www.indulgexpress.com/fashion/trends/2024/Oct/25/festive-glow-sparkling-gifting-ideas-for-an-unforgettable-diwali-2024"><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company2.avif"/></NavLink>
            <NavLink to="https://www.idiva.com/lifestyle/hot-takes/best-diwali-gifts-for-all/18086092"><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company3.avif"/></NavLink>
            
            <NavLink to="https://www.indianretailer.com/article/retail-business/retail/top-clothing-gifts-spread-festive-cheer-wrap-diwali-style"><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company4.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company5.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company6.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company7.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company8.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company9.avif"/></NavLink>
            
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company10.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company11.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company12.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company13.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company14.avif"/></NavLink>
            <NavLink to=""><img className="w-32 h-10 sm:w-40 sm:h-16 lg:w-32 lg:h-10 xl:w-40 xl:h-16 cursor-pointer" src="../../public/image/company15.avif"/></NavLink>
            </div>
            
            </div>
            </div>

            <div className="-mt-52">
            <Video
            src = "../../public/image/video1.mp4"
            />
            <div className="flex justify-center">
            <div className="text-center lg:w-2/3 xl:w-1/2 sm:w-3/4 w-3/4 mt-10 mb-52 text-xs lg:text-sm">
            <p className="font-bold">SHlOK SRIVASTAVA IN CUSTOM OVERLAYS AT THE EMBER STEEL WINTER 2024</p>
            <div className="flex justify-center mt-5 lg:mt-8 text-black">
            <i className="w-5/6 text-sm lg:text-base">Overlays interpret The Ember Steel with The Gilded Armor jacket and exaggerated wings design, 
            hand embroidered with zardozi, ari, sequins, metal threads, kardana, and fringed with glass beads. 
            The hand-crafted back is studded with customised foliage leaves design and rays of sun through the wings. 
            </i>
            </div>
            
            <div className="flex justify-center mt-6 lg:mt-10 text-black">
            <i className="w-5/6 text-sm lg:text-base">The Gilded Armor is complemented by the strength and glory of warriors at the times, taking 48 hours of 
            dedicated craftsmanship to create, and each piece is anthraquinone hand dyed, embodying both power and luxury 
            in every detail.</i>
            </div>
            </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Home;