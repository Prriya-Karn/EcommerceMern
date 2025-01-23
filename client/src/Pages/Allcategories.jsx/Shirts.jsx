import { Fragment } from "react"
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";
const Shirts = () => {
    
  return (
    <Fragment>
  
      <Heading
        head = "shirts"
        />

        <CommonGetAllImage
    catName = "shirts"
    />
    </Fragment>
  )
}

export default Shirts;
