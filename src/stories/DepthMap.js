import React, {useEffect} from 'react';
import * as PIXI from 'pixi.js'
import IronMan from '../images/iron-man.jpg';
import IronManDp from '../images/iron-man-dp.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const DepthMap = () => {
  useEffect(() => {
    const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    document.querySelector("#canvas").appendChild(app.view);
  
    const img = new PIXI.Sprite.from(IronMan);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);
  
    const depthMap = new PIXI.Sprite.from(IronManDp);
    depthMap.width = window.innerWidth;
    depthMap.height = window.innerHeight;
    app.stage.addChild(depthMap);
  
    const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
  
    window.onmousemove = function (e) {
      displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
      displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
    };
  })
  
  return(
    <Wrapper id="canvas" />
  )
}

export default DepthMap