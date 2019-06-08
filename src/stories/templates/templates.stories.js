import React from 'react';

import Pringles from './Pringles';
import { storiesOf } from '@storybook/react';

storiesOf('Templates', module)
  .add('Pringles', () => (
    <Pringles />
  ))