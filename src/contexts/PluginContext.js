import React, { createContext, useMemo } from 'react';
import useBuildfireObjects from '../hooks/useBuildfireObjects';
import useErrorHandler from '../hooks/useErrorHandler';
import useCurrentVideo from '../hooks/useCurrentVideo';
import usePluginSettings from '../hooks/usePluginSettings';
import useSectionFilters from '../hooks/useSectionFilters';
import useBookmarkActions from '../hooks/useBookmarkActions';
import useVideoActions from '../hooks/useVideoActions';

export const PluginContext = createContext();

export const PluginProvider = ({ children }) => {
  const {
    bfBookmarks,
    bfDeeplink,
    bfDevice,
    bfHistory,
    bfNavigation,
    bfSpinner
  } = useBuildfireObjects();
  const { errorMsg, setErrorMsg } = useErrorHandler();
  const {
    videoId,
    videoTitle,
    setVideo,
    unsetVideo
  } = useCurrentVideo();
  const { apiKey, projectId } = usePluginSettings();
  const { sectionFilter, setCurrentFilter } = useSectionFilters();
  const {
    allBookmarks,
    retreivedBookmark,
    setRetreivedBookmark,
    setAllBookmarks,
    getAllBookmarks,
    isVideoBookmarked,
    toggleBookmark,
    retreiveBookmarkedVideo
  } = useBookmarkActions();
  const { viewVideoExternally, shareVideo } = useVideoActions();

  const value = useMemo(() => ({
    bfBookmarks,
    bfDeeplink,
    bfDevice,
    bfHistory,
    bfNavigation,
    bfSpinner,
    errorMsg,
    setErrorMsg,
    videoId,
    videoTitle,
    setVideo,
    unsetVideo,
    apiKey,
    projectId,
    sectionFilter,
    setCurrentFilter,
    allBookmarks,
    retreivedBookmark,
    setRetreivedBookmark,
    setAllBookmarks,
    getAllBookmarks,
    isVideoBookmarked,
    toggleBookmark,
    retreiveBookmarkedVideo,
    viewVideoExternally,
    shareVideo,
  }), [
    errorMsg,
    videoId,
    videoTitle,
    apiKey,
    projectId,
    sectionFilter,
    toggleBookmark,
    retreivedBookmark
  ]);

  return <PluginContext.Provider value={value}>{children}</PluginContext.Provider>;
};
