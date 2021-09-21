import useSWR from 'swr';

const baseUrl = 'https://api.wistia.com/v1/medias.json?type=Video';

const wistiaFetcher = (...args) => fetch(...args).then(res => res.json());

const swrOptions = {
  revalidateOnFocus: false
};

const getErrorStatus = (data, error) => {
  if (typeof error !== 'undefined') return error;
  if (typeof data !== 'undefined' && data.error) return data.error;
  return false;
};

const useWistiaApiRequest = (apiKey, projectId) => {
  if (!apiKey || !projectId) {
    throw new Error('Missing or invalid API Key or Project ID');
  }
  const fetchUrl = `${baseUrl}&access_token=${apiKey}&project_id=${projectId}`;
  const { data, error } = useSWR(fetchUrl, wistiaFetcher, swrOptions);
  const loading = !error && !data;
  const wistiaError = getErrorStatus(data, error);
  return {
    data,
    loading,
    wistiaError
  };
};

export default useWistiaApiRequest;
