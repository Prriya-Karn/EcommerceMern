import { Fragment, useEffect, useRef } from "react";

const Video = () => {
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
      <div className="mt-5 sm:mt-20 md:ml-12 md:mr-12 ml-5 mr-5 h-2/3 rounded-lg">
        <video className="rounded-lg"
          ref={videoRef}
          
          style={{ pointerEvents: "none" }}>
          <source src="/image/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </Fragment>
  );
};

export default Video;
