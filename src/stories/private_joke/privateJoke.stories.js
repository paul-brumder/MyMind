import React from 'react';

import GlobalStyle from '../globalStyle';
import Pringles from './Pringles';
import Caro from './Caro';
import { storiesOf } from '@storybook/react';

storiesOf('Private Joke & WIP', module)
  .add('Pringles', () => (
    <>
      <GlobalStyle />
      <Pringles />
    </>
  ))
  .add('Caro', () => (
    <>
      <GlobalStyle />
      <Caro />
    </>
  ));
