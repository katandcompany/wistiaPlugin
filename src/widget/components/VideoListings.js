import React, { useContext, useEffect } from 'react';
import useWistiaApiRequest from '../../hooks/useWistiaApiRequest';
import { PluginContext } from '../../contexts/PluginContext';
import { getVideoList, getSectionList } from '../../data/wistia-api-utilities';
import SectionList from './SectionList';
import VideoList from './VideoList';

const VideoListings = ({ apiKey, projectId }) => {
  const { bfSpinner, sectionFilter, setErrorMsg } = useContext(PluginContext);
  const { data, loading, wistiaError } = useWistiaApiRequest(apiKey, projectId);

  useEffect(() => {
    if (wistiaError) setErrorMsg(wistiaError);
  }, [wistiaError]);

  if (!wistiaError && loading) {
    bfSpinner.show();
  }

  if (wistiaError || (!wistiaError && !loading)) {
    bfSpinner.hide();
  }

  if (data) {
    return (
      <>
        <SectionList sections={getSectionList(data)} />
        <VideoList videos={getVideoList(data, sectionFilter)} />
      </>
    );
  }

  return null;
};

export default VideoListings;
