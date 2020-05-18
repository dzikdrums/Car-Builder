import {
  CarOptionWrapper,
  StyledOptionButton,
} from '../styles/CarOptionStyles';
import React, { useEffect, useState } from 'react';

import EngineSpecs from './EngineSpecs';
import { changeSpecs } from '../redux/carsRedux';
import { connect } from 'react-redux';

const CarOption = ({ title, subtitle, options, changeSpecs }) => {
  const [chosenOption, setChosenOption] = useState(options[0][0]);

  const handleClick = (index) => {
    setChosenOption(options[index][0]);

    changeSpecs({
      category: title,
      pick: options[index][0].name,
      price: options[index][0].price,
    });
  };

  useEffect(() => {
    setChosenOption(options[0][0]);
    changeSpecs({
      category: title,
      pick: options[0][0].name,
      price: options[0][0].price,
    });
  }, [changeSpecs, options, title]);

  return (
    <CarOptionWrapper>
      <div className="title-wrapper">
        <h2 className="section-title">{`Select ${title}`}</h2>
        <h3 className="section-subtitle">{subtitle}</h3>
      </div>
      {title === 'engine' && <EngineSpecs option={chosenOption} />}
      {options.map((option, index) => {
        const optionFromArray = option[0];
        return (
          <StyledOptionButton
            key={optionFromArray.name}
            onClick={() => handleClick(index)}
            active={chosenOption.name === optionFromArray.name}
          >
            <span>{optionFromArray.name}</span>
            <span>{optionFromArray.price} $</span>
          </StyledOptionButton>
        );
      })}
    </CarOptionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSpecs: (specs) => dispatch(changeSpecs(specs)),
});

export default connect(null, mapDispatchToProps)(CarOption);
