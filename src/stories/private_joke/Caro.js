import React from 'react';
import styled from 'styled-components';

import caro1 from '../../images/caro1.jpeg';
import caro2 from '../../images/caro2.jpg';
import caro3 from '../../images/caro3.jpg';
import caro4 from '../../images/caro4.jpg';
import caro5 from '../../images/caro5.jpg';
import caro6 from '../../images/caro6.jpg';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Hepta+Slab:400,500&display=swap');
  width: 100%;
  min-height: 100vh;
  color: white;
  font-family: 'Hepta Slab', serif;
  font-weight: 300;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #009688;
  position: relative;

  h1,
  h2 {
    position: absolute;
    z-index: 10;
  }

  h1 {
    text-transform: uppercase;
    font-size: 8rem;
  }

  h2 {
    font-size: 2rem;
  }

  h1:nth-of-type(1) {
    top: 0vh;
  }

  h1:nth-of-type(2) {
    bottom: 0;
  }

  span {
    background: url(${caro3}) center center;
    transform: rotate(90deg);
    background-size: cover;
    height: 35vw;
    width: 75vh;
  }
`;

const Alcool = styled(Header)`
  background: #4a148c;

  h2 {
    position: absolute;
    font-size: 3rem;
    margin-top: -10rem;
  }

  p {
    position: absolute;
    width: 50vw;
    top: 60vh;
    left: 8rem;
    font-size: 1.8rem;
    z-index: 20;
  }

  span {
    position: absolute;
    top: 20vh;
    right: 5rem;
    background: url(${caro2}) center center;
    background-size: cover;
    height: 25vw;
    width: 60vh;
  }
`;
const Terroir = styled(Alcool)`
  background: #ffc107;

  span {
    background: url(${caro6}) center center;
    background-size: cover;
    top: 20vh;
    left: 5rem;
  }

  p {
    position: absolute;
    width: 50vw;
    top: 60vh;
    right: 8rem;
    left: inherit;
    font-size: 1.8rem;
  }
`;

const Caro = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Caroline</h1>
        <h1>Striebig</h1>
        <h2>
          Une gamme de produits unique, réalisée dans le plus grand des calmes.
        </h2>
        <span />
      </Header>
      <Alcool>
        <h2>Une cuite toujours plus douce.</h2>
        <p>
          De la Carobelle aux bières Striebig, venez tâter ces alcools de qualité,
          brassés dans des vapeurs herbacées.
        </p>
        <span />
      </Alcool>
      <Terroir>
        <h2>Les bons produits Terroir Bonne Caro</h2>
        <p>
          De la confiture pleine de légereté ou du miel confectionné par des abeilles
          stonées, peu importe votre goût, dites adieu aux maux de ventre et
          retrouvez votre force d'antan, fini les problèmes d'épaule.
        </p>
        <span />
      </Terroir>
    </Wrapper>
  );
};

export default Caro;
