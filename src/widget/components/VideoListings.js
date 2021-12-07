import React, { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollContainer from 'react-indiana-drag-scroll';
import useWistiaApiRequest from '../../hooks/useWistiaApiRequest';
import { PluginContext } from '../../contexts/PluginContext';
import { getVideoList, getSectionList } from '../../data/wistia-api-utilities';
import SectionList from './SectionList';
import VideoList from './VideoList';

const VideoListings = ({ apiKey, projectId }) => {
  const {
    bfSpinner,
    sectionFilter,
    setErrorMsg,
  } = useContext(PluginContext);
  const {
    data,
    loading,
    wistiaError,
    size,
    setSize
  } = useWistiaApiRequest(apiKey, projectId);

  useEffect(() => {
    if (wistiaError) setErrorMsg(wistiaError);
  }, [wistiaError]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [sectionFilter]);

  if (!wistiaError && loading) {
    bfSpinner.show();
  }

  if (wistiaError || (!wistiaError && !loading)) {
    bfSpinner.hide();
  }

  if (data) {
    const videos = getVideoList(data);
    const sections = getSectionList(videos);
    return (
      <>
        <ScrollContainer className="project-sections" vertical={false}><SectionList sections={sections} /></ScrollContainer>
        <InfiniteScroll
          className="project-videos"
          dataLength={videos.length}
          next={() => setSize(size + 1)}
          hasMore={videos.length % 25 === 0}
          scrollThreshold={0.9}
          scrollableTarget={document.body}
        >
          <VideoList videos={videos} filter={sectionFilter} />
        </InfiniteScroll>
      </>
    );
  }

  return null;
};

export default VideoListings;
