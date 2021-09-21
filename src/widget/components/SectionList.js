import React, { useContext } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { WistiaContext } from '../../contexts/WistiaContext';
import SectionListLink from './SectionListLink';

const SectionList = ({ sections }) => {
  const wistia = useContext(WistiaContext);
  const sectionLinks = sections.map((section) => {
    const isActiveFilter = (section === wistia.sectionFilter);
    return (
      <SectionListLink key={section} sectionId={section} active={isActiveFilter} />
    );
  });

  return <ScrollContainer className="project-sections" vertical={false}>{sectionLinks}</ScrollContainer>;
};

export default SectionList;
