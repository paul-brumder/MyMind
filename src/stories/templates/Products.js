import React from 'react';
import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr 1fr minmax(20%, auto);
  grid-template-areas:
    'Title Menu Menu Menu'
    'Header Header Header Header'
    'Filter Search Search Search'
    'Filter Products Products Products';

  .Title {
    grid-area: Title;
    place-self: center center;
  }

  .Menu {
    grid-area: Menu;
  }

  .Header {
    grid-area: Header;
    background: red;
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

const Products = () => {
  return (
    <Wrapper>
      <div className="Title">Coffee</div>
      <div className="Menu" />
      <div className="Header" />
      <div className="Filter" />
      <div className="Search" />
      <div className="Products" />
    </Wrapper>
  );
};

export default Products;
