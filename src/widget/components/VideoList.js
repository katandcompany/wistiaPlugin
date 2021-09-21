import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  const videoCards = videos.map(video => (
    <VideoCard
      key={video.id}
      id={video.id}
      title={video.title}
      section={video.section}
      posterImg={video.posterImg}
    />
  ));

  return (
    <div className="project-videos">
      {videoCards}
    </div>
  );
};

export default VideoList;
