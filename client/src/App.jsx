import { Fragment } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Features/Navbar";
import Login from "./Pages/Login";


const App = ()=>{
  return(
    <Fragment>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </Fragment>
  )
}

export default App;