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

  //   if (scrollY > 450) {
  //     clone.style.color = 'red';
  //   } else {
  //     clone.style.color = 'white';
  //   }
  // };

  const Parallax = {
    setPin(pin, speed) {
      const scrollY = window.scrollY;
      pin = document.getElementById(pin);
      pin.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`;
    }
    // setDist(distance, setAnim) {
    //   if (distance && scrollY > distance) {
    //     setAnim();
    //   }
    // },
    // setAnim(animation) {
    //   console.log(animation);
    // }
  };

  useEffect(() => {
    init();
    window.addEventListener('scroll', function() {
      // requestAnimationFrame(Parallax);

      new Parallax.setPin('test', 0.5);
      new Parallax.setPin('clone', 0.1);
    });
  }, [Parallax, init]);
  return (
    <Wrapper>
      <h1>Test</h1>
      <h2 id="test">Test 2 Scroll</h2>
      <h2 id="clone">Test 2 Clone Comparison</h2>
      <h3>Test 3 Scroll</h3>
      <h4>Test 4 Scroll</h4>
    </Wrapper>
  );
};

export default SmoothScroll;
