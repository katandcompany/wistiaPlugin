import React, { useContext } from 'react';
import { FaShareAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { PluginContext } from '../../contexts/PluginContext';

const VideoCard = ({
  id,
  title,
  section,
  posterImg,
  created,
  updated,
  isBookmarked,
}) => {
  const {
    bfHistory,
    setVideo,
    toggleBookmark,
    shareVideo
  } = useContext(PluginContext);
  const thumbnailAltText = `The thumbnail for the video titled ${title}`;

  const handleClick = (event) => {
    event.preventDefault();
    if ((event.target.tagName.toLowerCase() === 'path' || event.target.tagName.toLowerCase() === 'svg') || (event.target.className === 'bookmark' || event.target.className === 'share')) {
      return;
    }
    const clickedCard = event.currentTarget;
    const handlerData = {
      id: clickedCard.getAttribute('data-video-id'),
      title: clickedCard.getAttribute('data-video-title'),
      created: clickedCard.getAttribute('data-video-created'),
      updated: clickedCard.getAttribute('data-video-updated')
    };
    setVideo(handlerData);
    bfHistory.push('Video Details', { showLabelInTitlebar: true });
  };

  return (
    <a
      className="wistia-card thumbnail"
      role="button"
      data-section-id={section}
      data-video-id={id}
      data-video-title={title}
      data-video-created={created}
      data-video-updated={updated}
      onClick={handleClick}
      onKeyPress={handleClick}
      href={`#${id}`}
    >
      <span
        className="share"
        role="button"
        tabIndex="-1"
        onClick={shareVideo}
        onKeyPress={shareVideo}
        data-video-url={`https://katcommunications.wistia.com/${id}`}
        data-video-title={title}
      >
        <FaShareAlt />
      </span>
      <span
        className="bookmark"
        role="button"
        tabIndex="-1"
        data-video-id={id}
        data-video-title={title}
        onClick={toggleBookmark}
        onKeyPress={toggleBookmark}
      >
        {isBookmarked ? <FaStar /> : <FaRegStar />}
      </span>
      <span className="thumbnail-container"><img src={posterImg} alt={thumbnailAltText} /></span>
      <span className="caption margin-top-ten padding-zero"><b className="caption-title">{title}</b></span>
    </a>
  );
};

export default VideoCard;
