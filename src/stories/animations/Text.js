import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  p {
    font-size: 1.6rem;
    opacity: 0;
    animation: FadeInUp .3s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;

    &:nth-child(2) {
      animation-delay: .1s;
    }
    &:nth-child(3) {
      animation-delay: .2s;
    }
    &:nth-child(4) {
      animation-delay: .3s;
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

const Text = () => {
  return (
    <Wrapper>
      <p>Ceci est un texte fictif.</p>
      <p>Pourquoi n'ai-je donc pas utilisé le Lorem Ipsum ?</p>
      <p>C'est pour attirer tout simplement ton attention sur ce texte inutile.</p>
      <p>Mais pour la peine, je te souhaite une excellente journée !</p>
    </Wrapper>
  );
};

export default Text;
