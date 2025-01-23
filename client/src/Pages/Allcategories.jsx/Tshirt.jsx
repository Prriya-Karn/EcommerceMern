import { Fragment } from "react";
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";

const Tshirt = () => {
   
  return (
    <Fragment>

    <Heading
    head = "t-shirts"
    />

    <CommonGetAllImage
    catName = "tshirts"
    />


    </Fragment>
  )
}

export default Tshirt;
