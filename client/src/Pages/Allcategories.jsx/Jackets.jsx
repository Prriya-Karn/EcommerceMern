import { Fragment } from "react"
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";
const Jacket = () => {
    
  return (
    <Fragment>
  
    <Heading
    head = "Jackets"
    />
<CommonGetAllImage
catName = "jackets"
/>
    </Fragment>
  )
}

export default Jacket;
