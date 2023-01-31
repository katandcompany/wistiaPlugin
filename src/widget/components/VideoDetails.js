import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import {
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
    videoCreated,
    videoUpdated,
    toggleBookmark,
    isVideoBookmarked,
    viewVideoExternally,
    shareVideo,
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
  const localeLocation = 'en-US';
  const localeDateOptions = {
    'month': '2-digit',
    'day': '2-digit',
    'year': 'numeric',
  };
  const localeTimeOptions = {
    'hour': '2-digit',
    'minute': '2-digit'
  };

  const formatDateString = (date, locale, dateOptions, timeOptions) => {
    const temp_date = new Date(date);
    const temp_day = temp_date.toLocaleString(locale, dateOptions);
    const temp_time = temp_date.toLocaleString(locale, timeOptions);
    return `${temp_day} ${temp_time}`;
  };

  const formattedCreatedDate = formatDateString(videoCreated, localeLocation, localeDateOptions, localeTimeOptions);
  const formattedUpdatedDate = formatDateString(videoUpdated, localeLocation, localeDateOptions, localeTimeOptions);
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
        <p className="video-created"><strong>Uploaded:</strong> {formattedCreatedDate}</p>
        <p className="video-updated"><strong>Updated:</strong> {formattedUpdatedDate}</p>
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
