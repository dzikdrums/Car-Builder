import {
  CarLookOptionWrapper,
  StyledImage,
} from '../styles/CarLookOptionStyles';
import React, { useEffect, useState } from 'react';

import InteriorDetails from './InteriorDetails';
import { changeSpecs } from '../redux/carsRedux';
import { connect } from 'react-redux';

const priceOption = (price) => {
  console.log(price);
  if (price === 0) return 'Included';
  else {
    return `${price} $`;
  }
};

const CarLookOption = ({ options, model, changeSpecs, category, title }) => {
  const [pickedOption, setPickedOption] = useState(options[0]);

  const handleClick = (index) => {
    setPickedOption(options[index]);

    changeSpecs({
      category: category,
      pick: options[index].name,
      price: options[index].price,
    });
  };

  useEffect(() => {
    setPickedOption(options[0]);
    changeSpecs({
      category: category,
      pick: options[0].name,
      price: options[0].price,
    });
  }, [changeSpecs, options, model, category]);

  return (
    <CarLookOptionWrapper>
      <div className="img-wrapper">
        <img
          className="car-color"
          src={require(`../assets/${pickedOption.picture}`)}
          alt="car color"
        />
      </div>
      <div className="title-wrapper">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="color-pick-wrapper">
        <div>
          {options.map((option, index) => (
            <StyledImage
              key={option.thumb}
              src={require(`../assets/${option.thumb}`)}
              alt="color thumb"
              onClick={() => handleClick(index)}
              active={pickedOption.thumb === option.thumb}
            />
          ))}
        </div>
        <div className="selected-option-detail">
          <div>
            <span className="selected-option-name">{pickedOption.name}</span>
            <span className="selected-option-price">
              {priceOption(pickedOption.price)}
            </span>
          </div>
          {pickedOption.description && (
            <p className="selected-option-description">
              {pickedOption.description}
            </p>
          )}
        </div>
      </div>
      {category === 'interior' && <InteriorDetails />}
    </CarLookOptionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSpecs: (specs) => dispatch(changeSpecs(specs)),
});

export default connect(null, mapDispatchToProps)(CarLookOption);
