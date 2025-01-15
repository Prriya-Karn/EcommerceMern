import { Fragment} from "react"


const Input = ({logData,type,name,placeholder}) => {
  return (
    <Fragment>
      <input type={type} name={name} placeholder={placeholder}
         onChange={logData}
         className="text-black placeholder-black border-2 mb-3 rounded-sm
         w-full h-11 md:text-xl mt-1 p-4
         md:w-full
          lg:mt-1 lg:h-14 lg:p-5
          md:mt-1  md:h-14 md:p-5"/>
         
    </Fragment>
  )
}

export default Input;