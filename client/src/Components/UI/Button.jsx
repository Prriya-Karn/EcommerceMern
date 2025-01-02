import { Fragment } from "react";

const Button = ({className,buttName,onClickFun})=>{
    return(
        <Fragment>
        <button className={className}
        onClick={onClickFun}>{buttName}</button>
        </Fragment>
    )
}

export default Button;