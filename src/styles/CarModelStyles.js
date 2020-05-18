import styled, { css } from 'styled-components';

import { media } from '../utils';

export const CarModelWrapper = styled.section`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;

  .title-container {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 140px;
    font-size: 2rem;
    overflow: hidden;
    height: 60px;
    color: white;

    ${media.tablet`
  top: 100px;
  `}

    .rollout {
      transform: translate(0, -60px);
    }
    .title {
      font-weight: 300;
      letter-spacing: 2px;
      opacity: 0;
    }
  }

  .carousel {
    position: absolute;
    bottom: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;

    ${media.tablet`
  bottom: 90px;
  `}

    ul {
      display: flex;
      list-style: none;
      margin: 5px;
      padding: 0;

      li {
        margin: 0 10px;
      }
    }
  }

  .button-container {
    position: absolute;
    bottom: 80px;
    width: 100%;
    display: flex;
    justify-content: center;

    ${media.tablet`
    bottom: 30px;
  `}

    .model-pick {
      width: 80vw;
      max-width: 400px;
      height: 40px;
      z-index: 100;
      background-color: white;
      border-radius: 30px;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 0;
      outline: none;

      a {
        color: black;
      }
    }
  }
`;

export const HeroImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;

  ${media.middle`
  width: auto;
  transform-origin: 50% 60%;
  `}

  ${media.tablet`
  transform: scale(1.15);
  `}

  ${media.desktop`
  transform: scale(1.45);
  `}
`;

export const CarouselIndicator = styled.button`
  padding: 5px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 100%;
  outline: none;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `};
`;
