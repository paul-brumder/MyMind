import React from 'react';
import styled from 'styled-components';
import * as PIXI from 'pixi.js';

const Wrapper = styled.div``;

const ImageWave = () => {
  const stage = new PIXI.Container();
  const renderer = PIXI.autoDetectRenderer(512, 512);
  const loader = new PIXI.Loader();
  document.body.appendChild(renderer.view);

  // load assets
  loader
    .add('https://i.imgur.com/M0SKsEE.jpg')
    .add('https://www.fariskassim.com/stage/learn/pixi/circ_ripple/map.png')
    .load(setup);

  var ripples = [];

  function setup() {
    // background
    var bg = new PIXI.Sprite(
      loader.resources['https://i.imgur.com/M0SKsEE.jpg'].texture
    );
    bg.anchor.set(0.5);
    bg.scale.set(0.6);
    bg.position.set(renderer.view.width / 2, renderer.view.height / 2);
    stage.addChild(bg);

    // New ripple each time mouseenter
    renderer.view.addEventListener(
      'mouseenter',
      function(ev) {
        ripples.push(new Ripple(ev.clientX, ev.clientY));
        stage.filters = ripples.map(function(f) {
          return f.filter;
        });
      },
      false
    );

    gameLoop();
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    // update ripples
    for (var i = 0; i < ripples.length; i++) {
      ripples[i].update();
    }

    renderer.render(stage);
  }

  function Ripple(x, y) {
    // sprite
    this.sprite = new PIXI.Sprite(
      loader.resources[
        'https://www.fariskassim.com/stage/learn/pixi/circ_ripple/map.png'
      ].texture
    );
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(x, y);
    this.sprite.scale.set(0.1);
    stage.addChild(this.sprite);
    // filter
    this.filter = new PIXI.filters.DisplacementFilter(this.sprite);
  }

  Ripple.prototype.update = function() {
    this.sprite.scale.x += 0.025;
    this.sprite.scale.y += 0.025;
  };
  return <Wrapper />;
};

export default ImageWave;
