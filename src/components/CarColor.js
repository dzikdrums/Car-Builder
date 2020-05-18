import { CarColorWrapper, StyledImage } from '../styles/CarColorStyles';
import React, { useEffect, useState } from 'react';

import { changeSpecs } from '../redux/carsRedux';
import { connect } from 'react-redux';
import gsap from 'gsap';

const priceOption = (price) => {
  if (price === 0) return 'Included';
  else {
    return `${price} $`;
  }
};

const tl = gsap.timeline();

const CarColor = ({ colors, model, changeSpecs }) => {
  const [pickedColor, setPickedColor] = useState(colors[0][0]);

  const handleClick = (index) => {
    setPickedColor(colors[index][0]);

    changeSpecs({
      category: 'color',
      pick: colors[index][0].color,
      price: colors[index][0].price,
    });
  };

  useEffect(() => {
    tl.from('.car-color', 2, {
      scale: 1.1,
      ease: 'expo.inOut',
    });

    setPickedColor(colors[0][0]);
    changeSpecs({
      category: 'color',
      pick: colors[0][0].color,
      price: colors[0][0].price,
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
              key={color[0].thumb}
              src={require(`../assets/${color[0].thumb}.png`)}
              alt="color thumb"
              onClick={() => handleClick(index)}
              active={pickedColor.thumb === color[0].thumb}
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
