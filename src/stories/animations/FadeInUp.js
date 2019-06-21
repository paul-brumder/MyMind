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
    font-size: 1.6rem;
    opacity: 0;
    animation: FadeInUp 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
  }

  @keyframes FadeInUp {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FadeInUp = () => {
  return (
    <Wrapper>
      <p>Ceci est un texte fictif.</p>
      <p>Pourquoi n'ai-je donc pas utilisé le Lorem Ipsum ?</p>
      <p>C'est pour attirer tout simplement ton attention sur ce texte inutile.</p>
      <p>Mais pour la peine, je te souhaite une excellente journée !</p>
    </Wrapper>
  );
};

export default FadeInUp;
