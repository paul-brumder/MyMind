import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  span {
    position: relative;
    display: block;
    overflow: hidden;
    width: fit-content;
    margin: auto;
    font-weight: 400;
  }

  span {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: white;
      animation: reveal-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(0);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: #555;
      animation: reveal-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      transform: translateX(-101%);
    }

    &:nth-child(2)::before,
    &:nth-child(2)::after {
      animation-delay: 0.5s;
    }
  }

  @keyframes reveal-before {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }

  @keyframes reveal-after {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(101%);
    }
  }
`;

const Reveal = () => {
  return (
    <Wrapper>
      <h1>
        <span>Un titre très explicite.</span>
        <span>Une phrase des plus poignantes !</span>
      </h1>
    </Wrapper>
  );
};

export default Reveal;
