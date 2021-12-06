import {
  MovieMetadata,
  Pagination,
  SorterCategory,
  SorterDirection,
} from '../../../types';
import Movies from '../Movies';
import moviesListMock from '../../mocks/movies_list_mock.json';

const mockPagination: Pagination = {
  page: 0,
  elementsPerPage: 12,
  numberOfPossibleResults: moviesListMock.length,
};

describe('Movies helper', () => {
  it(`getPageOfMovies - default filtering, sorting and pagination`, () => {
    expect(
      Movies.getPageOfMovies(
        moviesListMock,
        { title: '' },
        {
          sortBy: SorterCategory.RANK,
          direction: SorterDirection.ASCENDING,
        },
        mockPagination,
      ),
    ).toMatchObject(moviesListMock.slice(0, 12));
  });

  it(`getPageOfMovies - sorts by movie title in an ascending way`, () => {
    const sortingResult: MovieMetadata[] = Movies.getPageOfMovies(
      moviesListMock,
      { title: '' },
      {
        sortBy: SorterCategory.TITLE,
        direction: SorterDirection.ASCENDING,
      },
      { ...mockPagination, elementsPerPage: moviesListMock.length },
    );
    //12 Angry Man
    expect(sortingResult[0]).toMatchObject(moviesListMock[4]);
    //The Shawshank Redemption
    expect(sortingResult[moviesListMock.length - 1]).toMatchObject(
      moviesListMock[0],
    );
  });

  it(`getPageOfMovies - filters by title and sorts by year in a desdending way`, () => {
    expect(
      Movies.getPageOfMovies(
        moviesListMock,
        { title: 'Lord of the Rings' },
        {
          sortBy: SorterCategory.YEAR,
          direction: SorterDirection.DESCENDING,
        },
        mockPagination,
      ),
    ).toMatchObject([moviesListMock[6], moviesListMock[9]]);
  });

  it(`getNumberOfProductsAfterFiltering - returns the number of possible results properly if there is a filter`, () => {
    expect(
      Movies.getNumberOfProductsAfterFiltering(moviesListMock, {
        title: 'Lord of the Rings',
      }),
    ).toBe(2);
  });

  it(`getNumberOfProductsAfterFiltering - returns all the results if no filtering`, () => {
    expect(
      Movies.getNumberOfProductsAfterFiltering(moviesListMock, {
        title: '',
      }),
    ).toBe(moviesListMock.length);
  });
});
