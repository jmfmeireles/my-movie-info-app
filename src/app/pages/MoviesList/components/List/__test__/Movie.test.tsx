import React from 'react';

import { configure, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Movie from '../Movie';
import { themes } from '../../../../../../styles/theme/themes';
import moviesListMock from '../../../resources/mocks/movies_list_mock.json';

describe('Movie', () => {
  configure({ adapter: new Adapter() });

  it('Renders page properly', () => {
    expect(
      mount(
        <ThemeProvider theme={themes.light}>
          <BrowserRouter>
            <Movie movie={moviesListMock[0]} />
          </BrowserRouter>
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('Navigates to Movie Details page when clicking on the movie panel', () => {
    const history = createMemoryHistory();
    // mock push function
    history.push = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <Router history={history}>
          <Movie movie={moviesListMock[0]} />
        </Router>
      </ThemeProvider>,
    );

    const movieWrapper = getByTestId(`movieWrapper`);
    fireEvent.click(movieWrapper);
    expect(history.push).toHaveBeenCalledWith(`/movie/${moviesListMock[0].id}`);
  });
});
