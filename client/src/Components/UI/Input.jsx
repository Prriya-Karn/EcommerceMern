import { Fragment} from "react"


const Input = ({logData,type,name,placeholder}) => {
  return (
    <Fragment>
      <input type={type} name={name} placeholder={placeholder}
         onChange={logData}
         className="lg:mt-1 lg:bg-bodyColor lg:w-5/6" />
    </Fragment>
  )
}

export default Input;