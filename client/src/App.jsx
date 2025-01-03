import { Fragment } from "react";
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


const App = () => {
 
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>

        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />


          {/*-------------------route access by admin only----------------------*/}
         <Route path="/admin" element={<AdminLayout/>}>
         <Route path="/admin/usersdata" element={<AllUserData/>}/>
         <Route path="/admin/contactdata" element={<AllContactData/>}/>
         <Route path="/admin/servicedata" element={<AllServiceData/>}/>
         </Route>



         <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;