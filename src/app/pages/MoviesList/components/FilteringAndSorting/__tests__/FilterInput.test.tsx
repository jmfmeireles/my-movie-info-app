import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { fireEvent, render } from '@testing-library/react';
import { configure, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

import FilterInput from '../FilterInput';
import createMockStore from '../../../../../resources/test-helpers/createMockStore';
import { RootState } from '../../../../../../types';
import { themes } from '../../../../../../styles/theme/themes';
import { actions as movieListActions } from '../../../slice';

describe('List', () => {
  configure({ adapter: new Adapter() });

  const store: MockStoreEnhanced<RootState, {}> = createMockStore(state => {
    if (state.moviesList) {
      state.moviesList = {
        ...state.moviesList,
        filter: {
          title: 'title',
        },
      };
    }
    return state;
  });

  it('Renders properly', () => {
    expect(
      mount(
        <ThemeProvider theme={themes.light}>
          <BrowserRouter>
            <Provider store={store}>
              <FilterInput />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });
  it('Searchs a value properly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <BrowserRouter>
          <Provider store={store}>
            <FilterInput />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>,
    );

    const searchInput = getByTestId(`searchByTitle`);
    fireEvent.change(searchInput, { target: { value: 'test' } });
    const searchIcon = getByTestId(`searchIcon`);
    fireEvent.click(searchIcon);
    expect(store.getActions()).toMatchObject([
      {
        type: movieListActions.setFilterData.type,
        payload: {
          title: 'test',
        },
      },
    ]);
  });
});
