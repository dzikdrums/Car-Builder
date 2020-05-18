import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;

  .specWrapper {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;

    span {
      flex: 1;
      margin-bottom: 10px;

      &.category {
        font-weight: 700;
        letter-spacing: 0.6px;
      }

      &.pick {
        flex: 2;
      }

      &.price,
      &.pick {
        text-align: right;
        font-weight: 400;
      }
    }
  }

  .totalPrice {
    margin: 10px 0;
    font-size: 1.6rem;
    font-weight: 400;
    display: flex;
    justify-content: flex-end;

    .totalPrice_title {
      font-weight: 700;
      margin-right: 25px;
    }
  }
`;
