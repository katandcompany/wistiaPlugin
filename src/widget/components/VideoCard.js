import React, { useContext } from 'react';
import { PluginContext } from '../../contexts/PluginContext';

const VideoCard = ({
  id,
  title,
  section,
  posterImg,
  isBookmarked
}) => {
  const { bfHistory, setVideo, toggleBookmark } = useContext(PluginContext);
  const thumbnailAltText = `The thumbnail for the video titled ${title}`;

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.tagName === 'I') return;
    const clickedCard = event.currentTarget;
    const handlerData = {
      id: clickedCard.getAttribute('data-video-id'),
      title: clickedCard.getAttribute('data-video-title'),
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
      onClick={handleClick}
      onKeyPress={handleClick}
      href={`#${id}`}
    >
      <i
        className={`bookmark glyphicon ${isBookmarked ? 'glyphicon-star' : 'glyphicon-star-empty'}`}
        role="button"
        tabIndex="-1"
        data-video-id={id}
        data-video-title={title}
        onClick={toggleBookmark}
        onKeyPress={toggleBookmark}
      />
      <span className="thumbnail-container"><img src={posterImg} alt={thumbnailAltText} /></span>
      <span className="caption margin-top-ten padding-zero"><b className="caption-title">{title}</b></span>
    </a>
  );
};

export default VideoCard;
