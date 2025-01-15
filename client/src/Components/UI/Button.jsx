import { Fragment } from "react";

const Button = ({className,buttName,onClickFun})=>{
    return(
        <Fragment>
        <button
        className={className === "loginButt" 
          ? 
          "bg-black text-white md:text-xl uppercase w-80 h-11 sm:mt-3 sm:w-80 sm:h-14 lg:w-2/3 lg:h-14 md:w-2/3 md:h-14  mb-3 rounded"
          : "-ml-7"}
        onClick={onClickFun}>
        {buttName}
      </button>
        </Fragment>
    )
}

export default Button;