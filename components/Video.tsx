"use client";
import YouTube from "react-youtube";

const Video = ({ videoId }: any) => {
  return (
    <div className=" flex items-center justify-between my-2 ">
      <YouTube className="" videoId={videoId} />
    </div>
  );
};

export default Video;
