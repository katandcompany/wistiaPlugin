const useBuildfireObjects = () => {
  const bfBookmarks = buildfire.bookmarks;
  const bfDeepLink = buildfire.deeplink;
  const bfHistory = buildfire.history;
  const bfNavigation = buildfire.navigation;
  const bfSpinner = buildfire.spinner;
  return {
    bfBookmarks,
    bfDeepLink,
    bfHistory,
    bfNavigation,
    bfSpinner
  };
};

export default useBuildfireObjects;
