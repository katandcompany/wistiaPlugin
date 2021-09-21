export const getVideoList = (videos, filter) => {
  const filteredVideos = (filter !== 'All') ? videos.filter(video => video.section === filter) : videos;
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

export const getSectionList = (videos) => {
  const sectionList = [...new Set(videos.map((video) => {
    if (!video.section) return 'None';
    return video.section;
  }))];
  const filteredSectionList = sectionList.filter(value => value !== 'None');
  filteredSectionList.sort();
  filteredSectionList.unshift('All');
  return filteredSectionList;
};
