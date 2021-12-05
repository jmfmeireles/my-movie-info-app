import React, { useEffect, useRef } from 'react';

import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as moviesListActions, sliceKey, reducer } from './slice';
import { moviesListSagas } from './sagas';
import { checkIfLoadingResultsFromAPI } from './selectors';
import PageWrapper from '../../components/PageWrapper';
import Header from '../../components/Header';
import List from './components/List';
import Pagination from './components/Pagination';
import Filtering from './components/FilteringAndSorting';
import { LoadingIndicator } from '../../components/LoadingIndicator';

export function MoviesList() {
  const { t, i18n } = useTranslation();
  const refTop = useRef<HTMLDivElement>(null);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({
    key: sliceKey,
    saga: moviesListSagas,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesListActions.initMoviesListPage(i18n.language));
  }, [dispatch, i18n.language]);

  const isLoading: boolean = useSelector(checkIfLoadingResultsFromAPI);

  return (
    <>
      <Helmet>
        <title>{t('moviesListPage.pageTitle')}</title>
        <meta name="description" content={t('moviesListPage.description')} />
      </Helmet>
      <Header />
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <PageWrapper ref={refTop}>
            <Filtering />
            <List />
            <Pagination refToPageTop={refTop} />
          </PageWrapper>
        )}
      </>
    </>
  );
}
