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
import AllServiceData from "./Pages/AdminPanel/AllServiceData";
import Update from "./Pages/AdminPanel/Update";
import UploadClothingImage from "./Pages/AdminPanel/UploadClothingImage";
import AddToCart from "./Pages/AddToCart";
import Cart from "./Pages/Cart";
import { Footer } from "./Components/Features/Footer";


const App = () => {
  const [cartQuants, setCartQuant] = useState(0);
  const [totalItems,setTotalItem] = useState(0);
    
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar
        totalItems = {totalItems} />
        <Routes>


          <Route path="/" element={<Home />} />
       
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart/:fileName/:price/:productName/:id"
            element={<Cart
               setCartQuant={setCartQuant}
               cartQuants={cartQuants} 
               setTotalItem = {setTotalItem}
               totalItems = {totalItems}/>}
          />
          <Route
            path="/products/:fileName/:price/:productName"
            element={<AddToCart
               setCartQuant={setCartQuant}
               cartQuants={cartQuants} />}
          />

          {/*-------------------route access by admin only----------------------*/}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/usersdata" element={<AllUserData />} />
            <Route path="/admin/contactdata" element={<AllContactData />} />
            <Route path="/admin/servicedata" element={<AllServiceData />} />
            <Route path="/admin/usersdata/updatedata" element={<Update />} />
            <Route path="/admin/uploadimages" element={<UploadClothingImage />} />
          </Route>



          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;