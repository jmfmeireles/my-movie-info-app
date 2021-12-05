import React, { useState, useEffect } from 'react';

import { IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

import { FilterAndSorterWrapper, VisibilityButtonsWrapper } from './styles';
import FilterInput from './FilterInput';
import Sorter from './Sorter';
import { MIN_DIMENSION_FOR_FILTER_AND_SORTER_VISIBILITY_PX } from 'app/resources/configs';

export default function Filtering() {
  const [filterVisibility, setFilterVisibility] = useState<boolean>(false);
  const [sorterVisibility, setSorterVisibility] = useState<boolean>(false);

  const toggleFilter = () => {
    setFilterVisibility(!filterVisibility);
    setSorterVisibility(false);
  };

  const toggleSorter = () => {
    setSorterVisibility(!sorterVisibility);
    setFilterVisibility(false);
  };

  const handleWindowResize = () => {
    if (
      window.innerWidth >= MIN_DIMENSION_FOR_FILTER_AND_SORTER_VISIBILITY_PX
    ) {
      setFilterVisibility(true);
      setSorterVisibility(true);
    } else {
      setFilterVisibility(false);
      setSorterVisibility(false);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <VisibilityButtonsWrapper>
        <IconButton onClick={toggleFilter}>
          <FilterListIcon />
        </IconButton>
        <IconButton onClick={toggleSorter}>
          <SortIcon />
        </IconButton>
      </VisibilityButtonsWrapper>
      <FilterAndSorterWrapper>
        {filterVisibility && <FilterInput />}
        {sorterVisibility && <Sorter />}
      </FilterAndSorterWrapper>
    </>
  );
}
