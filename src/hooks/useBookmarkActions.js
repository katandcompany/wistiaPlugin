import { useEffect, useState } from 'react';
import useBuildfireObjects from './useBuildfireObjects';
import useErrorHandler from './useErrorHandler';

const useBookmarkActions = () => {
  const [allBookmarks, setAllBookmarks] = useState([]);
  const [retreivedBookmark, setRetreivedBookmark] = useState(false);
  const { bfBookmarks, bfDeepLink } = useBuildfireObjects();
  const { setErrorMsg } = useErrorHandler();

  const getAllBookmarks = () => {
    bfBookmarks.getAll((err, bookmarks) => {
      if (err) return setErrorMsg(`There was an error retrieving bookmarks. Message: ${err}`);
      const bookmarkIds = bookmarks.map(bookmark => bookmark.id);
      return setAllBookmarks(bookmarkIds);
    });
  };

  const isVideoBookmarked = (video) => {
    const filteredBookmarks = allBookmarks.filter(bookmark => bookmark === video);
    return (filteredBookmarks.length >= 1);
  };

  const removeBookmark = video => bfBookmarks.delete(video, () => getAllBookmarks());

  const insertBookmark = (videoId, videoTitle) => {
    const bookmarkPayloadData = {
      data: { videoId, videoTitle }
    };

    const bookmarkObject = {
      id: videoId,
      title: videoTitle,
      icon: 'glyphicon glyphicon-film',
      payload: bookmarkPayloadData
    };

    return bfBookmarks.add(bookmarkObject, (err, bookmark) => {
      if (err) return setErrorMsg(`There was an error adding the bookmark. Message: ${err}`);
      getAllBookmarks();
      return bookmark;
    });
  };

  const toggleBookmark = (event) => {
    event.preventDefault();
    const bookmarkVideoId = event.currentTarget.getAttribute('data-video-id');
    return isVideoBookmarked(bookmarkVideoId) ? removeBookmark(bookmarkVideoId) : insertBookmark(bookmarkVideoId, event.currentTarget.getAttribute('data-video-title'));
  };

  const retreiveBookmarkedVideo = () => {
    bfDeepLink.getData((deeplinkData) => {
      if (!deeplinkData
        || !deeplinkData.data.videoId
        || !deeplinkData.data.videoTitle) {
        return setRetreivedBookmark(false);
      }
      const bookmarkData = {
        id: deeplinkData.data.videoId,
        title: deeplinkData.data.videoTitle
      };
      setRetreivedBookmark(bookmarkData);
    });
  };

  useEffect(() => {
    getAllBookmarks();
    retreiveBookmarkedVideo();
  }, []);

  return {
    allBookmarks,
    setAllBookmarks,
    retreivedBookmark,
    setRetreivedBookmark,
    getAllBookmarks,
    isVideoBookmarked,
    toggleBookmark,
    retreiveBookmarkedVideo,
  };
};

export default useBookmarkActions;
