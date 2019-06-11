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
    font-size: 10rem;
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

const Classic = styled.div`
  background: linear-gradient(to right, #eacda3, #d6ae7b);
  width: 50vw;
  height: 100vh;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.animation === 'classic' ? 'scale(1.2)' : 'translateX(-10%)'};
  transition: transform 300ms ease-in-out;

  h2 {
    font-size: 5rem;
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
    <Wrapper>
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
