import React, {useEffect, useRef} from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Image from "../components/image"
import SEO from "../components/seo"

const Wrapper = styled.div`
  color: white;
  background: linear-gradient(to right,#f2709c,#ff9472);
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    z-index: 10;
  }
`;

const Buttons = styled.div`
  a {
    width: 2rem;
    height: 2rem;
    background: white;
    display: block;
    position: absolute;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
    z-index: 10;
    
    &::before {
      content: "";
      width: 4rem;
      height: 4rem;
      // background: #999;
      border: 2px solid white;
      box-sizing: border-box;
      position: absolute;
      top: -1rem;
      left: -1rem;
      z-index: -1;
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
    
    &:hover {
      transform: scale(1.4);
      border: 0px;
      
      &::before {
        border: 2px solid white;
        transform: scale(0.85);
      }
    }
    
    &:nth-child(1) {
      background-color: #FFEB3B;
      top: 30vh;
      left: 30vw;
    }
    &:nth-child(2) {
      background-color: #AED581;
      top: 40vh;
      right: 25vw;
    }
    &:nth-child(3) {
      background-color: #4fc3f7;
      bottom: 20vh;
      right: 40vw;
    }
  }
`;

const IndexPage = () => {
  const test = useRef(null);

  useEffect(() => {
    console.log("hello", test.current.offsetTop);
  });
  return (
    <Wrapper>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Blog.</h1>
      <Image />
      <Buttons ref={test}>
        <Link to="/page-2/" />
        <Link to="/page-2/" />
        <Link to="/page-2/" />
      </Buttons>
    </Wrapper>
  )
}

export default IndexPage
