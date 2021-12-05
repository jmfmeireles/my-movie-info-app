import React from 'react';

import { KeyValuePair } from '../../types';
import { GenresWrapper, Genre } from './style';

export default function Genres(props: { genres: KeyValuePair[] }) {
  return (
    <GenresWrapper>
      {props.genres.map(genre => (
        <Genre key={genre.key} label={genre.value} color="primary" />
      ))}
    </GenresWrapper>
  );
}
