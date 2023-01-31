import { useState } from 'react';

const useCurrentVideo = () => {
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoCreated, setVideoCreated] = useState(null);
  const [videoUpdated, setVideoUpdated] = useState(null);
  const setVideo = ({ id, title, created, updated }) => {
    setVideoId(id);
    setVideoTitle(title);
    setVideoCreated(created);
    setVideoUpdated(updated);
  };
  const unsetVideo = () => {
    setVideo({ id: null, title: null, created:null, updated:null });
  };
  return {
    videoId,
    videoTitle,
    videoCreated,
    videoUpdated,
    setVideoId,
    setVideoTitle,
    setVideoCreated,
    setVideoUpdated,
    setVideo,
    unsetVideo
  };
};

export default useCurrentVideo;
