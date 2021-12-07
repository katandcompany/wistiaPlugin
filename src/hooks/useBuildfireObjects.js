const useBuildfireObjects = () => {
  const bfBookmarks = buildfire.bookmarks;
  const bfColorLib = buildfire.colorLib;
  const bfDeepLink = buildfire.deeplink;
  const bfDevice = buildfire.device;
  const bfHistory = buildfire.history;
  const bfNavigation = buildfire.navigation;
  const bfSpinner = buildfire.spinner;
  return {
    bfBookmarks,
    bfColorLib,
    bfDeepLink,
    bfDevice,
    bfHistory,
    bfNavigation,
    bfSpinner
  };
};

export default useBuildfireObjects;
