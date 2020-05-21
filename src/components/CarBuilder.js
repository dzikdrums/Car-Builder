import { NavLink, withRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  changeSpecs,
  getCars,
  getRequest,
  loadCarsRequest,
} from '../redux/carsRedux';

import CarBuilderWrapper from '../styles/CarBuilderStyles';
import CarLookOption from './CarLookOption';
import CarOption from './CarOption';
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg';
import Loader from './Loader';
import Summary from './Summary';
import { connect } from 'react-redux';

const content = {
  colorOptionContent: {
    title: 'Select Color',
    category: 'color',
  },
  gearboxOptionContent: {
    title: 'gearbox',
    subtitle: 'Our flawless gearboxes, designes exclusively for electric motor',
  },
  engineOptionContent: {
    title: 'engine',
    subtitle:
      'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound',
  },
  featuresOptionContent: {
    title: 'features',
    subtitle:
      'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound',
  },
  interiorOptionContent: {
    title: 'Select Premium Interior',
    category: 'interior',
  },
  interiorLayoutContent: {
    title: 'layout',
  },
};

const CarBuilder = ({
  loadCarsRequest,
  cars,
  specs,
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
        <CarLookOption
          model={pickedModel}
          options={cars[pickedModel].colors}
          category={content.colorOptionContent.category}
          title={content.colorOptionContent.title}
        />
        <CarOption
          options={cars[pickedModel].engines}
          title={content.engineOptionContent.title}
          subtitle={content.engineOptionContent.subtitle}
        />
        <CarOption
          options={cars[pickedModel].gearbox}
          title={content.gearboxOptionContent.title}
          subtitle={content.gearboxOptionContent.subtitle}
        />
        <CarLookOption
          model={pickedModel}
          layout={cars[pickedModel].layout}
          category={content.interiorOptionContent.category}
          title={content.interiorOptionContent.title}
          options={cars[pickedModel].interior}
        />
        {pickedModel === '2' && (
          <CarOption
            options={cars[pickedModel].layout}
            title={content.interiorLayoutContent.title}
          />
        )}
        <CarOption
          options={cars[pickedModel].features}
          title={content.featuresOptionContent.title}
          subtitle={content.featuresOptionContent.subtitle}
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
