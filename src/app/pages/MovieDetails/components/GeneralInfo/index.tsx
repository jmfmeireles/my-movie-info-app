import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Title,
  SubHeaderInfo,
  GeneralInfoWrapper,
  GeneralInfoText,
  RatingIcon,
  RatingWrapper,
  RatingInfo,
  Rate,
  RateVotes,
} from './style';
import Formatter from '../../resources/helpers/Formatter';

export default function GeneralInfo(props: {
  title: string;
  originalTitle: string;
  releaseDate: string;
  imDbRating: string;
  imDbRatingVotes: string;
  duration: string;
}) {
  const { t } = useTranslation();
  return (
    <>
      <Title>{props.title}</Title>
      <SubHeaderInfo>
        <GeneralInfoWrapper>
          <GeneralInfoText>
            {t('movieDetailsPage.originalTitle', {
              title: props.originalTitle ? props.originalTitle : props.title,
            })}
          </GeneralInfoText>
          <GeneralInfoText>
            {new Date(props.releaseDate).toLocaleDateString()} -{' '}
            {props.duration}
          </GeneralInfoText>
        </GeneralInfoWrapper>
        <RatingWrapper>
          <RatingIcon />
          <RatingInfo>
            <Rate>
              <span>{props.imDbRating}</span>/10
            </Rate>
            <RateVotes>
              {Formatter.abbreviateNumber(Number(props.imDbRatingVotes))}
            </RateVotes>
          </RatingInfo>
        </RatingWrapper>
      </SubHeaderInfo>
    </>
  );
}
