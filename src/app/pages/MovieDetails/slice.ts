import { PayloadAction } from 'typesafe-actions';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  MovieDetailedData,
  MoviesDetailsState,
  GetMovieDetailsPayload,
} from './types';

export const initialState: MoviesDetailsState = {
  isCallingAPI: false,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    /**
     * Start action of this page, which triggers a saga to get the movie details from API
     */
    initMovieDetailsPage(
      state: MoviesDetailsState,
      action: PayloadAction<string, GetMovieDetailsPayload>,
    ) {
      state.isCallingAPI = true;
    },
    /**
     * Action triggered after a successfull call to get movie details from API
     */
    setMovieDetails(
      state: MoviesDetailsState,
      action: PayloadAction<string, MovieDetailedData>,
    ) {
      state.isCallingAPI = false;
      state.movieDetailedData = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = movieDetailsSlice;
