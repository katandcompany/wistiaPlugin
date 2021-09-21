import React from 'react';
import ReactPlayer from 'react-player';

const VideoDetails = ({ videoId, videoTitle }) => {
  const finalVideoURL = `https://katcommunications.wistia.com/medias/${videoId}`;
  const wistiaPlayerConfig = {
    wistia: {
      options: {
        playbar: false,
        settingsControl: false,
        smallPlayButton: false,
      },
    },
  };

  return (
    <div className="video-details">
      <div className="react-player-container">
        <ReactPlayer
          url={finalVideoURL}
          className="react-player"
          width="100%"
          height="100%"
          controls
          config={wistiaPlayerConfig} />
      </div>
      <div className="video-metadata">
        <h1 className="video-title">
          {videoTitle}
        </h1>
      </div>
    </div>
  );
};

export default VideoDetails;
