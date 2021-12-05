/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider as MaterialUiThemeProvider } from '@mui/material/styles';

import { GlobalStyle } from '../styles/global-styles';
import { materialUiTheme } from 'styles/theme/themes';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { MoviesList } from './pages/MoviesList/Loadable';
import { MovieDetails } from './pages/MovieDetails/Loadable';
import ToastMessage from './components/ToastMessage';

export function App() {
  const { i18n, t } = useTranslation();

  return (
    <MaterialUiThemeProvider theme={materialUiTheme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s"
          defaultTitle={t('app.title')}
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content={t('app.description')} />
        </Helmet>

        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={MoviesList}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/movie/:movieNumber'}
            component={MovieDetails}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <ToastMessage />
        <GlobalStyle />
      </BrowserRouter>
    </MaterialUiThemeProvider>
  );
}
