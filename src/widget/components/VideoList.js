import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import { PluginContext } from '../../contexts/PluginContext';
import VideoCard from './VideoCard';

const VideoList = ({ videos, filter }) => {
  const { isVideoBookmarked } = useContext(PluginContext);
  const filteredVideos = videos.filter(video => filter === 'All' || filter === video.section);
  const videoCards = filteredVideos.map((video) => {
    const isBookmarked = isVideoBookmarked(video.id);
    // const isFiltered = (filter !== 'All' && filter !== video.section);
    return (
      <motion.div
        key={video.id}
        className="single-motion-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <VideoCard
          key={video.id}
          id={video.id}
          title={video.title}
          section={video.section}
          posterImg={video.posterImg}
          isBookmarked={isBookmarked}
        />
      </motion.div>
    );
  });
  return <AnimatePresence>{videoCards}</AnimatePresence>;
};

export default VideoList;
