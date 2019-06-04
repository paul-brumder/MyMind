import React, {useEffect} from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const BgImage = styled(Img)`
  perspective: 30px;
  position: fixed !important;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & picture {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
  }

  & img {
    object-fit: contain !important;
    transition: transform 0.5s;
  }
`;

const Image = () => { 
  useEffect(() => { 
    const bg = document.getElementById("bg");
    const test = bg.children[0].querySelectorAll("*")
    const image = bg.children[0].children;
    // const picture = image.children[2].children;
    // console.log(bg.children[0].children[2].children.style)
    console.log(image);
    
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(bg);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      image.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      window.requestAnimationFrame(updateTransformStyle(
        (mouse.y / image.offsetHeight / 2).toFixed(2),
        (mouse.x / image.offsetWidth / 2).toFixed(2)
      ));
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      image.style.transform = style;
      image.style.webkitTransform = style;
      image.style.mozTransform = style;
      image.style.msTransform = style;
      image.style.oTransform = style;
    };

    // window.requestAnimationFrame(updateTransformStyle);
  
    //-----------------------------------------
  
    bg.onmouseenter = onMouseEnterHandler;
    bg.onmouseleave = onMouseLeaveHandler;
    bg.onmousemove = onMouseMoveHandler;
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "brain.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <div id="bg">
          <BgImage fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      )}
    />
  )
}
export default Image
