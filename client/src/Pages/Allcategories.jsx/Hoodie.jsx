import { Fragment } from "react"
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";
const Hoodie = () => {
    
  return (
    <Fragment>
  
    <Heading
    head = "Hoodies"
    />
<CommonGetAllImage
catName = "hoodies"
/>
    </Fragment>
  )
}

export default Hoodie;
