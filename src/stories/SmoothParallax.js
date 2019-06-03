import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #555;

  h2 {
    margin-top: 120vh;

    &#clone {
      margin-left: 20vw;
      margin-top: -30vh;
    }
  }

  img {
    height: 60rem;
    width: 30rem;
    border-radius: 3rem;
    float: right;
    margin-right: 15rem;
  }

  h3 {
    margin-top: 30vh;
    text-align: center;
  }

  h4 {
    margin-top: 100vh;
  }
`;

const SmoothScroll = () => {
  function init() {
    new SmoothScroll(document, 40, 15);
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document) {
      target = document.documentElement || document.body.parentNode || document.body; // cross browser support for document scrolling
    }
    let moving = false;
    let pos = target.scrollTop;
    target.addEventListener('mousewheel', scrolled, { passive: false });
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      const delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight)); // limit scrolling

      if (!moving) {
        update();
      }
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta) {
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
        } else {
          return -e.detail / 3;
        } // Firefox
      } else {
        return e.wheelDelta / 120;
      } // IE,Safari,Chrome
    }

    function update() {
      moving = true;
      const delta = (pos - target.scrollTop) / smooth;
      target.scrollTop += delta;
      if (Math.abs(delta) > 0.5) {
        requestAnimationFrame(update);
      } else {
        moving = false;
      }
    }
  }

  // const parallax = () => {
  //   // const test = document.getElementById('test');
  //   // const clone = document.getElementById('clone');
  //   const scrollY = window.scrollY;
  //   test.style.transform = `translate3d(0, ${-scrollY * 0.5}px, 0)`;
  //   clone.style.transform = `translate3d(0, ${-scrollY * 0.1}px, 0)`;
  //   if (scrollY > 450) {
  //     clone.style.color = 'red';
  //   } else {
  //     clone.style.color = 'white';
  //   }
  // };

  // const setup = options => {
  //   // const test = options.test;
  //   console.log(options);
  //   options.map(text => {
  //     text = document.getElementById(text);
  //     return console.log(text);
  //   });
  // };

  const Parallax = {
    speed: 1,
    setPin(pins) {
      const scrollY = window.scrollY;
      pins.map(pin => {
        pin = document.getElementById(pin);
        console.log(pin.speed);
        pin.style.transform = `translate3d(0, ${-scrollY * this.speed}px, 0)`;
        return console.log(pin);
      });
    }
  };

  window.addEventListener('scroll', function() {
    // requestAnimationFrame(parallax);
    // parallax();
  });

  useEffect(() => {
    init();
    Parallax.setPin(['test', 'clone']);
  });
  return (
    <Wrapper>
      <h1>Test</h1>
      <h2 id="test" speed="0.5">
        Test 2 Scroll
      </h2>
      <h2 id="clone" speed="0.1">
        Test 2 Clone Comparison
      </h2>
      <h3>Test 3 Scroll</h3>
      <h4>Test 4 Scroll</h4>
    </Wrapper>
  );
};

export default SmoothScroll;
