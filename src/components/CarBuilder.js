import { NavLink, withRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  changeSpecs,
  getCars,
  getRequest,
  loadCarsRequest,
} from '../redux/carsRedux';

import CarBuilderWrapper from '../styles/CarBuilderStyles';
import CarColor from './CarColor';
import CarOption from './CarOption';
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg';
import Loader from './Loader';
import Summary from './Summary';
import { connect } from 'react-redux';

const gearboxOptionContent = {
  title: 'gearbox',
  subtitle: 'Our flawless gearboxes, designes exclusively for electric motor',
};

const engineOptionContent = {
  title: 'engine',
  subtitle:
    'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound',
};

const CarBuilder = ({
  loadCarsRequest,
  cars,
  request,
  location,
  changeSpecs,
}) => {
  const pickedModel = location.pathname.slice(-1);

  useEffect(() => {
    loadCarsRequest();
  }, [loadCarsRequest]);

  if (
    request.pending === false &&
    request.success === true &&
    cars.length > 0
  ) {
    const pickedCarRedux = {
      category: 'model',
      pick: cars[pickedModel].name,
      price: cars[pickedModel].price,
    };
    changeSpecs(pickedCarRedux);

    return (
      <CarBuilderWrapper>
        <div className="header-wrapper">
          <NavLink className="go-back" to="/">
            <LeftArrow />
            back
          </NavLink>
          <header>{cars[pickedModel].name}</header>
        </div>
        <CarColor model={pickedModel} colors={cars[pickedModel].colors} />
        <CarOption
          options={cars[pickedModel].engines}
          title={engineOptionContent.title}
          subtitle={engineOptionContent.subtitle}
        />
        <CarOption
          options={cars[pickedModel].gearbox}
          title={gearboxOptionContent.title}
          subtitle={gearboxOptionContent.subtitle}
        />
        <Summary />
      </CarBuilderWrapper>
    );
  }

  return <Loader />;
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCarsRequest: () => dispatch(loadCarsRequest()),
  changeSpecs: (specs) => dispatch(changeSpecs(specs)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CarBuilder));
