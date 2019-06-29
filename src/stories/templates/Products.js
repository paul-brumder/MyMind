import React from 'react';
import styled from 'styled-components';
import { auto } from 'eol';
// import { CSSTransition } from 'react-transition-group';
import shop from '../../images/shop.jpg';
import shop1 from '../../images/shop1.jpg';
import shop2 from '../../images/shop2.jpg';
import shop3 from '../../images/shop3.jpg';
import shop4 from '../../images/shop4.jpg';
import shop5 from '../../images/shop5.jpg';
import shop6 from '../../images/shop6.jpg';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: calc(100vw - 8rem);
  margin: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr 1fr minmax(0%, 25%);
  grid-template-areas:
    'Title Menu Menu Shop'
    'Header Header Header Header'
    'Filter Search Search Search'
    'Filter Products Products Products';

  p,
  li {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

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
    place-self: center end;
  }

  .Header {
    grid-area: Header;
    background: url(${shop}) center center;
    background-size: cover;
    border-radius: 2rem;
  }

  .Filter {
    grid-area: Filter;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;

    input {
      margin: 0 2rem 0 0;
      float: right;
    }

    [type='checkbox']:not(:checked) + label:before,
    [type='checkbox']:checked + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      width: 17px;
      height: 17px;
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  }

  .Search {
    grid-area: Search;
  }

  .Products {
    grid-area: Products;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
    padding: 0 1rem;
    text-align: center;

    & > div {
      padding: 1rem;
    }

    img {
      width: 100%;
      border-radius: 2rem;
      object-fit: cover;
      height: 150px;
    }
  }
`;

const Button = styled.button`
  border: 1.5px solid white;
  background: #f8ef90;
  padding: 1rem 2.5rem;
  color: #444;
  border-radius: 5rem;
  transition: all 350ms ease-in-out;
  position: relative;

  &:hover {
    background: #824e46;
    color: white;
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
      <div className="Shop">
        <Button>Buy</Button>
      </div>
      <div className="Header" />
      <div className="Filter">
        <h2>Find your flavor</h2>
        <h3>Filter by:</h3>
        <div>
          <input type="checkbox" value="item1" name="coffee" />
          <label htmlFor="item1">item</label>
        </div>
        <div>
          <input type="checkbox" value="item2" name="coffee" />
          <label htmlFor="item2">item</label>
        </div>
        <div>
          <input type="checkbox" value="item3" name="coffee" />
          <label htmlFor="item3">item</label>
        </div>
        <div>
          <input type="checkbox" value="item4" name="coffee" />
          <label htmlFor="item4">item</label>
        </div>
        <div>
          <input type="checkbox" value="item5" name="coffee" />
          <label htmlFor="item5">item</label>
        </div>
      </div>
      <div className="Search" />
      <div className="Products">
        <div>
          <img src={shop1} alt="shop1" />
          <h3>Coffee 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum
            natus quod illum eaque velit! Optio magni adipisci quisquam doloremque.
            Natus tenetur fuga earum quam deserunt corporis modi distinctio sequi.
          </p>
        </div>
        <div>
          <img src={shop2} alt="shop2" />
          <h3>Coffee 2</h3>
          <p>
            Ea, quidem numquam doloribus incidunt ipsum rem veniam odio adipisci
            reiciendis delectus eos magnam sunt. Placeat beatae est quod quam saepe.
            Praesentium fugiat sunt impedit qui maxime blanditiis sed nisi?
          </p>
        </div>
        <div>
          <img src={shop3} alt="shop3" />
          <h3>Coffee 3</h3>
          <p>
            Ea iure soluta, minus unde vel nulla, harum enim est sint distinctio
            odio, voluptates illo eum rem quasi omnis non obcaecati hic magni
            repellat cum laborum dolor sed. Error, ex!
          </p>
        </div>
        <div>
          <img src={shop4} alt="shop4" />
          <h3>Coffee 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum
            natus quod illum eaque velit! Optio magni adipisci quisquam doloremque.
            Natus tenetur fuga earum quam deserunt corporis modi distinctio sequi.
          </p>
        </div>
        <div>
          <img src={shop5} alt="shop5" />
          <h3>Coffee 5</h3>
          <p>
            Ea, quidem numquam doloribus incidunt ipsum rem veniam odio adipisci
            reiciendis delectus eos magnam sunt. Placeat beatae est quod quam saepe.
            Praesentium fugiat sunt impedit qui maxime blanditiis sed nisi?
          </p>
        </div>
        <div>
          <img src={shop6} alt="shop6" />
          <h3>Coffee 6</h3>
          <p>
            Ea iure soluta, minus unde vel nulla, harum enim est sint distinctio
            odio, voluptates illo eum rem quasi omnis non obcaecati hic magni
            repellat cum laborum dolor sed. Error, ex!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
