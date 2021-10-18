/**
 * A function that flattens a two-dimensional array.
 *
 * @param array twoDArray
 * @returns array
 */
export const flattenMultiDimensionalArray = twoDArray => (
  twoDArray.reduce((prev, curr) => prev.concat(curr))
);
/**
 * A function that gets an array of modified video objects.
 *
 * @param array videos
 * @returns array videoList
 */
export const getVideoList = videos => (
  videos.map((video) => {
    const thumbUrl = video.thumbnail.url.split('?')[0].split('#')[0];
    return {
      id: video.hashed_id,
      title: video.name,
      section: video.section,
      posterImg: thumbUrl
    };
  })
);

/**
 * A function that gets an array of section filters.
 *
 * @param array videos
 * @returns array filteredSectionList
 */
export const getSectionList = (videos) => {
  const sectionList = [...new Set(
    videos.map(item => item.section)
  )];
  const filteredSectionList = sectionList.filter(value => value !== 'None');
  filteredSectionList.sort();
  filteredSectionList.unshift('All');
  return filteredSectionList;
};
