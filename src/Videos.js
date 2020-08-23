import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ vidoes , videoSelect}) => {
  const renderedList = vidoes.map(video=>{
      return <VideoItem video={video} onVideoSelect = {videoSelect}/>
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideosList;
