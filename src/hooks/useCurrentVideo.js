import { useState } from 'react';

const useCurrentVideo = () => {
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const setVideo = ({ id, title }) => {
    setVideoId(id);
    setVideoTitle(title);
  };
  const unsetVideo = () => {
    setVideo({ id: null, title: null });
  };
  return {
    videoId,
    videoTitle,
    setVideoId,
    setVideoTitle,
    setVideo,
    unsetVideo
  };
};

export default useCurrentVideo;
