import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../types';
import { initialState } from './slice';

const movieDetailsState = (state: RootState) =>
  state.movieDetails || initialState;

export const checkIfLoadingMovieDetailsFromAPI = createSelector(
  [movieDetailsState],
  movieDetailsState => movieDetailsState.isCallingAPI,
);

export const getMovieDetails = createSelector(
  [movieDetailsState],
  movieDetailsState => movieDetailsState.movieDetailedData,
);
