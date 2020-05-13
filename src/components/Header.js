import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 66px;
  display: flex;
  justify-content: center;
  border: 1px solid #dfdfdf;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Farm 51 - car builder</h1>
    </HeaderWrapper>
  );
};

export default Header;
