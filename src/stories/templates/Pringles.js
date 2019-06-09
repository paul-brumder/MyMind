import React from 'react';
import styled from 'styled-components';

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
  transition: transform 400ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  h2 {
    font-size: 5rem;
  }
`;

const Flavors = styled(Classic)`
  background: linear-gradient(to right, #de6262, #ffb88c);
  float: right;
`;

const Pringles = () => {
  return (
    <Wrapper>
      <h1>Choose</h1>
      <Classic>
        <h2>Classic</h2>
      </Classic>
      <Flavors>
        <h2>Flavors</h2>
      </Flavors>
    </Wrapper>
  );
};

export default Pringles;