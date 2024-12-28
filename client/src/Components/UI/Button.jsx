import { Fragment } from "react";

const Button = ({buttName})=>{
    return(
        <Fragment>
        <button className="bg-bg lg:px-6 py-1
        place-items-center rounded text-white lg:pb-2">{buttName}</button>
        </Fragment>
    )
}

export default Button;