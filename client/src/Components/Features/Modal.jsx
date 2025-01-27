import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';


const Modal = ({loginnerUsername}) => {
    const { width, height } = useWindowSize()
  return (
    <Fragment>
    <Confetti
    width={width}
    height={height}
  />
    <div className="flex justify-center h-auto">
    
    <div className="z-10 fixed bg-white rounded-lg p-10 mt-12 sm:mt-0 text-center w-72 h-72 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 sm:h-2/3 text-lg">
 
    <div className="flex  justify-center">
    <img className="sm:w-60 sm:h-60 w-32 h-32" src="/image/flower.png"/>
    </div>
    
    <h1>Welcome {loginnerUsername} 😀</h1>
    <NavLink to="/">
    <button className="bg-black text-white rounded p-2 sm:p-3 mt-5"><p className="text-sm">Go to home page</p></button>
    </NavLink>
  
    </div>
    </div>
    </Fragment>
  )
}

export default Modal;