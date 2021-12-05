import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  DirectorsAndWritersWrapper,
  DirectorsOrWrittersWrapper,
} from './style';

export default function DirectorsAndWritersList(props: {
  directors: string;
  writers: string;
  numberOfDirectors: number;
  numberOfWriters: number;
}) {
  const { t } = useTranslation();
  return (
    <DirectorsAndWritersWrapper>
      <DirectorsOrWrittersWrapper>
        <h5>
          {t(
            props.numberOfDirectors > 1
              ? 'movieDetailsPage.directors'
              : 'movieDetailsPage.director',
          )}
        </h5>
        <p>{props.directors}</p>
      </DirectorsOrWrittersWrapper>

      <DirectorsOrWrittersWrapper>
        <h5>
          {t(
            props.numberOfWriters > 1
              ? 'movieDetailsPage.writers'
              : 'movieDetailsPage.writer',
          )}
        </h5>
        <p>{props.writers}</p>
      </DirectorsOrWrittersWrapper>
    </DirectorsAndWritersWrapper>
  );
}
