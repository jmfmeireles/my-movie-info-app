import React from 'react';

import { configure, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import List from '../index';
import createMockStore from '../../../../../resources/test-helpers/createMockStore';
import { RootState } from '../../../../../../types';
import { themes } from '../../../../../../styles/theme/themes';
import moviesListMock from '../../../resources/mocks/movies_list_mock.json';

describe('List', () => {
  configure({ adapter: new Adapter() });

  let store: MockStoreEnhanced<RootState, {}>;

  it('Renders page if results loading from API', () => {
    store = createMockStore(state => {
      if (state.moviesList) {
        state.moviesList = {
          ...state.moviesList,
          isCallingAPI: true,
        };
      }
      return state;
    });
    expect(getMountedComponentForTesting()).toMatchSnapshot();
  });

  it('Renders list properly', () => {
    store = createMockStore(state => {
      if (state.moviesList) {
        state.moviesList = {
          ...state.moviesList,
          movies: moviesListMock,
          pagination: {
            ...state.movieDetails.pagination,
            numberOfPossibleResults: moviesListMock.length,
          },
        };
      }
      return state;
    });
    expect(getMountedComponentForTesting()).toMatchSnapshot();
  });

  function getMountedComponentForTesting() {
    return mount(
      <ThemeProvider theme={themes.light}>
        <BrowserRouter>
          <Provider store={store}>
            <List />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>,
    );
  }
});
