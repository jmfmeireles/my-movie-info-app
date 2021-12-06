import { RootState } from '../../../types';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import lodash, { cloneDeep } from 'lodash';
import { initialState as themeState } from '../../../styles/theme/slice';
import { initialState as moviesListState } from '../../pages/MoviesList/slice';
import { initialState as movieDetailsState } from '../../pages/MovieDetails/slice';

export default function createMockStore(
  modifyState?: (state: RootState) => RootState,
): MockStoreEnhanced<RootState, {}> {
  const initialState = cloneDeep<RootState>({
    theme: themeState,
    moviesList: moviesListState,
    movieDetails: movieDetailsState,
  });
  const mockStore = configureStore<RootState>([]);
  const updatedState = modifyState ? modifyState(initialState) : initialState;
  return mockStore(lodash.cloneDeep(updatedState));
}
