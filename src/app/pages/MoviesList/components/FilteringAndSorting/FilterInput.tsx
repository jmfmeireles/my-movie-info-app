import React, { ChangeEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Filter } from '../../types';
import { getFilter } from '../../selectors';
import { actions as movieListActions } from '../../slice';
import { FilterWrapper } from './styles';

export default function FilterInput() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterData: Filter = useSelector(getFilter);

  const [titleFilter, setTitleFilter] = useState<string>(filterData.title);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const stringToFilter: string = event.target.value;
    setTitleFilter(stringToFilter);
    if (!stringToFilter) {
      dispatch(
        movieListActions.setFilterData({
          title: '',
        }),
      );
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    dispatch(
      movieListActions.setFilterData({
        title: titleFilter,
      }),
    );
  };
  return (
    <FilterWrapper>
      <IconButton onClick={handleSearch} data-testid="searchIcon">
        <SearchIcon />
      </IconButton>
      <InputBase
        inputProps={{ 'data-testid': 'searchByTitle' }}
        placeholder={t('moviesListPage.searchByTitle')}
        onChange={handleFilterChange}
        onKeyDown={handleKeyDown}
      />
    </FilterWrapper>
  );
}
