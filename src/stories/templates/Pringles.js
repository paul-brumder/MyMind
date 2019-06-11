import React, { useState } from 'react';
import styled from 'styled-components';

import classicPic from '../../images/classic.png';
import flavorPic from '../../images/flavor.png';

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  color: white;
  overflow: hidden;

  h1 {
    font-size: 13vh;
    position: absolute;
    top: 50%;
    left: ${props => (props.animation === 'classic' ? '55%' : '45%')};
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    text-orientation: upright;
    writing-mode: vertical-lr;
    margin: 0;
    letter-spacing: 0rem;
    transition: left 0.8s cubic-bezier(0.42, 0, 0.43, 1.09);
  }
`;

const Brand = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2.5rem;
  display: inline-flex;
  z-index: 1;

  span:nth-child(1) {
    border: 1.5px solid white;
    padding: 0rem 0.4rem;
    margin-right: 0.3rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  height: 2px;
  width: 2rem;
  background: white;
  z-index: 1;

  &::after {
    content: '';
    width: 1.2rem;
    margin-top: 0.8rem;
    height: 2px;
    position: absolute;
    background: white;
    right: 0;
  }
`;

const Classic = styled.div`
  position: relative;
  background: linear-gradient(to right, #eacda3, #d6ae7b);
  width: 50vw;
  height: 100vh;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.animation === 'classic' ? 'scale(1.2)' : 'translateX(-10%)'};
  transition: transform 0.8s cubic-bezier(0.42, 0, 0.43, 1.09);

  img {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2 {
    font-size: 5rem;
    z-index: 20;
  }
`;

const Flavors = styled(Classic)`
  background: linear-gradient(to right, #de6262, #ffb88c);
  float: right;
  transform: ${props =>
    props.animation === 'flavor' ? 'scale(1.2)' : 'translateX(10%)'};
`;

const Pringles = () => {
  const [choice, setChoice] = useState('classic');

  return (
    <Wrapper animation={choice}>
      <Brand>
        <span>C</span>
        <span>hips</span>
      </Brand>
      <Menu />
      <h1>Choose</h1>
      <Classic onMouseOver={() => setChoice('classic')} animation={choice}>
        <h2>Classic</h2>
        <img src={classicPic} alt="classic" />
      </Classic>
      <Flavors onMouseOver={() => setChoice('flavor')} animation={choice}>
        <h2>Flavors</h2>
        <img src={flavorPic} alt="flavor" />
      </Flavors>
    </Wrapper>
  );
};

export default Pringles;
