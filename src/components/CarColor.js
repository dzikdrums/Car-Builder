import { CarColorWrapper, StyledImage } from '../styles/CarColorStyles';
import React, { useEffect, useState } from 'react';

import { changeSpecs } from '../redux/carsRedux';
import { connect } from 'react-redux';

const priceOption = (price) => {
  if (price === 0) return 'Included';
  else {
    return `${price} $`;
  }
};

const CarColor = ({ colors, model, changeSpecs }) => {
  const [pickedColor, setPickedColor] = useState(colors[0]);

  const handleClick = (index) => {
    setPickedColor(colors[index]);

    changeSpecs({
      category: 'color',
      pick: colors[index].color,
      price: colors[index].price,
    });
  };

  useEffect(() => {
    setPickedColor(colors[0]);
    changeSpecs({
      category: 'color',
      pick: colors[0].color,
      price: colors[0].price,
    });
  }, [changeSpecs, colors, model]);

  return (
    <CarColorWrapper>
      <div className="img-wrapper">
        <img
          className="car-color"
          src={require(`../assets/${pickedColor.picture}.png`)}
          alt="car color"
        />
      </div>
      <div className="title-wrapper">
        <h2 className="section-title">Select color</h2>
      </div>
      <div className="color-pick-wrapper">
        <div>
          {colors.map((color, index) => (
            <StyledImage
              key={color.thumb}
              src={require(`../assets/${color.thumb}.png`)}
              alt="color thumb"
              onClick={() => handleClick(index)}
              active={pickedColor.thumb === color.thumb}
            />
          ))}
        </div>
        <div className="selected-option-detail">
          <span className="selected-option-description">
            {pickedColor.description}
          </span>
          <span className="selected-option-price">
            {priceOption(pickedColor.price)}
          </span>
        </div>
      </div>
    </CarColorWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSpecs: (specs) => dispatch(changeSpecs(specs)),
});

export default connect(null, mapDispatchToProps)(CarColor);
