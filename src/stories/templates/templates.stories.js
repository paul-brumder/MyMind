import React from 'react';

import GlobalStyle from '../globalStyle';
import Products from './Products';
import { storiesOf } from '@storybook/react';

storiesOf('Templates', module).add('Products', () => (
  <>
    <GlobalStyle />
    <Products />
  </>
));
