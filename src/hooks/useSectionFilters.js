import { useState } from 'react';

const useSectionFilters = () => {
  const [sectionFilter, setSectionFilter] = useState('All');
  const setCurrentFilter = section => setSectionFilter(section);
  return {
    sectionFilter,
    setCurrentFilter
  };
};

export default useSectionFilters;
