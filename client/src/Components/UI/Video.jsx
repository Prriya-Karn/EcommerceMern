import { Fragment, useEffect, useRef } from "react";

const Video = ({src}) => {
  const videoRef = useRef(null);
  console.log(videoRef)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <Fragment>
      <div className="mt-5 sm:mt-20 h-2/3">
        <video
          ref={videoRef}
          
          style={{ pointerEvents: "none" }}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </Fragment>
  );
};

export default Video;
