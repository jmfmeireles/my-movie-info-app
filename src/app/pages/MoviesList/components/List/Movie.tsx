import React from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { MovieMetadata } from '../../types';
import {
  MovieWrapper,
  Panel,
  Name,
  MovieImage,
  Crew,
  YearAndRating,
  Year,
  RatingWrapper,
  Rating,
} from './style';

export default function Movie(props: { movie: MovieMetadata }) {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <MovieWrapper onClick={() => history.push(`/movie/${props.movie.id}`)}>
      <Panel>
        <MovieImage>
          <img src={props.movie.image} alt={props.movie.title} />
        </MovieImage>
        <Name>{props.movie.title}</Name>
        <Crew>{t('moviesListPage.crew', { crew: props.movie.crew })}</Crew>
        <YearAndRating>
          <Year>{props.movie.year}</Year>
          <RatingWrapper>
            <Rating />
            <p>{props.movie.imDbRating}</p>
          </RatingWrapper>
        </YearAndRating>
      </Panel>
    </MovieWrapper>
  );
}
