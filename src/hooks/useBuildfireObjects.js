const useBuildfireObjects = () => {
  const bfBookmarks = buildfire.bookmarks;
  const bfDeepLink = buildfire.deeplink;
  const bfDevice = buildfire.device;
  const bfHistory = buildfire.history;
  const bfNavigation = buildfire.navigation;
  const bfNotes = buildfire.notes;
  const bfSpinner = buildfire.spinner;
  return {
    bfBookmarks,
    bfDeepLink,
    bfDevice,
    bfHistory,
    bfNavigation,
    bfNotes,
    bfSpinner
  };
};

export default useBuildfireObjects;
