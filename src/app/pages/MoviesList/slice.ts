import { PayloadAction } from 'typesafe-actions';
import { createSlice } from 'utils/@reduxjs/toolkit';
import Movies from './resources/helpers/Movies';
import {
  Filter,
  MovieMetadata,
  MoviesListState,
  Sorter,
  SorterCategory,
  SorterDirection,
} from './types';

export const initialState: MoviesListState = {
  isCallingAPI: false,
  movies: [],
  pagination: {
    page: 0,
    elementsPerPage: 12,
    numberOfPossibleResults: 0,
  },
  filter: {
    title: '',
  },
  sorter: {
    sortBy: SorterCategory.RANK,
    direction: SorterDirection.ASCENDING,
  },
};

const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    /**
     * Start action of this page, which triggers a saga to get the products from API
     */
    initMoviesListPage(
      state: MoviesListState,
      action: PayloadAction<string, string>,
    ) {
      state.pagination = initialState.pagination;
      state.isCallingAPI = true;
    },
    /**
     * Action triggered after a successfull call to get movies from API
     */
    setMovies(
      state: MoviesListState,
      action: PayloadAction<string, MovieMetadata[]>,
    ) {
      state.isCallingAPI = false;
      state.movies = action.payload;
      state.pagination.numberOfPossibleResults = action.payload.length;
    },
    /****************************PAGINATION ****************************************/
    setPage(state: MoviesListState, action: PayloadAction<string, number>) {
      state.pagination.page = action.payload;
    },
    /**************************** FILTERS AND SORTERS ****************************************/
    setSorterData(
      state: MoviesListState,
      action: PayloadAction<string, Sorter>,
    ) {
      state.sorter = action.payload;
    },
    setFilterData(
      state: MoviesListState,
      action: PayloadAction<string, Filter>,
    ) {
      state.filter = action.payload;
      state.pagination.numberOfPossibleResults =
        Movies.getNumberOfProductsAfterFiltering(state.movies, action.payload);
    },
  },
});

export const { actions, reducer, name: sliceKey } = moviesListSlice;
