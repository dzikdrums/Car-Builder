import styled, { css } from 'styled-components';

export const CarLookOptionWrapper = styled.section`
  color: black;
  width: 100;
  margin-bottom: 30px;
  display: block;

  .car-color {
    width: 100%;
    height: 100%;
  }

  .title-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    h2 {
      margin-top: 5px;
      font-size: 2rem;
      font-weight: 500;
    }
  }

  .color-pick-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .selected-option-detail {
      font-size: 1.4rem;
      letter-spacing: 0.3px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .selected-option-name {
        line-height: 24px;
        font-weight: 700;
        margin-right: 10px;
      }
      .selected-option-price {
        color: #666;
        font-weight: 300;
      }

      .selected-option-description {
        color: #666;
        font-weight: 300;
        margin: 0 0 10px;
      }
    }
  }
`;

export const StyledImage = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-bottom: 10px;

  ${({ active }) =>
    active &&
    css`
      border: 2px solid rgb(0, 127, 255);
      border-radius: 100px;
      padding: 2px;
    `};
`;
