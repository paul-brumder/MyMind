import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  color: white;

  h1 {
    font-size: 30rem;
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Classic = styled.div`
  background: blue;
  width: 50vw;
  height: 100vh;
  float: left;
`;

const Flavors = styled(Classic)`
  background: red;
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