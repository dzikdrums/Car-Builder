import { media } from '../utils';
import styled from 'styled-components';

const CarBuilderWrapper = styled.div`
  ${media.tablet`
    width: 70%;
    margin: 0 auto;
  `};

  ${media.desktop`
    width: 50%;
    margin: 0 auto;
  `};
  .header-wrapper {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .go-back {
      position: absolute;
      left: 10px;
      top: 28px;
      color: black;
      font-size: 1.4rem;
      font-weight: 400;
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
      }
    }
    header {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export default CarBuilderWrapper;
