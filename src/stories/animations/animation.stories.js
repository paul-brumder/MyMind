import React from 'react';

import Nav from './Nav';
import Gooey from './Gooey';
import SvgGooey from './SVG-Gooey';
import DepthMap from './DepthMap';
import SmoothParallax from './SmoothParallax';
import Text from './Text';
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
  .add('Smooth Scroll + Parallax', () => (
    <SmoothParallax />
  ))
  .add('Text', () => (
    <Text />
  ))
