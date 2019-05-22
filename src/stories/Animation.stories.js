import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Gooey from './Gooey';
import SvgGooey from './SVG-Gooey';
import DepthMap from './DepthMap';
import { storiesOf } from '@storybook/react';

storiesOf('Animation', module)
  .add('Nav', () => (
    <Nav />
  ))
  .add('Gooey', () => (
    <Gooey />
  ))
  .add('SVG-Gooey', () => (
    <SvgGooey />
  ))
  .add('Depth Map', () => (
    <DepthMap />
  ))
