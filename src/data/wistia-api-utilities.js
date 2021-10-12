/**
 * A function that gets an array of modified video objects.
 *
 * @param array videos
 * @param string filter
 * @returns array videoList
 */
export const getVideoList = (videos, filter) => {
  const videoSet = videos.reduce((prev, curr) => prev.concat(curr));
  const filteredVideos = (filter !== 'All') ? videoSet.filter(video => video.section === filter) : videoSet;
  const videoList = filteredVideos.map((video) => {
    const thumbUrl = video.thumbnail.url.split('?')[0].split('#')[0];
    return {
      id: video.hashed_id,
      title: video.name,
      section: video.section,
      posterImg: thumbUrl
    };
  });
  return videoList;
};

/**
 * A function that gets an array of section filters.
 *
 * @param array videos
 * @returns array filteredSectionList
 */
export const getSectionList = (videos) => {
  const sectionList = [...new Set(
    videos
      .reduce((prev, curr) => prev.concat(curr))
      .map(item => item.section)
  )];
  const filteredSectionList = sectionList.filter(value => value !== 'None');
  filteredSectionList.sort();
  filteredSectionList.unshift('All');
  return filteredSectionList;
};
