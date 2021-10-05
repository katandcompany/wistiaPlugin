import React, { useContext } from 'react';
import { PluginContext } from '../../contexts/PluginContext';

const SectionListLink = ({ sectionId, active }) => {
  const { setCurrentFilter } = useContext(PluginContext);
  const linkClickEvent = (event) => {
    setCurrentFilter(event.currentTarget.getAttribute('id'));
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
