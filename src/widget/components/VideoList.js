import React, { useContext } from 'react';
import { PluginContext } from '../../contexts/PluginContext';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  const { isVideoBookmarked } = useContext(PluginContext);
  const videoCards = videos.map((video) => {
    const isBookmarked = isVideoBookmarked(video.id);
    return (
      <VideoCard
        key={video.id}
        id={video.id}
        title={video.title}
        section={video.section}
        posterImg={video.posterImg}
        isBookmarked={isBookmarked}
      />
    );
  });

  return (
    <div className="project-videos">
      {videoCards}
    </div>
  );
};

export default VideoList;
