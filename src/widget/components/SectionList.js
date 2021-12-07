import React, { useContext } from 'react';
import { PluginContext } from '../../contexts/PluginContext';
import SectionListLink from './SectionListLink';

const SectionList = ({ sections }) => {
  const { sectionFilter } = useContext(PluginContext);
  const sectionLinks = sections.map((section) => {
    const isActiveFilter = (section === sectionFilter);
    return <SectionListLink key={section} sectionId={section} active={isActiveFilter} />;
  });

  return sectionLinks;
};

export default SectionList;
