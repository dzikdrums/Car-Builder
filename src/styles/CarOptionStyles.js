import styled, { css } from 'styled-components';

export const CarOptionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;
    svg {
      position: absolute;
      top: 2px;
      left: 1px;
    }
  }

  .title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin-top: 5px;
      font-size: 2rem;
      font-weight: 500;
    }

    h3 {
      margin: 0 0 30px;
      color: #666;
      font-weight: 300;
      padding: 0 6vw;
      font-size: 1.4rem;
      letter-spacing: 0.4px;
      line-height: 1.6rem;
      text-align: center;
    }
  }
`;

export const StyledOptionButton = styled.button`
  width: 90%;
  padding: 12px 30px;
  border-radius: 25px;
  border: 1px solid #ddd;
  background-color: transparent;
  margin: 3px auto;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #666;
  font-weight: 700;
  outline: none;
  max-width: 400px;
  transition: border 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #007fff;
      color: black;
      transition: border 0.2s ease-in-out;
    `};
`;
