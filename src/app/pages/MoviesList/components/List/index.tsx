import React from 'react';

import { useSelector } from 'react-redux';

import { MovieMetadata } from '../../types';
import { getMoviesToShow } from '../../selectors';
import Movie from './Movie';
import { MoviesSection } from './style';

export default function List() {
  const movies: MovieMetadata[] = useSelector(getMoviesToShow);

  return (
    <MoviesSection>
      <>
        {movies.map((movie: MovieMetadata) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </>
    </MoviesSection>
  );
}
