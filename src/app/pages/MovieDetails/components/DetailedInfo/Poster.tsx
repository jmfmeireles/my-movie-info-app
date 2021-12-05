import React from 'react';

import { PosterWrapper } from './style';

export default function Poster(props: {
  title: string;
  imageUrl: string;
  trailerUrl: string | null;
  awards: string;
}) {
  return (
    <PosterWrapper
      onClick={() =>
        props.trailerUrl && window.open(props.trailerUrl, '_blank')
      }
      disabled={props.trailerUrl === null}
    >
      <img src={props.imageUrl} alt={props.title} />
      {props.awards && <h5>{props.awards}</h5>}
    </PosterWrapper>
  );
}
