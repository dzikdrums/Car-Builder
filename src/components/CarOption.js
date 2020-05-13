import React, { useState } from 'react';
import { changeEngine, changeGearbox } from '../redux/carsRedux';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';

const CarOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vw;

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

const StyledOptionButton = styled.button`
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

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #007fff;
      color: black;
    `};
`;

const CarOption = ({
  title,
  subtitle,
  options,
  changeEngine,
  changeGearbox,
}) => {
  const [chosenOption, setChosenOption] = useState(options[0][0]);

  const handleClick = (index) => {
    setChosenOption(options[index][0]);

    if (title === 'Select Engine') {
      const pickedEngineRedux = {
        pick: options[index][0].name,
        price: options[index][0].price,
      };
      changeEngine(pickedEngineRedux);
    } else {
      const pickedGearboxRedux = {
        pick: options[index][0].name,
        price: options[index][0].price,
      };
      changeEngine(pickedGearboxRedux);
    }
  };

  return (
    <CarOptionWrapper>
      <div className="title-wrapper">
        <h2 className="section-title">{title}</h2>
        <h3 className="section-subtitle">{subtitle}</h3>
      </div>
      {options.map((option, index) => {
        const optionFromArray = option[0];
        return (
          <StyledOptionButton
            active="true"
            key={optionFromArray.name}
            onClick={() => handleClick(index)}
            active={chosenOption.name === optionFromArray.name}
          >
            <span>{optionFromArray.name}</span>
            <span>$ {optionFromArray.price}</span>
          </StyledOptionButton>
        );
      })}
    </CarOptionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeEngine: (specs) => dispatch(changeEngine(specs)),

  changeGearbox: (specs) => dispatch(changeGearbox(specs)),
});

export default connect(null, mapDispatchToProps)(CarOption);
