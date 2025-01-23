import { Fragment } from "react"
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";
const Sleeveless = () => {

    return (
        <Fragment>

            <Heading
                head="sleeveless t-shirts"
            />
            <CommonGetAllImage
                catName="sleeveless t-shirts" />
        </Fragment>
    )
}

export default Sleeveless;
