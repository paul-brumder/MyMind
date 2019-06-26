import React from 'react';
import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: calc(100vw - 6rem);
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr 1fr minmax(20%, auto);
  grid-template-areas:
    'Title Menu Menu Shop'
    'Header Header Header Header'
    'Filter Search Search Search'
    'Filter Products Products Products';

  .Title {
    grid-area: Title;
    place-self: center start;
    font-size: 2.5rem;
  }

  .Menu {
    grid-area: Menu;
    align-self: center;

    ul {
      width: 100%;
      padding: 0;
      display: inline-flex;
      justify-content: space-around;
    }
  }

  .Shop {
    grid-area: Shop;
  }

  .Header {
    grid-area: Header;
    background: red;
    border-radius: 3rem;
  }

  .Filter {
    grid-area: Filter;
  }

  .Search {
    grid-area: Search;
  }

  .Products {
    grid-area: Products;
    background: blue;
  }
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

const Products = () => {
  return (
    <Wrapper>
      <div className="Title">Coffee</div>
      <div className="Menu">
        <ul>
          <li>Shop</li>
          <li>Locations</li>
          <li>Flavors</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="Shop" />
      <div className="Header" />
      <div className="Filter" />
      <div className="Search" />
      <div className="Products" />
    </Wrapper>
  );
};

export default Products;
