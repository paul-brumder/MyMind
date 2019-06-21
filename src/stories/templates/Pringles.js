import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

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

  .content-enter {
    opacity: 0.01;
  }
  .content-enter-active {
    opacity: 1;
    transition: opacity 350ms 350ms ease-in-out;
    position: absolute;
  }
  .content-exit {
    opacity: 1;
  }
  .content-exit-active {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
    position: absolute;
  }

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

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
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
  width: ${props => (props.classic ? '90vw' : props.flavor ? '10vw' : '50vw')};
  height: 100vh;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.slide === 'classic' ? 'scale(1.2)' : 'translateX(-10%)'};
  transition: all 0.8s cubic-bezier(0.42, 0, 0.43, 1.09);
  flex-direction: column;

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
  width: ${props => (props.flavor ? '90vw' : props.classic ? '10vw' : '50vw')};
  transform: ${props =>
    props.flavor
      ? 'scale(1) translateX(0%)'
      : props.animation === 'flavor'
      ? 'scale(1.2)'
      : 'translateX(10%)'};
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: 1.5px solid white;
  background: transparent;
  padding: 1rem 3rem;
  color: white;
  border-radius: 5rem;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  position: relative;

  &:hover {
    background: white;
    color: #555;
  }
`;

const Content = styled.div`
  margin: ${props => (props.classic ? ' 0 0 0 10vw' : '0 10vw 0 0')};
  text-align: center;
  position: absolute;

  p {
    opacity: 0;
    animation: test 1s ease-in-out forwards;
  }

  @keyframes test {
    0% {
      opacity: 0;
      transform: translateY(20vh);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const Pringles = () => {
  const [choice, setChoice] = useState('classic');
  const [classic, setClassic] = useState(false);
  const [flavor, setFlavor] = useState(false);

  // const toggleContent = () => {
  //   setClassic(!classic);
  //   setFlavor(!flavor);
  // };

  return (
    <Wrapper animation={choice}>
      <Brand>
        <span>C</span>
        <span>hips</span>
      </Brand>
      <Menu />
      <h1>Choose</h1>
      <Classic
        onMouseOver={() => setChoice('classic')}
        slide={choice}
        classic={classic}
        flavor={flavor}
      >
        <CSSTransition
          in={!classic}
          timeout={700}
          classNames="content"
          unmountOnExit
        >
          <Product>
            <h2>Classic</h2>
            <img src={classicPic} alt="classic" />
            <Button onClick={() => setClassic(true)}>I have good taste!</Button>
          </Product>
        </CSSTransition>
        <CSSTransition in={classic} timeout={700} classNames="content" unmountOnExit>
          <Content animation={classic}>
            <h3>Tu es l'égal des dieux !</h3>
            <p>
              Contrairement à la plèbe, tu disposes d'un palais développé, tu sais ce
              qui est bon pour toi et ceux qui t'entourent.
            </p>
            <p>
              Tu n'es pas comme la majorité des gens, tu es un être unique ! Et même
              si ton génie te paraît incompris n'oublie jamais ces mots de François
              René de Chateaubriand
            </p>
            <p>“Le goût est le bon sens du génie.”</p>
            <Button onClick={() => setClassic(false)}>Close</Button>
          </Content>
        </CSSTransition>
      </Classic>
      <Flavors
        onMouseOver={() => setChoice('flavor')}
        animation={choice}
        flavor={flavor}
        classic={classic}
      >
        <CSSTransition in={!flavor} timeout={700} classNames="content" unmountOnExit>
          <Product>
            <h2>Flavors</h2>
            <img src={flavorPic} alt="flavor" />
            <Button onClick={() => setFlavor('flavor')}>I like bad breath!</Button>
          </Product>
        </CSSTransition>
        <CSSTransition in={flavor} timeout={700} classNames="content" unmountOnExit>
          <Content>
            <h3>Quelle faute de goût...</h3>
            <p>
              Tu es cette personne qui repousse les gens, tu sais, comme ce
              professeur qui venait te faire la morale très proche de ton visage à 8h
              le matin avec son haleine fétide.
            </p>
            <p>
              N'espère pas non plus séduire, au mieux tu finiras avec un de tes
              semblables, c'est à dire une fusion entre goût barbecue et oignon
              bechamèle entre vos lèvres, Tchernobyl à côté c'est de la rigolade.
            </p>
            <p>
              Si tu avais réellement du goût tu choisirais des Doritos à tremper dans
              une sauce piquante, mais comme le bon prolo que tu es, tu choisis la
              facilité et le bas prix, pas étonnant qu'on parle de remontée d'égouts
              quand tu entres dans la pièce.
            </p>
            <p>Bref, tu es une personne détestable.</p>
            <Button onClick={() => setFlavor(false)}>Close</Button>
          </Content>
        </CSSTransition>
      </Flavors>
    </Wrapper>
  );
};

export default Pringles;
