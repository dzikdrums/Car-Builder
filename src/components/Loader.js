import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  $width: 15px;
  $height: 15px;
  $bounce_height: 30px;
  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .text {
    color: #fbae17;
    display: inline-block;
    margin-left: 5px;
    font-size: 2rem;
  }

  .bounceball {
    position: relative;
    display: inline-block;
    height: 37px;
    width: 25px;
    &:before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fbae17;
      transform-origin: 50%;
      animation: bounce 500ms alternate infinite ease;
    }
  }

  @keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      transform: scaleX(2);
    }
    35% {
      height: 15px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <div className="text">NOW LOADING</div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
