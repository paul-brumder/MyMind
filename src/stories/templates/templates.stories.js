import React from 'react';

import GlobalStyle from '../globalStyle';
import Pringles from './Pringles';
import { storiesOf } from '@storybook/react';

storiesOf('Templates', module).add('Pringles', () => (
  <>
    <GlobalStyle />
    <Pringles />
  </>
));
