import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background: grey;

  @keyframes Flow {
  }
`;

const Card = styled.div`
  height: 50vh;
  width: 20vw;
  background: white;
  font-size: 1.5rem;
  background: url('https://paulbrumder.netlify.com/static/media/home.1d9446ee.jpeg');
  border-radius: 2rem;
  background-size: cover;
  background-position: 75%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #666;
  height: 51%;
  margin-top: -3%;
  clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 100%, 40% 100%, 0 50%);
  color: #f0deb4;
  border-radius: 1rem;
  overflow: hidden;
  border: white 2px solid;
  position: relative;

  div {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: -12%;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    background: #f0deb4;
    transform: scale(2.2);
    transform-origin: bottom;
    animation: top 10s 1s linear infinite;

    @keyframes top {
      0% {
        transform: scale(2.2);
      }
      100% {
        transform: scale(0);
      }
    }
  }

  p {
    margin: 0;
  }
`;

const Bottom = styled(Top)`
  background: #666;
  clip-path: polygon(40% 0, 60% 0, 100% 100%, 0% 100%);
  clip-path: polygon(40% 0, 60% 0, 100% 50%, 100% 100%, 0 100%, 0 50%);
  color: #f0deb4;
  margin-top: -1%;
  display: flex;
  flex-direction: column;

  div {
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    /* clip-path: polygon(30% 0, 70% 1%, 100% 100%, 0% 100%); */
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    transform: scale(0);
    bottom: 0;
    transform-origin: bottom;
    animation: bottom 10s 1s ease-out infinite;

    @keyframes bottom {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(2.2);
      }
    }
  }

  p {
    padding-top: 5rem;
  }

  button {
    border: none;
    background: #f0deb4;
    font-size: 1.2rem;
    /* border-radius: 1rem; */
    padding: 0.75rem 2.5rem;
    color: #555;
    transition: all 350ms ease-in-out;
    position: relative;
    margin-top: 2rem;

    &:hover {
      background: white;
      color: #555;
    }
  }
`;

const Sandglass = () => {
  return (
    <Wrapper>
      <Card>
        <Top>
          <div />
          <h2>Projects</h2>
        </Top>
        <Bottom>
          <div />
          <p>Experimentations</p>
          <button>Show me!</button>
        </Bottom>
      </Card>
    </Wrapper>
  );
};

export default Sandglass;