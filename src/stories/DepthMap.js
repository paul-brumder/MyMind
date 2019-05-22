import React, { useState, useEffect } from 'react';
import * as PIXI from 'pixi.js'
import IronMan from '../images/iron-man.jpg';
import IronManDp from '../images/iron-man-dp.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const DepthMap = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    
    const app = new PIXI.Application({width: width, height: height});
    const canvas = document.querySelector("#canvas");
    if(canvas.children[0]) {
      canvas.removeChild(canvas.children[0]);
      canvas.appendChild(app.view);
    } else {
      canvas.appendChild(app.view);
    }

    // console.log(test);
  
    const img = new PIXI.Sprite.from(IronMan);
    img.width = width;
    img.height = height;
    app.stage.addChild(img);
  
    const depthMap = new PIXI.Sprite.from(IronManDp);
    depthMap.width = width;
    depthMap.height = height;
    app.stage.addChild(depthMap);
  
    const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
  
    window.onmousemove = function (e) {
      displacementFilter.scale.x = (width / 2 - e.clientX) / 20;
      displacementFilter.scale.y = (height / 2 - e.clientY) / 20;
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [height, width])
  
  return(
    <Wrapper id="canvas" />
  )
}

export default DepthMap