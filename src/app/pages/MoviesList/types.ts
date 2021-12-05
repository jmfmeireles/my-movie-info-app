export interface MoviesListState {
  isCallingAPI: boolean;
  movies: MovieMetadata[];
  pagination: Pagination;
  filter: Filter;
  sorter: Sorter;
}

export interface MovieMetadata {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export enum NumberKeys {
  RANK = 'rank',
  IMDB_RATING = 'imDbRating',
  YEAR = 'year',
  IMDB_RATING_COUNT = 'imDbRatingCount',
}

export interface Pagination {
  page: number;
  elementsPerPage: number;
  numberOfPossibleResults: number;
}

export interface Filter {
  title: string;
}

export interface Sorter {
  sortBy: SorterCategory;
  direction: SorterDirection;
}

export enum SorterCategory {
  RANK = 'rank',
  TITLE = 'title',
  YEAR = 'year',
  IMDB_RATING_COUNT = 'imDbRatingCount',
}

export enum SorterDirection {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}
