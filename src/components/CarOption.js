import {
  CarOptionWrapper,
  StyledOptionButton,
} from '../styles/CarOptionStyles';
import React, { useEffect, useState } from 'react';

import EngineSpecs from './EngineSpecs';
import { ReactComponent as Tick } from '../assets/tick.svg';
import { changeSpecs } from '../redux/carsRedux';
import { connect } from 'react-redux';

const CarOption = ({
  title,
  subtitle,
  options,
  changeSpecs,
  changeFeatures,
}) => {
  const [chosenOption, setChosenOption] = useState(options[0]);
  const [chosenFeaturesNames, setChosenFeaturesNames] = useState([]);
  const [chosenFeatures, setChosenFeatures] = useState([]);

  console.log(options);

  const handleClick = (index) => {
    setChosenOption(options[index]);

    changeSpecs({
      category: title,
      pick: options[index].name,
      price: options[index].price,
    });
  };

  const handleClickFeatures = (feature, index) => {
    let filteredFeaturesNames;
    let filteredFeatures;
    if (!chosenFeaturesNames.includes(feature)) {
      filteredFeaturesNames = [...chosenFeaturesNames, feature];
      filteredFeatures = [...chosenFeatures, options[index]];
    } else {
      filteredFeaturesNames = chosenFeaturesNames.filter(
        (item) => item !== feature
      );
      filteredFeatures = chosenFeatures.filter((item) => item.name !== feature);
    }
    setChosenFeaturesNames(filteredFeaturesNames);
    setChosenFeatures(filteredFeatures);
  };

  useEffect(() => {
    setChosenOption(options[0]);
    if (title !== 'features') {
      changeSpecs({
        category: title,
        pick: options[0].name,
        price: options[0].price,
      });
    } else {
      changeSpecs({
        category: title,
        pick: chosenFeatures,
      });
    }
  }, [changeSpecs, chosenFeatures, options, title]);

  return (
    <CarOptionWrapper>
      <div className="title-wrapper">
        <h2 className="section-title">{`Select ${title}`}</h2>
        <h3 className="section-subtitle">{subtitle}</h3>
      </div>
      {title === 'engine' && <EngineSpecs option={chosenOption} />}
      {title !== 'features' &&
        options.map((option, index) => {
          return (
            <StyledOptionButton
              key={option.name}
              onClick={() => handleClick(index)}
              active={chosenOption.name === option.name}
            >
              <span>{option.name}</span>
              <span>{option.price} $</span>
            </StyledOptionButton>
          );
        })}
      {title === 'features' &&
        options.map((option, index) => {
          return (
            <StyledOptionButton
              key={option.name}
              onClick={() => handleClickFeatures(option.name, index)}
              active={chosenFeaturesNames.includes(option.name)}
            >
              {title === 'features' && (
                <i className="checkbox selected">
                  {chosenFeaturesNames.includes(option.name) && <Tick />}
                </i>
              )}
              <span>{option.name}</span>
              <span>{option.price} $</span>
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
