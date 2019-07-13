import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background: grey;

  @keyframes Flow {
  }
`;

const Card = styled.div`
  height: 50vh;
  width: 20vw;
  background: white;
  border-radius: 10rem;
  font-size: 1.5rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0deb4;
  height: 51%;
  margin-top: -1%;
  clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 60% 100%, 40% 100%, 0 50%);
  color: #555;
  border-radius: 1rem;

  p {
    margin: 0;
  }
`;

const Bottom = styled(Top)`
  background: #666;
  clip-path: polygon(40% 0, 60% 0, 100% 100%, 0% 100%);
  clip-path: polygon(40% 0, 60% 0, 100% 50%, 100% 100%, 0 100%, 0 50%);
  color: wheat;
  margin-top: 0;
`;

const Sandglass = () => {
  return (
    <Wrapper>
      <Card>
        <Top>
          <p>Test Top</p>
        </Top>
        <Bottom>
          <p>Test Bottom</p>
        </Bottom>
      </Card>
    </Wrapper>
  );
};

export default Sandglass;