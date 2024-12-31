import { Fragment } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Features/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";


const App = ()=>{
  return(
    <Fragment>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </Fragment>
  )
}

export default App;