import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Gooey from './Gooey';
import { storiesOf } from '@storybook/react';

storiesOf('Animation', module)
  .add('Nav', () => (
    <Nav />
  ))
  .add('Gooey', () => (
    <Gooey />
  ))
