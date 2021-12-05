import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../types';
import { initialState } from './slice';
import Movies from './resources/helpers/Movies';

const moviesListState = (state: RootState) => state.moviesList || initialState;

export const checkIfLoadingResultsFromAPI = createSelector(
  [moviesListState],
  moviesListState => moviesListState.isCallingAPI,
);

export const getMoviesToShow = createSelector(
  [moviesListState],
  moviesListState => {
    const pageOfProducts = Movies.getPageOfMovies(
      moviesListState.movies,
      moviesListState.filter,
      moviesListState.sorter,
      moviesListState.pagination,
    );
    return pageOfProducts;
  },
);

export const getPaginationInfo = createSelector(
  [moviesListState],
  moviesListState => moviesListState.pagination,
);

export const getFilter = createSelector(
  [moviesListState],
  moviesListState => moviesListState.filter,
);

export const getSorter = createSelector(
  [moviesListState],
  moviesListState => moviesListState.sorter,
);
