import styled from 'styled-components';

const EngineSpecsWrapper = styled.div`
  width: 100%;
  padding: 0 2vw;
  margin-bottom: 20px;
  ul {
    display: flex;
    width: 100%;
    padding: 0;
    height: 70px;
    align-items: center;

    .acceleration,
    .speed {
      border-right: 1px solid #ddd;
    }

    li {
      list-style: none;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .spec-value {
        font-size: 3rem;
        margin-bottom: 8px;

        .spec-value-unit {
          font-size: 1.6rem;
        }
      }
      .spec-description {
        font-size: 1.6rem;
        color: #666;
        font-weight: 500;
      }
    }
  }
`;

export default EngineSpecsWrapper;
