import React from 'react';
import styled from 'styled-components';

import Gooey from './Gooey';
import { storiesOf } from '@storybook/react';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 18px;
    outline: none;
    text-decoration: none;
    position: relative;
    padding: 2rem;
    animation: test 3s ease-in;
  
    &::after {
      content: "";
      height: 2px;
      width: 0;
      background-color: #555;
      position: absolute;
      top: 3.4rem;
      left: 2rem;
      transition: all 400ms ease-in-out;
    }
  
    &:hover {
      }
    
    &:hover::after {
      width: 3.2rem;
      background-color: red;
    }
  }

  @keyframes test { 
    0% {
      color: red;
    }
    50% {
      color: yellow;
    }
    100% {
      color: blue;
    }
  }
`;

storiesOf('Animation', module)
  .add('Nav', () => (
    <Wrapper>
      <a href="">Manger</a>
      <a href="">Manger</a>
      <a href="">Manger</a>
    </Wrapper>
  ))
  .add('Gooey', () => (
    <Gooey />
  ))
