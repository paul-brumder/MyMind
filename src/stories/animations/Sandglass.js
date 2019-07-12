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

  @keyframes Flow {
  }
`;

const Card = styled.div`
  height: 50vh;
  width: 20vw;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0deb4;
  height: 50%;

  p {
    margin: 0;
  }
`;

const Bottom = styled(Top)`
  background: #666;
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