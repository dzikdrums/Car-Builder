import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { changeColor } from '../redux/carsRedux';
import { connect } from 'react-redux';

const CarColorWrapper = styled.section`
  color: black;
  height: 40vh;
  width: 100;

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

      .selected-option-description {
        line-height: 24px;
        font-weight: 700;
        margin-right: 10px;
      }
      .selected-option-price {
        color: #666;
        font-weight: 300;
      }
    }
  }
`;

const StyledImage = styled.img`
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

const priceOption = (price) => {
  if (price === 0) return 'Included';
  else {
    return `$ ${price}`;
  }
};

const CarColor = ({ colors, model, changeColor }) => {
  const [pickedColor, setPickedColor] = useState(colors[0][0]);

  const handleClick = (index) => {
    setPickedColor(colors[index][0]);

    const pickedColorRedux = {
      pick: colors[index][0].color,
      price: colors[index][0].price,
    };
    changeColor(pickedColorRedux);
  };

  useEffect(() => {
    setPickedColor(colors[0][0]);
  }, [colors, model]);

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
        <h2 className="section-title">Select Color</h2>
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
  changeColor: (specs) => dispatch(changeColor(specs)),
});

export default connect(null, mapDispatchToProps)(CarColor);
