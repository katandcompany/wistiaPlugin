import useSWRInfinite from 'swr/infinite';

const useWistiaApiRequest = (apiKey, projectId) => {
  /* If the apiKey or projectId fail to exist, throw an error and stop processing */
  if (!apiKey || !projectId) {
    throw new Error('Missing or invalid API Key or Project ID');
  }

  /* The base url for the fetch request. */
  const baseUrl = `https://api.wistia.com/v1/medias.json?type=Video&access_token=${apiKey}&project_id=${projectId}`;

  /* Function to set the key for the useSWRInfinite function call */
  const getKey = (pageIndex, previousPageData, endpoint) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${endpoint}&page=${pageIndex + 1}&per_page=100`;
  };

  /* The fetch function that fetches and processes the returned data */
  const wistiaFetcher = (...args) => fetch(...args).then(res => res.json());

  /* options for the useSWRInfinite function call */
  const swrOptions = {
    revalidateOnFocus: false
  };

  /* Custom error handler. Checks if the data returned has an error property. */
  const getErrorStatus = (data, error) => {
    if (typeof error !== 'undefined') return error;
    if (typeof data !== 'undefined' && data.error) return data.error;
    return false;
  };

  /* Variables returned from the useSWRInfinite function call */
  const {
    data,
    error,
    size,
    setSize
  } = useSWRInfinite((...args) => getKey(...args, baseUrl), wistiaFetcher, swrOptions);

  /* Loading status based on the values of error and data. */
  const loading = (!error && !data);

  /* The error status of the fetch request */
  const wistiaError = getErrorStatus(data, error);

  const projectData = (!data || data.length < 0)
    ? []
    : data.reduce((prev, curr) => prev.concat(curr));

  /* Return variables needed in components for rendering */
  return {
    data: projectData,
    loading,
    wistiaError,
    size,
    setSize
  };
};

export default useWistiaApiRequest;
