import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import {
  FaRegEdit,
  FaExternalLinkAlt,
  FaShareAlt,
  FaStar,
  FaRegStar
} from 'react-icons/fa';
import { PluginContext } from '../../contexts/PluginContext';

const VideoDetails = () => {
  const {
    videoId,
    videoTitle,
    toggleBookmark,
    isVideoBookmarked,
    viewVideoExternally,
    shareVideo,
    addVideoNote
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
          <span
            className="video-action open-in-browser"
            role="button"
            tabIndex="-1"
            onClick={viewVideoExternally}
            onKeyPress={viewVideoExternally}
            data-video-url={finalVideoURL}
          >
            <FaExternalLinkAlt />
          </span>
          <span
            className="video-action add-note"
            role="button"
            tabIndex="-1"
            onClick={addVideoNote}
            onKeyPress={addVideoNote}
            data-video-url={finalVideoURL}
            data-video-title={videoTitle}
          >
            <FaRegEdit />
          </span>
          <span
            className="video-action share"
            role="button"
            tabIndex="-1"
            onClick={shareVideo}
            onKeyPress={shareVideo}
            data-video-url={finalVideoURL}
            data-video-title={videoTitle}
          >
            <FaShareAlt />
          </span>
          <span
            className="video-action bookmark"
            role="button"
            tabIndex="-1"
            onClick={toggleBookmark}
            onKeyPress={toggleBookmark}
            data-video-id={videoId}
            data-video-title={videoTitle}
          >
            {isBookmarked ? <FaStar /> : <FaRegStar />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
