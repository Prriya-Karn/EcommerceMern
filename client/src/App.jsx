import { Fragment, useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Features/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import AdminLayout from "./Components/layouts/AdminLayout";
import Error from "./Pages/Error";
import AllUserData from "./Pages/AdminPanel/AllUserData";
import AllContactData from "./Pages/AdminPanel/AllContactData";
import Update from "./Pages/AdminPanel/Update";
import UploadClothingImage from "./Pages/AdminPanel/UploadClothingImage";
import AddToCart from "./Pages/AddToCart";
import Cart from "./Pages/Cart";
import { Footer } from "./Components/Features/Footer";
import Tshirt from "./Pages/Allcategories.jsx/Tshirt";
import Shirts from "./Pages/Allcategories.jsx/Shirts";
import Polo from "./Pages/Allcategories.jsx/Polo";
import Bottoms from "./Pages/Allcategories.jsx/Bottoms";
import Winterwear from "./Pages/Allcategories.jsx/Winterwear";
import Women from "./Pages/Allcategories.jsx/Women";
import Ember from "./Pages/Allcategories.jsx/Ember";
import Majestic from "./Pages/Allcategories.jsx/Majestic";
import Summer from "./Pages/Allcategories.jsx/Summer";
import Relaxedfit from "./Pages/Allcategories.jsx/Relaxedfit";
import OversizedFit from "./Pages/Allcategories.jsx/OversizedFit";
import Regular from "./Pages/Allcategories.jsx/Regular";
import Sleeveless from "./Pages/Allcategories.jsx/Sleeveless";
import FullSleeve from "./Pages/Allcategories.jsx/FullSleeve";
import HalfSleeve from "./Pages/Allcategories.jsx/HalfSleeve";
import Shaket from "./Pages/Allcategories.jsx/Shaket";
import Cargo from "./Pages/Allcategories.jsx/Cargo";
import Shorts from "./Pages/Allcategories.jsx/Shorts";
import Jacket from "./Pages/Allcategories.jsx/Jackets";
import Hoodie from "./Pages/Allcategories.jsx/Hoodie";
import Sweat from "./Pages/Allcategories.jsx/Sweat";
import Crop from "./Pages/Allcategories.jsx/Crop";
import Joggers from "./Pages/Allcategories.jsx/Joggers";
import CartProvider from "./Pages/CartProvider";
import PrivacyPolicy from "./Pages/Allcategories.jsx/PrivacyPolicy";
import TermsConditions from "./Pages/Allcategories.jsx/TermsConditions";
import RefundPolicy from "./Pages/Allcategories.jsx/RefundPolicy";
import ShippingPolicy from "./Pages/Allcategories.jsx/ShippingPolicy";

const App = () => {
  const [cartQuants, setCartQuant] = useState(0);
  return (
    <Fragment>
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>



    {/*-----------------------Razorpay---------------------------------*/}

    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<TermsConditions/>}/>
    <Route path="/refundPolicy" element={<RefundPolicy/>}/>
    <Route path="/shippingPolicy" element={<ShippingPolicy/>}/>


          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />}/>

          <Route
            path="/cart/:fileName/:price/:productName/:id"
            element={
              <Cart
                setCartQuant={setCartQuant}
                cartQuants={cartQuants}
              />
            }
          />

           <Route
            path="/addtocart/:id/:fileName/:price/:productName"
            element={
              <AddToCart
              setCartQuant={setCartQuant}
              cartQuants={cartQuants} />}
          />



          {/**-------------------------All categories lists route------------------------- */}
          <Route path="/t-shirts" element={<Tshirt/>}/>
          <Route path="/shirts" element={<Shirts/>}/>
          <Route path="/polo" element={<Polo/>}/>
          <Route path="/bottoms" element={<Bottoms/>}/>
          <Route path="/winter wear" element={<Winterwear/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/Ember steel winter '25" element={<Ember/>}/>
          <Route path="/Majestic pre fall 2025" element={<Majestic/>}/>
          <Route path="/Summer spring 2025" element={<Summer/>}/>
          <Route path="/relaxed fit" element={<Relaxedfit/>}/>
          <Route path="/oversized fit" element={<OversizedFit/>}/>
          <Route path="/regular fit" element={<Regular/>}/>

          <Route path="/sleeveless t-shirt" element={<Sleeveless/>}/>

          <Route path="/full sleeves t-shirt" element={<FullSleeve/>}/>
          <Route path="/half sleeves shirt" element={<HalfSleeve/>}/>
          <Route path="/shaket shirt" element={<Shaket/>}/>
          <Route path="/cargo pants" element={<Cargo/>}/>
          <Route path="/shorts" element={<Shorts/>}/>
          <Route path="/jackets" element={<Jacket/>}/>
          <Route path="/hoodies" element={<Hoodie/>}/>
          <Route path="/sweat shirt" element={<Sweat/>}/>
          <Route path="/joggers" element={<Joggers/>}/>
          <Route path="/crop tops" element={<Crop/>}/>

          


          {/*-------------------route access by admin only----------------------*/}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/usersdata" element={<AllUserData />} />
            <Route path="/admin/contactdata" element={<AllContactData />} />
            <Route path="/admin/usersdata/updatedata" element={<Update />} />
            <Route path="/admin/uploadimages" element={<UploadClothingImage />} />
          </Route>

          {/**--------------error route--------------- */}
          <Route path="*" element={<Error />} />

        </Routes>
        </CartProvider>
        
        <Footer/>
        
      </BrowserRouter>
    </Fragment>
  )
}

export default App;