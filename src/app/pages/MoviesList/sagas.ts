import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as moviesListActions } from './slice';
import ServiceCall from '../../resources/helpers/ServiceCall';
import { API_KEY } from '../../resources/configs';
import { PayloadAction } from 'typesafe-actions';
import { messageService } from 'app/resources/MessageService';

export function* getTop250MoviesFromAPI(action: PayloadAction<string, string>) {
  try {
    const response = yield call(
      ServiceCall.get,
      `https://imdb-api.com/${action.payload}/API/Top250Movies/${API_KEY}`,
    );
    if (response.data.errorMessage) {
      yield call(messageService.sendMessage, {
        message: response.data.errorMessage,
        severity: 'error',
      });
    } else {
      yield put(moviesListActions.setMovies(response.data.items));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* moviesListSagas(): SagaIterator {
  yield takeLatest(
    moviesListActions.initMoviesListPage.type,
    getTop250MoviesFromAPI,
  );
}
