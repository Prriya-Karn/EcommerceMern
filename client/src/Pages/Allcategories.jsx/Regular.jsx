import { Fragment } from "react"
import { Heading } from "../../Components/UI/Heading";
import CommonGetAllImage from "./CommonGetAllImage";
import Video from "../../Components/UI/Video";
const Regular = () => {
    
  return (
    <Fragment>
  
    <div className="mt-6">
    <Heading
    head = "regular fit t-shirts"
    />
    </div>
    
    <div className="sm:-mt-10 -mt-4">
    <Video
    src="../../../public/image/video3.mp4"
    />
    </div>
<CommonGetAllImage
catName = "regular fit"
/>
    </Fragment>
  )
}

export default Regular;
