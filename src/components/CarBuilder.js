import React, { useEffect, useState } from 'react';
import {
  changeColor,
  changeModel,
  getCars,
  getRequest,
  loadCarsRequest,
} from '../redux/carsRedux';

import CarColor from './CarColor';
import CarOption from './CarOption';
import { cars } from '../data';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const CarBuilderWrapper = styled.div`
  position: absolute;
  top: 20px;
  padding-bottom: 50px;
`;

const gearboxOptionContent = {
  title: 'Select Gearbox',
  subtitle: 'Our flawless gearboxes, designes exclusively for electric motor',
};

const engineOptionContent = {
  title: 'Select Engine',
  subtitle:
    'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound',
};

const CarBuilder = ({
  loadCarsRequest,
  cars,
  request,
  location,
  changeColor,
  changeModel,
}) => {
  const pickedModel = location.pathname.slice(-1);
  const [chosenModel, setChosenModel] = useState(pickedModel);

  useEffect(() => {
    loadCarsRequest();
  }, [loadCarsRequest]);

  if (
    request.pending === false &&
    request.success === true &&
    cars.length > 0
  ) {
    const pickedCarRedux = {
      pick: cars[chosenModel].name,
      price: cars[chosenModel].price,
    };
    changeModel(pickedCarRedux);

    return (
      <CarBuilderWrapper>
        <CarColor model={chosenModel} colors={cars[chosenModel].colors} />
        <CarOption
          options={cars[chosenModel].engines}
          title={engineOptionContent.title}
          subtitle={engineOptionContent.subtitle}
        />
        <CarOption
          options={cars[chosenModel].gearbox}
          title={gearboxOptionContent.title}
          subtitle={gearboxOptionContent.subtitle}
        />
      </CarBuilderWrapper>
    );
  }

  return <h1>Hello</h1>;
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCarsRequest: () => dispatch(loadCarsRequest()),
  changeColor: (specs) => dispatch(changeColor(specs)),
  changeModel: (specs) => dispatch(changeModel(specs)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CarBuilder));
