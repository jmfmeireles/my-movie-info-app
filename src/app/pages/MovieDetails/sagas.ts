import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as movieDetailsActions } from './slice';
import ServiceCall from '../../resources/helpers/ServiceCall';
import { API_KEY } from '../../resources/configs';
import { PayloadAction } from 'typesafe-actions';
import { GetMovieDetailsPayload } from './types';
import { messageService } from '../../resources/MessageService';

export function* getMovieData(
  action: PayloadAction<string, GetMovieDetailsPayload>,
) {
  try {
    const response = yield call(
      ServiceCall.get,
      `https://imdb-api.com/${action.payload.languageCode}/API/Title/${API_KEY}/${action.payload.movieNumber}/Trailer`,
    );
    if (response.data.errorMessage) {
      yield call(messageService.sendMessage, {
        message: response.data.errorMessage,
        severity: 'error',
      });
    } else {
      yield put(movieDetailsActions.setMovieDetails(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* movieDetailsSagas(): SagaIterator {
  yield takeLatest(movieDetailsActions.initMovieDetailsPage.type, getMovieData);
}
