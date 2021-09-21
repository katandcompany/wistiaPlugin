import React, { useContext, useEffect } from 'react';
import useWistiaApiRequest from '../../hooks/useWistiaApiRequest';
import { WistiaContext } from '../../contexts/WistiaContext';
import { getVideoList, getSectionList } from '../../data/wistia-api-utilities';
import VideoDetails from './VideoDetails';
import SectionList from './SectionList';
import VideoList from './VideoList';

const WistiaVideosCollection = ({ apiKey, projectId, errorHandler }) => {
  const wistia = useContext(WistiaContext);
  const { data, loading, wistiaError } = useWistiaApiRequest(apiKey, projectId);

  useEffect(() => {
    if (wistiaError) {
      errorHandler(wistiaError);
    }
  }, [wistiaError]);

  if (!wistiaError && loading) return <>{wistia.bfSpinner.show()}</>;

  if (wistiaError) return <>{wistia.bfSpinner.hide()}</>;

  if (!wistiaError && !loading) wistia.bfSpinner.hide();

  if (wistia.currentVideoId !== null) {
    return <VideoDetails videoId={wistia.currentVideoId} videoTitle={wistia.currentVideoTitle} />;
  }

  const sections = getSectionList(data);
  const videos = getVideoList(data, wistia.sectionFilter);

  return (
    <>
      <SectionList sections={sections} />
      <VideoList videos={videos} />
    </>
  );
};

export default WistiaVideosCollection;
