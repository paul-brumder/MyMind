import React from 'react';

import GlobalStyle from '../globalStyle';
import Pringles from './Pringles';
import Products from './Products';
import Caro from './Caro';
import { storiesOf } from '@storybook/react';

storiesOf('Templates', module)
  .add('Pringles', () => (
    <>
      <GlobalStyle />
      <Pringles />
    </>
  ))
  .add('Products', () => (
    <>
      <GlobalStyle />
      <Products />
    </>
  ))
  .add('Caro', () => (
    <>
      <GlobalStyle />
      <Caro />
    </>
  ));
