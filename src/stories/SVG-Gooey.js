import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  filter: url('#goo');
  background: #EF9A9A;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const BlobWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  filter: url('#goo');
`;

const Blob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  fill: #023F92;
  width: 30vmax;
  z-index: -1;
  animation: move 13s ease-in-out infinite;
  transform-origin: 50% 50%;

  &:nth-child(2) {
    animation: move 18s ease-in-out reverse infinite;
  }

  @keyframes move {
    0%   { transform: scale(1)   translate(10px, -30px); }
    38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
    40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
    78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(10px, -30px); }
  }
`;

const SvgGooey = () => {
  return(
    <Wrapper>
      <BlobWrapper>
        <Blob>
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </Blob>
        <Blob>
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </Blob>
      </BlobWrapper>
    </Wrapper>
  )
}

export default SvgGooey