import React, { useContext, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { PluginContext } from '../../contexts/PluginContext';
import VideoDetails from './VideoDetails';
import VideoListings from './VideoListings';
import ErrorMsg from './ErrorMsg';

const Widget = () => {
  const {
    bfHistory,
    bfSpinner,
    errorMsg,
    retreivedBookmark,
    setRetreivedBookmark,
    videoId,
    videoTitle,
    setVideo,
    unsetVideo,
    apiKey,
    projectId,
  } = useContext(PluginContext);

  bfHistory.onPop(() => {
    if (retreivedBookmark !== false) {
      setRetreivedBookmark(false);
    }
    unsetVideo();
    bfSpinner.hide();
  });

  useEffect(() => {
    if (videoId && videoTitle) {
      bfHistory.push('Video Details', { showLabelInTitlebar: true });
    }
  }, []);

  useEffect(() => {
    if (retreivedBookmark !== false) {
      bfHistory.push('Video Details', { showLabelInTitlebar: true });
      setVideo(retreivedBookmark);
    }
  }, [retreivedBookmark]);

  if (errorMsg) return <ErrorMsg message={errorMsg} />;

  if (videoId && videoTitle) {
    return <VideoDetails />;
  }

  if (apiKey && projectId) return <VideoListings apiKey={apiKey} projectId={projectId} />;

  return null;
};

export default hot(Widget);
