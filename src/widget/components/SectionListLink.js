import React, { useContext } from 'react';
import { WistiaContext } from '../../contexts/WistiaContext';

const SectionListLink = ({ sectionId, active }) => {
  const wistia = useContext(WistiaContext);
  const linkClickEvent = (event) => {
    wistia.setCurrentFilter(event.currentTarget.getAttribute('id'));
  };

  return (
    <a
      className={`btn btn-primary ${active ? 'active' : ''}`}
      id={sectionId}
      key={sectionId}
      role="button"
      onClick={linkClickEvent}
      onKeyPress={linkClickEvent}
      href={`#${sectionId}`}>
      {sectionId}
    </a>
  );
};

export default SectionListLink;
