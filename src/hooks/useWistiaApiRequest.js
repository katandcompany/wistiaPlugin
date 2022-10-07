import useSWRInfinite from 'swr/infinite';

const useWistiaApiRequest = (apiKey, projectId) => {
  /* If the apiKey or projectId fail to exist, throw an error and stop processing */
  if (!apiKey || !projectId) {
    throw new Error('Missing or invalid API Key or Project ID');
  }

  /* The base url for the fetch request. */
  const baseUrl = `https://api.wistia.com/v1/medias.json?type=Video&per_page=100&project_id=${projectId}`;

  /* Function that sets the key for the useSWRInfinite function call */
  const getKey = (pageIndex, previousPageData, endpoint, token) => {
    if (previousPageData && !previousPageData.length) return null;
    return [`${endpoint}&page=${pageIndex + 1}`, token];
  };

  /* The fetch function that fetches data from the requested endpoint and processes it */
  const wistiaFetcher = (url, token) => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return fetch(url, fetchOptions).then(res => res.json());
  };

  /* options for the useSWRInfinite function call */
  const swrOptions = {
    revalidateOnFocus: false
  };

  /* Custom error handler. Checks if the data returned has an error property. */
  const getErrorStatus = (data, error) => {
    if (typeof error !== 'undefined') return error;
    if (typeof data !== 'undefined' && data[0] && data[0].error) return data[0].error;
    return false;
  };

  /* Variables returned from the useSWRInfinite function call */
  const {
    data,
    error,
    size,
    setSize
  } = useSWRInfinite((...args) => getKey(...args, baseUrl, apiKey), wistiaFetcher, swrOptions);

  /* Loading status based on the values of error and data. */
  const loading = (!error && !data);

  /* The error status of the fetch request */
  const wistiaError = getErrorStatus(data, error);

  /* The project data to return */
  const projectData = (
    typeof data === 'undefined' ||
    data.length <= 0 ||
    typeof data[0].error !== 'undefined') ?
      [] :
      data.reduce((prev, curr) => prev.concat(curr));

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
