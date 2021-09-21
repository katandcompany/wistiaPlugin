import React, { createContext, useState } from 'react';

export const WistiaContext = createContext();

export const WistiaProvider = ({ children }) => {
  const bfHistory = buildfire.history;
  const bfSpinner = buildfire.spinner;
  const [sectionFilter, setSectionFilter] = useState('All');
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');

  const setCurrentFilter = section => setSectionFilter(section);

  const setCurrentVideo = ({ videoId, videoTitle }) => {
    bfHistory.push('Video Details', {
      showLabelInTitlebar: true
    });
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(videoTitle);
  };

  const unsetCurrentVideo = () => {
    setCurrentVideoId(null);
    setCurrentVideoTitle('');
  };

  bfHistory.onPop(() => {
    unsetCurrentVideo();
  });

  return (
    <WistiaContext.Provider
      value={{
        bfSpinner,
        sectionFilter,
        setCurrentFilter,
        currentVideoId,
        currentVideoTitle,
        setCurrentVideo,
        unsetCurrentVideo
      }}
    >
      {children}
    </WistiaContext.Provider>
  );
};
