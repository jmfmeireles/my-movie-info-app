import React from 'react';
import { useTranslation } from 'react-i18next';

import { ActorsWrapper } from './style';
import { Actor as ActorModel, CastMemberInfo } from '../../types';
import Actor from './Actor';

export default function ActorsList(props: {
  actors: ActorModel[];
  stars: CastMemberInfo[];
}) {
  const { t } = useTranslation();
  return (
    <ActorsWrapper>
      <h5>{t('movieDetailsPage.actors')}</h5>
      <p>
        {props.actors.map(actor => (
          <Actor
            key={actor.id}
            isStar={props.stars.some(star => star.id === actor.id)}
            actor={actor}
          />
        ))}
      </p>
    </ActorsWrapper>
  );
}
