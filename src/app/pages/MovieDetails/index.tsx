import React, { useEffect } from 'react';

import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { actions as moviesListActions, sliceKey, reducer } from './slice';
import {
  checkIfLoadingMovieDetailsFromAPI,
  getMovieDetails,
} from './selectors';
import { movieDetailsSagas } from './sagas';
import Header from '../../components/Header';
import GeneralInfo from './components/GeneralInfo';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import PageWrapper from '../../components/PageWrapper';
import Poster from './components/DetailedInfo/Poster';
import Genres from './components/DetailedInfo/Genres';
import DirectorsAndWritersList from './components/DetailedInfo/DirectorsAndWritersList';
import ActorsList from './components/DetailedInfo/ActorsList';
import {
  DataWrapper,
  DetailedInfo,
  Plot,
} from './components/DetailedInfo/style';
import { MovieDetailedData } from './types';

export function MovieDetails() {
  const { t, i18n } = useTranslation();
  const params: { movieNumber: string } = useParams();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({
    key: sliceKey,
    saga: movieDetailsSagas,
  });

  const dispatch = useDispatch();

  const isLoading: boolean = useSelector(checkIfLoadingMovieDetailsFromAPI);
  const movieDetails: MovieDetailedData | undefined =
    useSelector(getMovieDetails);

  useEffect(() => {
    dispatch(
      moviesListActions.initMovieDetailsPage({
        movieNumber: params.movieNumber,
        languageCode: i18n.language,
      }),
    );
  }, [dispatch, params.movieNumber, i18n.language]);

  return (
    <>
      <Helmet>
        <title>{movieDetails?.title}</title>
        <meta name="description" content={t('movieDetailsPage.description')} />
      </Helmet>
      <Header />
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            {movieDetails && (
              <PageWrapper>
                <GeneralInfo
                  title={movieDetails.title}
                  originalTitle={movieDetails.originalTitle}
                  releaseDate={movieDetails.releaseDate}
                  imDbRating={movieDetails.imDbRating}
                  imDbRatingVotes={movieDetails.imDbRatingVotes}
                  duration={movieDetails.runtimeStr}
                />
                <DetailedInfo>
                  <Poster
                    imageUrl={movieDetails.image}
                    title={movieDetails.title}
                    trailerUrl={movieDetails.trailer.linkEmbed}
                    awards={movieDetails.awards}
                  />
                  <DataWrapper>
                    <Genres genres={movieDetails.genreList} />
                    <Plot>
                      {movieDetails.plotLocal
                        ? movieDetails.plotLocal
                        : movieDetails.plot}
                    </Plot>
                    <DirectorsAndWritersList
                      directors={movieDetails.directors}
                      writers={movieDetails.writers}
                      numberOfDirectors={movieDetails.directorList.length}
                      numberOfWriters={movieDetails.writerList.length}
                    />
                    <ActorsList
                      actors={movieDetails.actorList}
                      stars={movieDetails.starList}
                    />
                  </DataWrapper>
                </DetailedInfo>
              </PageWrapper>
            )}
          </>
        )}
      </>
    </>
  );
}
