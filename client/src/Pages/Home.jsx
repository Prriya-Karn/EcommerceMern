import { Fragment, useContext, useEffect } from "react";
import '../style/home.css';
import { AuthContext } from "../tokenStore/Auth";
import { GetAlImg } from "./GetAlImg";
import { UniqueClothe } from "./UniqueClothe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/home.css";


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
            <UniqueClothe />
        </Fragment>
    )
}

export default Home;