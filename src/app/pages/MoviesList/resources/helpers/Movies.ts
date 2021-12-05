import {
  Filter,
  MovieMetadata,
  NumberKeys,
  Pagination,
  Sorter,
  SorterDirection,
} from '../../types';

export default class Movies {
  /**
   * Function called whenever the user opens the page or changes filter, sorter or pagination settings.
   * @param movies
   * @param filter
   * @param sorter
   * @param pagination
   * @returns a page of movies
   */
  static getPageOfMovies(
    movies: MovieMetadata[],
    filter: Filter,
    sorter: Sorter,
    pagination: Pagination,
  ): MovieMetadata[] {
    //first, filter movies by title
    let filteredAndSortedMovies: MovieMetadata[] = Movies.filterMovies(
      movies,
      filter,
    );

    //now, sort movies
    filteredAndSortedMovies = Movies.sortMovies(
      filteredAndSortedMovies,
      sorter,
    );

    //finally, get the proper results having into account the pagination settings
    const startIndex = pagination.page * pagination.elementsPerPage;
    const endIndex =
      (pagination.page + 1) * pagination.elementsPerPage <
      pagination.numberOfPossibleResults
        ? (pagination.page + 1) * pagination.elementsPerPage
        : pagination.numberOfPossibleResults;
    return filteredAndSortedMovies.slice(startIndex, endIndex);
  }

  /**
   * Gets the number of possible movies after a filtering operation
   * @param movies
   * @param filter
   * @returns the number of movies after filtering
   */
  static getNumberOfProductsAfterFiltering(
    products: MovieMetadata[],
    filter: Filter,
  ): number {
    return Movies.filterMovies(products, filter).length;
  }
  /**
   * Filters movies catalog based on the movie title inserted by the user
   * @param movies
   * @param filter
   * @returns filtered movies
   */
  static filterMovies(
    movies: MovieMetadata[],
    filter: Filter,
  ): MovieMetadata[] {
    return movies.length
      ? movies.filter(movie =>
          movie.title.toLowerCase().includes(filter.title.toLowerCase()),
        )
      : movies;
  }
  /**
   * Sort movies by category, in an ascending or descending way
   * @param movies
   * @param sorter
   * @returns sorted movies
   */
  static sortMovies(movies: MovieMetadata[], sorter: Sorter): MovieMetadata[] {
    return movies.sort((a: MovieMetadata, b: MovieMetadata) => {
      const keyForSort: string = sorter.sortBy as string;
      const convertedA = Object.values(NumberKeys).includes(
        keyForSort as NumberKeys,
      )
        ? Number(a[keyForSort])
        : a[keyForSort];
      const convertedB = Object.values(NumberKeys).includes(
        keyForSort as NumberKeys,
      )
        ? Number(b[keyForSort])
        : b[keyForSort];
      return sorter.direction === SorterDirection.DESCENDING
        ? convertedB - convertedA
        : convertedA - convertedB;
    });
  }
}
