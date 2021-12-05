import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SorterCategory, SorterDirection } from '../../types';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTranslation } from 'react-i18next';

import { Sorter as SorterModel } from '../../types';
import { getSorter } from '../../selectors';
import { actions as movieListActions } from '../../slice';
import { SorterWrapper } from './styles';

export default function Sorter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const sorterData: SorterModel = useSelector(getSorter);

  const handleSortCategoryChange = (event: SelectChangeEvent) => {
    dispatch(
      movieListActions.setSorterData({
        ...sorterData,
        sortBy: event.target.value as SorterCategory,
      }),
    );
  };

  const handleSortDirectionChange = () => {
    dispatch(
      movieListActions.setSorterData({
        ...sorterData,
        direction:
          sorterData.direction === SorterDirection.ASCENDING
            ? SorterDirection.DESCENDING
            : SorterDirection.ASCENDING,
      }),
    );
  };

  return (
    <SorterWrapper>
      <InputLabel>{t('moviesListPage.sortBy')}</InputLabel>
      <Select
        value={sorterData.sortBy}
        label={t('moviesListPage.sortBy')}
        onChange={handleSortCategoryChange}
      >
        {Object.keys(SorterCategory).map(key => (
          <MenuItem key={key} value={SorterCategory[key]}>
            {t(`moviesListPage.${SorterCategory[key]}`)}
          </MenuItem>
        ))}
      </Select>
      <IconButton onClick={handleSortDirectionChange}>
        {sorterData.direction === SorterDirection.ASCENDING && (
          <Tooltip title={t('moviesListPage.ascending') ?? ''}>
            <ArrowUpwardIcon />
          </Tooltip>
        )}
        {sorterData.direction === SorterDirection.DESCENDING && (
          <Tooltip title={t('moviesListPage.descending') ?? ''}>
            <ArrowDownwardIcon />
          </Tooltip>
        )}
      </IconButton>
    </SorterWrapper>
  );
}
