import React, { useContext } from 'react';
import { PluginContext } from '../../contexts/PluginContext';
import VideoCard from './VideoCard';

const VideoList = ({ videos, filter }) => {
  const { isVideoBookmarked } = useContext(PluginContext);
  const videoCards = videos.map((video) => {
    const isBookmarked = isVideoBookmarked(video.id);
    const isFiltered = (filter !== 'All' && filter !== video.section);
    return (
      <VideoCard
        key={video.id}
        id={video.id}
        title={video.title}
        section={video.section}
        posterImg={video.posterImg}
        isBookmarked={isBookmarked}
        isFiltered={isFiltered}
      />
    );
  });
  return videoCards;
};

export default VideoList;
