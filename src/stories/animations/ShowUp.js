import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow: hidden;
  text-align: center;

  p {
    font-size: 2.2rem;
    line-height: 1.5;
  }

  p > span {
    overflow: hidden;
    display: block;

    &:nth-child(2) span {
      animation-delay: 0.2s;
    }
    &:nth-child(3) span {
      animation-delay: 0.4s;
    }
    &:nth-child(4) span {
      animation-delay: 0.6s;
    }
  }

  span > span {
    display: block;
    transform: translate3d(0, 101%, 0);
    /* animation: ShowUp 1s cubic-bezier(0.78, 0.11, 0.17, 1.52) forwards; */
    animation: ShowUp 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  }

  @keyframes ShowUp {
    0% {
      transform: translate3d(0, 101%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const ShowUp = () => {
  return (
    <Wrapper>
      <p>
        <span>
          <span>Ceci est un texte fictif.</span>
        </span>
        <span>
          <span>Pourquoi n'ai-je donc pas utilisé le Lorem Ipsum ?</span>
        </span>
        <span>
          <span>
            C'est pour attirer tout simplement ton attention sur ce texte inutile.
          </span>
        </span>
        <span>
          <span>Mais pour la peine, je te souhaite une excellente journée !</span>
        </span>
      </p>
    </Wrapper>
  );
};

export default ShowUp;
