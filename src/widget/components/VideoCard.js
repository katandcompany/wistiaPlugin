import React, { useContext } from 'react';
import { WistiaContext } from '../../contexts/WistiaContext';

const VideoCard = ({
  id,
  title,
  section,
  posterImg
}) => {
  const wistia = useContext(WistiaContext);
  const thumbnailAltText = `The thumbnail for the video titled ${title}`;

  const handleClick = (event) => {
    const clickedCard = event.currentTarget;
    const handlerData = {
      videoId: clickedCard.getAttribute('data-video-id'),
      videoTitle: clickedCard.getAttribute('data-video-title'),
    };
    return wistia.setCurrentVideo(handlerData);
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
      href={`#${section}`}
    >
      <span className="thumbnail-container">
        <img src={posterImg} alt={thumbnailAltText} />
      </span>
      <span className="caption margin-top-ten padding-zero">
        <b className="caption-title">{title}</b>
      </span>
    </a>
  );
};

export default VideoCard;
