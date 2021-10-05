import React, { createContext, useMemo } from 'react';
import useBuildfireObjects from '../hooks/useBuildfireObjects';
import useErrorHandler from '../hooks/useErrorHandler';
import useCurrentVideo from '../hooks/useCurrentVideo';
import usePluginSettings from '../hooks/usePluginSettings';
import useSectionFilters from '../hooks/useSectionFilters';
import useBookmarkActions from '../hooks/useBookmarkActions';

export const PluginContext = createContext({
  bfBookmarks: null,
  bfDeeplink: null,
  bfHistory: null,
  bfNavigation: null,
  bfSpinner: null,
  errorMsg: false,
  setErrorMsg: () => {},
  videoId: null,
  videoTitle: null,
  setVideo: () => {},
  unsetVideo: () => {},
  apiKey: null,
  projectId: null,
  sectionFilter: 'All',
  setCurrentFilter: () => {},
  allBookmarks: null,
  retreivedBookmark: null,
  setAllBookmarks: () => {},
  getAllBookmarks: () => {},
  isVideoBookmarked: () => {},
  toggleBookmark: () => {},
  setRetreivedBookmark: () => {},
  retreiveBookmarkedVideo: () => {},
  viewVideoExternally: () => {},
});

export const PluginProvider = ({ children }) => {
  const {
    bfBookmarks,
    bfDeeplink,
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

  // External Viewing
  const viewVideoExternally = (event) => {
    event.preventDefault();
    bfNavigation.openWindow(event.currentTarget.getAttribute('data-video-url'), '_system');
  };

  const value = useMemo(() => ({
    bfBookmarks,
    bfDeeplink,
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
