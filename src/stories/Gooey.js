import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  filter: blur(10px) contrast(15);

  div {
    height: 5rem;
    width: 5rem;
    background: #000;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: gooey-1 ease-in-out 3.5s infinite;

    &:nth-child(2) {
      left: 70%;
      animation: gooey-2 ease-in-out 3.5s infinite;
    }
  }

  @keyframes gooey-1 {
    0% {
      left: 30%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 30%;
    }
  }
  
  @keyframes gooey-2 {
    0% {
      left: 70%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 70%;
    }
  }
`;

const Gooey = () => {
  console.log("fourchette");
  return(
    <Wrapper>
      <div/>
      <div/>
    </Wrapper>
  )
}

export default Gooey