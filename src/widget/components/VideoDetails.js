import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { PluginContext } from '../../contexts/PluginContext';

const VideoDetails = () => {
  const {
    videoId,
    videoTitle,
    toggleBookmark,
    isVideoBookmarked,
    viewVideoExternally
  } = useContext(PluginContext);
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
  const isBookmarked = isVideoBookmarked(videoId);

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
        <h1 className="video-title h4">{videoTitle}</h1>
        <div className="video-actions">
          <i
            className="video-action share glyphicon glyphicon-screenshot"
            role="button"
            tabIndex="-1"
            onClick={viewVideoExternally}
            onKeyPress={viewVideoExternally}
            data-video-url={finalVideoURL}
          />
          <i
            className={`video-action bookmark glyphicon ${!isBookmarked ? 'glyphicon-star-empty' : 'glyphicon-star'}`}
            role="button"
            tabIndex="-1"
            onClick={toggleBookmark}
            onKeyPress={toggleBookmark}
            data-video-id={videoId}
            data-video-title={videoTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
