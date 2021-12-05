/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from '../../../utils/loadable';
import { LoadingIndicator } from '../../components/LoadingIndicator';

export const MovieDetails = lazyLoad(
  () => import('./index'),
  module => module.MovieDetails,
  {
    fallback: <LoadingIndicator />,
  },
);
