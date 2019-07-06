import React from 'react';
import styled from 'styled-components';
import { relative } from 'path';
import { auto } from 'eol';
// import { CSSTransition } from 'react-transition-group';
import shop from '../../images/shop-draw.jpg';
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
  li,
  button {
    font-size: 1.2rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
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

    li:nth-child(1) {
      font-weight: 700;
    }
  }

  .Shop {
    grid-area: Shop;
    place-self: center end;

    span {
      padding: 0 2rem;
    }
  }

  .Header {
    grid-area: Header;
    /* background: url(${shop}) center center; */
    /* background-size: cover; */
    background: #fcd7cd;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    div {
      width: 35%;
      z-index: 10;
      box-sizing: border-box;
      padding: 0 2rem 0 8rem;
      justify-content: center;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    img {
      height: 100%;
      position: absolute;
      right: 8rem;
      top: 0;
      transform: scale(1.5);
    }
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

    [type='checkbox']:not(:checked),
    [type='checkbox']:checked {
      position: absolute;
      left: -9999px;
    }

    /* on prépare le label */
    [type='checkbox']:not(:checked) + label,
    [type='checkbox']:checked + label {
      position: relative; /* permet de positionner les pseudo-éléments */
      padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
      cursor: pointer; /* affiche un curseur adapté */
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

    [type='checkbox']:not(:checked) + label:after,
    [type='checkbox']:checked + label:after {
      content: '✔';
      position: absolute;
      top: 0;
      left: 4px;
      font-size: 14px;
      color: #09ad7e;
      transition: all 0.2s; /* on prévoit une animation */
    }
    /* Aspect si "pas cochée" */
    [type='checkbox']:not(:checked) + label:after {
      opacity: 0; /* coche invisible */
      transform: scale(0); /* mise à l'échelle à 0 */
    }
    /* Aspect si "cochée" */
    [type='checkbox']:checked + label:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }

    [type='checkbox']:disabled:not(:checked) + label:before,
    [type='checkbox']:disabled:checked + label:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
    /* styles de la coche (si cochée/désactivée) */
    [type='checkbox']:disabled:checked + label:after {
      color: #999;
    }
    /* on style aussi le label quand désactivé */
    [type='checkbox']:disabled + label {
      color: #aaa;
    }

    /* aspect au focus de l'élément */
    [type='checkbox']:checked:focus + label:before,
    [type='checkbox']:not(:checked):focus + label:before {
      border: 1px dotted blue;
    }
  }

  .Search {
    grid-area: Search;
    align-self: center;
    position: relative;

    input {
      padding: 1rem 3rem;
      border-radius: 1rem;
      border: none;
      width: 100%;
      box-sizing: border-box;
      background: #f8f8f8;
    }

    i {
      position: absolute;
      top: 1.2rem;
      left: 1rem;
      font-size: 1.2rem;
    }
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
  padding: 1rem 2rem;
  color: #444;
  border-radius: 5rem;
  transition: all 350ms ease-in-out;
  position: relative;

  &:hover {
    background: #824e46;
    color: white;
  }
`;

const Bag = styled(Button)`
  padding: 0.8rem;
`;

const Products = () => {
  return (
    <Wrapper>
      <div className="Title">NoSleep</div>
      <div className="Menu">
        <ul>
          <li>Shop</li>
          <li>Locations</li>
          <li>Flavors</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="Shop">
        <Bag><i class="fas fa-store" /></Bag>
        <span>Log in</span>
        <Button>Sign Up</Button>
      </div>
      <div className="Header">
        <div>
          <h1>
            More
            <br />
            Energy
          </h1>
          <p>
            Find the best ways to stay active, like drinking every coffees we sell.
            We even have intravenous solution to be more productive. Being a zombie
            will suit you !
          </p>
        </div>
        <img src={shop} alt="shop" />
      </div>
      <div className="Filter">
        <h2>
          Coffees <i class="fas fa-coffee" />
        </h2>
        <h3>Filter by:</h3>
        <div>
          <input type="checkbox" id="item1" name="coffee" />
          <label htmlFor="item1">Dark Coffee</label>
        </div>
        <div>
          <input type="checkbox" id="item2" name="coffee" />
          <label htmlFor="item2">Sugar Daddy</label>
        </div>
        <div>
          <input type="checkbox" id="item3" name="coffee" />
          <label htmlFor="item3">John Coffee</label>
        </div>
        <div>
          <input type="checkbox" id="item4" name="coffee" />
          <label htmlFor="item4">Red Bull w/ Coffee</label>
        </div>
        <div>
          <input type="checkbox" id="item5" name="coffee" />
          <label htmlFor="item5">The Intravenous One</label>
        </div>
      </div>
      <div className="Search">
        <i className="fas fa-search" />
        <input placeholder="What do you want !?" type="text" />
      </div>
      <div className="Products">
        <div>
          <img src={shop1} alt="shop1" />
          <h3>Coffee 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum
            natus quod illum eaque velit!
          </p>
        </div>
        <div>
          <img src={shop2} alt="shop2" />
          <h3>Coffee 2</h3>
          <p>
            Ea, quidem numquam doloribus incidunt ipsum rem veniam odio adipisci
            reiciendis delectus eos magnam sunt.
          </p>
        </div>
        <div>
          <img src={shop3} alt="shop3" />
          <h3>Coffee 3</h3>
          <p>
            Ea iure soluta, minus unde vel nulla, harum enim est sint distinctio
            odio, voluptates illo eum.
          </p>
        </div>
        <div>
          <img src={shop4} alt="shop4" />
          <h3>Coffee 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum
            natus quod illum eaque velit!
          </p>
        </div>
        <div>
          <img src={shop5} alt="shop5" />
          <h3>Coffee 5</h3>
          <p>
            Ea, quidem numquam doloribus incidunt ipsum rem veniam odio adipisci
            reiciendis delectus eos magnam sunt.
          </p>
        </div>
        <div>
          <img src={shop6} alt="shop6" />
          <h3>Coffee 6</h3>
          <p>
            Ea iure soluta, minus unde vel nulla, harum enim est sint distinctio
            odio, voluptates illo eum rem quasi omnis.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
